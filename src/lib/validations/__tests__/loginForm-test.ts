import loginForm from "../loginForm";

describe("Login Form", () => {
  it("should errors object contain email error with unvalid email", () => {
    const values = {
      email: "unvalid_email",
      pass: "pass"
    };
    const errors = loginForm(values);
    expect(Object.keys(errors)).toContain("email");
  });

  it("should errors object contain password error without password", () => {
    const values = {
      email: "email"
    };
    const errors = loginForm(values);
    expect(Object.keys(errors)).toContain("password");
  });

  it("should returnt empty object with valid email and password", () => {
    const values = {
      email: "email@gmail.com",
      password: "strongPass1234."
    };
    const errors = loginForm(values);
    expect(Object.keys(errors).length).toEqual(0);
  });
});
