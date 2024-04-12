/** Extends the normal JS error so we can add status messages, error-handling middleware will return */

class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        // console.error(this.stack);
    }
}

module.exports = ExpressError;