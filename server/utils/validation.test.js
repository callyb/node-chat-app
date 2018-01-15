const expect = require("expect");
const { isRealString } = require("./validation.js");

describe("isRealString", () => {
  it("should reject non-string values", () => {
    var str = 1234;
    var res = isRealString(str);

    expect(res).toBe(false);
  });
  it("should reject string with only spaces", () => {
    var str = "  ";
    var res = isRealString(str);

    expect(res).toBe(false);
  });
  it("should allow string with non space characters", () => {
    var str = "st rin g";
    var res = isRealString(str);

    expect(res).toBe(true);
  });
});
