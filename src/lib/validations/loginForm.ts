import { emailRegexTest } from "../functions/regex";

export default function validate(values: { email: string; password: string }) {
  let errors: { email?: string; password?: string } = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!emailRegexTest(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  }
  return errors;
}
