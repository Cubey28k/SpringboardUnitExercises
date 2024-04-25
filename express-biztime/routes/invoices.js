const express = require(`express`);
const db = require(`../db`);
const ExpressError = require("../expressError");
let router = new express.Router();

router.get('/', async (req, res, next) => {
    try{
        const result = await db.query(`SELECT * FROM invoices ORDER BY id`)
        return res.json({invoices: result.rows});
    }
    catch(e) {
        return next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try{
        const { id } = req.parms;
        const result = await db.query(
            `SELECT i.id, i.comp_code, i.amt, i.paid, i.add_date, i.paid_date
            FROM invoices AS i
            INNER JOIN companies AS c
            ON i.comp_code = c.code
            WHERE i.id = $1`,
            [ id ]
        );
        if (result.rows.length === 0) {
            throw new ExpressError(`Invoice with id of ${id} does not exist`, 404);
    }
    const data = result.rows[0];
    const invoice = {
        id: data.id,
        amt: data.amt,
        paid: data.paid,
        add_date: data.add_date,
        paid_date: data.paid_date,
        company: {
            code: data.comp_code,
            name: data.name,
            description: data.description
        }
    };
    return res.json({ invoice: invoice});
    } catch (e) {
        return next(e);
    }
});

router.put('/id', async (req, res, next) => {
    try{
        const { id } = req.params;
        const { amt, paid } = req.body;
        let paidDate = null;
        
        const currResult = await db.query(`SELECT paid FROM invoices WHERE id = $1`, [id]);

        if (currResult.rows.length === 0) {
            throw new ExpressError(`Invoice with id of ${id} not found`, 404);
        }

        const currPaidDate = currResult.row[0].paid_date;

        if (!currPaidDate && paid) {
            paidDate = new Date();
        } else if (!paid) {
            paidDate = null;
        } else {
            paidDate = currPaidDate;
        }

        const result = db.query(
            `UPDATE invoices SET amt = $1, paid = $2, paid_date = $3 WHERE id = $4 RETURNING id, comp_code, amt, paid, add_date, paid_date`,
            [ amt, paid, paidDate, id ]
        );

        return res.json({ invoice: result.rows[0] });
    } catch (e) {
    return next(e);
    }
});

router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await db.query(`DELETE FROM invoices WHERE id = $1 RETURNING id`, [ id ]);

		if (result.rows.length === 0) {
			throw new ExpressError(`Could not find invoice with id ${id} to delete`, 404);
		}
		return res.json({ status: 'Deleted!' });
	} catch (e) {
		return next(e);
	}
});

module.exports = router;