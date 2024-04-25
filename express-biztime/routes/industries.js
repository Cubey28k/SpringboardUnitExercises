const express = require('express');
const ExpressError = require('../expressError');
const db = require("../db");
const { default: slugify } = require('slugify');
let router = new express.Router();

router.get('/', async (req, res, next) => {
    try {
        const result = await db.query(
            `SELECT i.code AS industry_code, i.description, c.code AS company_code
            FROM industries AS i
            LEFT JOIN companies_industries as ci
            ON i.code = ci.industry_code
            LEFT JOIN companies AS c
            ON ci.comp_code = c.code
            GROUP BY i.code, i.industry, c.code
            ORDER BY i.code`);
            res.send(result.rows);
    } catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try{
        const {industry} = req.body;
        const code = slugify(industry, {lower : true});
        const result = await db.query(
            `INSERT INTO industries (code, industry)
            VALUES code = $1, industry = $2
            RETURNING code, industry`,
            { code, industry }
        );
        res.status[201].send({ industry: result.rows[0] });
    } catch (e) {
        next(e);
    }
});

module.exports = router;