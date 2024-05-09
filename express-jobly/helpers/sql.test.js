const { sqlForPartialUpdate } = require("./sql");

// f = field, v = value
// tests the partial update helper function
test("works: 1 item", function () {
    const result = sqlForPartialUpdate(
        { firstName: "v1" },
        { firstName: "f1", age: "f2" });
    expect(result).toEqual({
      setCols: "\"f1\"=$1",
      values: ["v1"],
    });
  });
  
  test("works: 2 items", function () {
    const result = sqlForPartialUpdate(
        { firstName: "v1", age: "v2" },
        { age: "f2" });
    expect(result).toEqual({
      setCols: "\"firstName\"=$1, \"f2\"=$2",
      values: ["v1", "v2"],
    });
  });
  