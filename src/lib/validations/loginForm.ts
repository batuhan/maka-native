import { getFormError } from "../functions/errors";
import { emailRegexTest } from "../functions/regex";
import { getInAppConfigs } from "../functions/configs";

export default function validate(values: { email: string; password: string }) {
  let errors: { email?: string; password?: string } = {};

  if (!values.email) {
    errors.email = getFormError("EMAIL_REQUIRED");
  } else if (!emailRegexTest(values.email)) {
    errors.email = getFormError("EMAIL_INVALID");
  }

  const passwordLength = getInAppConfigs("MIN_PASSWORD_LENGTH");
  if (!values.password) {
    errors.password = getFormError("PASSWORD_REQUIRED");
  } else if (values.password.length < passwordLength) {
    errors.password = getFormError("PASSWORD_SHORT", passwordLength);
  }

  return errors;
}
