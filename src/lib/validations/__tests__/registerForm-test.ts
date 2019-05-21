import registerForm from "../registerForm";

describe("Register Form", () => {
  it("should errors object contain email error with unvalid email", () => {
    const values = {
      email: "unvalid_email",
      fullname: "fullname",
      pass: "pass"
    };
    const errors = registerForm(values);
    expect(Object.keys(errors)).toContain("email");
  });

  it("should errors object contain password error without password", () => {
    const values = {
      email: "email",
      fullname: "fullname"
    };
    const errors = registerForm(values);
    expect(Object.keys(errors)).toContain("password");
  });

  it("should errors object contain fullname error without fullname", () => {
    const values = {
      email: "email",
      pass: "pass"
    };
    const errors = registerForm(values);
    expect(Object.keys(errors)).toContain("fullname");
  });

  it("should return empty object with valid email password and full name", () => {
    const values = {
      email: "email@gmail.com",
      password: "strongPass1234.",
      fullname: "fullname"
    };
    const errors = registerForm(values);
    expect(Object.keys(errors).length).toEqual(0);
  });
});
