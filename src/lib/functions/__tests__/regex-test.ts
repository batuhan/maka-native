import { mobileNumberRegexTest, emailRegexTest } from "../regex";

describe("Regex Tests", () => {
  describe("Mobile Number Regex Tests", () => {
    it("should return false with unvalid country code", () => {
      const test = mobileNumberRegexTest();
      expect(test).toEqual(false);
    });
    it("should return false with unvalid number", () => {
      const unvalidNumber = "unvalid_number";
      const countryCode = "tr";
      const test = mobileNumberRegexTest(countryCode, unvalidNumber);
      expect(test).toEqual(false);
    });
    it("should return true with valid number and country code", () => {
      const validNumber = "5442831021";
      const countryCode = "tr";
      const test = mobileNumberRegexTest(countryCode, validNumber);
      expect(test).toEqual(true);
    });
  });

  describe("Email Regex Tests", () => {
    it("should return false with unvalid email", () => {
      const unvalidEmail = "unvalid_email";
      const test = emailRegexTest(unvalidEmail);
      expect(test).toEqual(false);
    });
    it("should return true with valid email", () => {
      const validEmail = "valid_email@gmail.com";
      const test = emailRegexTest(validEmail);
      expect(test).toEqual(true);
    });
  });
});
