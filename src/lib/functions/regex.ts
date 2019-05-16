export const emailRegexTest = (email: string) => {
  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
  return emailRegex.test(email);
};

export const trPhoneNumberRegexTest = (trNumber: string) => {
  const trNumberRegex = /(([\+]90?)|([0]?))([ ]?)((\([0-9]{3}\))|([0-9]{3}))([ ]?)([0-9]{3})(\s*[\-]?)([0-9]{2})(\s*[\-]?)([0-9]{2})/;
  return trNumberRegex.test(trNumber);
};
