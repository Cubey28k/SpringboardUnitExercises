const { BadRequestError } = require("../expressError");

/**
 * Generates an SQL query string and parameter values in order to make a partial update to the database
 * @param {Object} dataToUpdate - Object that contains the data to be updated
 * @param {Object} jsToSql - Object which matches JS-style column names to the corresponding SQL column names
 * @returns {Object} - Object which contains the set caluse and parameter values for the SQL query
 * @throws {BadRequestError} - Throws a BadRequestError if no data is provided.
 * @example {firstName: 'Aliya', age:32} => 
 *          { setCols: '"first_name" = $1', "age" = $2',
 *            values: ['Aliya', 32] }
 */

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);

  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
