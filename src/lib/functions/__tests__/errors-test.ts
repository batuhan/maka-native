import { getFormError } from "../errors";

describe("Errors", () => {
  describe("getFormError", () => {
    it("should return empty string without errorName", () => {
      const error = getFormError();
      expect(error).toEqual("");
    });

    it("should return error enum error name", () => {
      let errorName = "EMAIL_REQUIRED";
      let error = getFormError(errorName);
      expect(error).toEqual("Email address is required");
      errorName = "PASSWORD_SHORT";
      error = getFormError(errorName);
      expect(error).toEqual("Password must be :[param] or more characters");
    });

    it("should return error enum error name", () => {
      let errorName = "EMAIL_REQUIRED";
      let error = getFormError(errorName);
      expect(error).toEqual("Email address is required");
      errorName = "PASSWORD_SHORT";
      error = getFormError(errorName);
      expect(error).toEqual("Password must be :[param] or more characters");
    });

    it("should return empty string with not enum error name", () => {
      const errorName = "NOT_ENUM";
      const error = getFormError(errorName);
      expect(error).toEqual("");
    });

    it("should return error with given params", () => {
      const errorName = "PASSWORD_SHORT";
      const errorParams = 371236;
      const error = getFormError(errorName, errorParams);
      expect(error).toEqual("Password must be 371236 or more characters");
    });
  });
});
