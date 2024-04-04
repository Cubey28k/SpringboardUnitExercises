const express = require('express');
const app = express();
const ExpressError = require('./expressError');

app.get('/mean', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('Pass a query of nums, comma-separated for results, i.e: /mean?=1,2,3/', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    //check for invalid input
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operations:"mean",
        result: findMean(nums)
    }

    return res.send(result);
});

app.get('/median', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('Pass a query of nums, comma-separated for results, i.e: /median?=1,2,3/', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    //check for invalid input
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operations:"median",
        result: findMedian(nums)
    }

    return res.send(result);
});

app.get('/mode', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('Pass a query of nums, comma-separated for results, i.e: /mode?=1,2,2,3/', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    //check for invalid input
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operations:"mode",
        result: findMode(nums)
    }

    return res.send(result);
});

/** Error handling below */

app.use((req, res, next) => {
    const err = new ExpressError("Not Found", 404);

    //error goes to next middleware
    return next(err);
});

app.use ((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, () => {
    console.log(`Server starting on port 3000`);
});