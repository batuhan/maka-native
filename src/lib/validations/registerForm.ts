import { getFormError } from "../functions/errors";
import { getInAppConfigs } from "../functions/configs";
import { emailRegexTest, mobileNumberRegexTest } from "../functions/regex";

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

  if (getInAppConfigs("REGISTER_NUMBER_IS_REQUIRED")) {
    const countryCode = getInAppConfigs("COUNTRY_CODE");
    if (!values.mobileNumber) {
      errors.mobileNumber = getFormError("MOBILE_NUMBER_REQUIRED");
    } else if (!mobileNumberRegexTest(countryCode, values.mobileNumber)) {
      errors.mobileNumber = getFormError("MOBILE_NUMBER_INVALID");
    }
  }

  if (getInAppConfigs("REGISTER_FULLNAME_IS_REQUIRED")) {
    const fullnameLength = getInAppConfigs("MIN_FULLNAME_LENGTH");
    if (!values.fullname) {
      errors.fullname = getFormError("FULLNAME_REQUIRED");
    } else if (values.fullname.trim().length < fullnameLength) {
      errors.fullname = getFormError("FULLNAME_INVALID");
    }
  }

  return errors;
}
