import { emailRegexTest, trPhoneNumberRegexTest } from "../functions/regex";

export default function validate(values: {
  email: string;
  password: string;
  fullname: string;
  mobileNumber: string;
}) {
  let errors: {
    email?: string;
    password?: string;
    mobileNumber?: string;
    fullname?: string;
  } = {};

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

  if (!values.mobileNumber) {
    errors.mobileNumber = "Mobile number is required";
  } else if (!trPhoneNumberRegexTest(values.mobileNumber)) {
    errors.email = "Mobile number is invalid";
  }

  if (!values.fullname) {
    errors.fullname = "Name is required";
  } else if (values.fullname.trim().length < 6) {
    errors.email = "Name is invalid";
  }

  return errors;
}
