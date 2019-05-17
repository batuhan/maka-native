import errors from "../../config/errors";

export const getFormError = (errorName: string, param?: any) => {
  const error: string = (<any>errors).formErrors[errorName] || "";
  return (param && error.replace(":[param]", param)) || error;
};
