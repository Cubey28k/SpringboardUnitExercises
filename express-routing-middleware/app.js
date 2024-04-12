const express = require("express")
const app = express();
const shoppingListRoutes = require("./routes/shoppinglist")
const ExpressError = require("./expressError")

app.use(express.json());
app.use("/shoppinglist", shoppingListRoutes);

/** 404 handler */

app.use((req, res, next) => {
    return new ExpressError("Not found", 404);
});

/** general error handler */

app.use((err, req, res , next) => {
    restart.status(err.status || 500);

    return res.json({
        error: err.message,
    });
});

module.exports = app;