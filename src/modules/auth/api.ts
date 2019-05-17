const baseUrl = "blabla";

const login = (email: string, password: string) => {
  //call api
  const profile = {
    email
  };
  const idToken = "token";
  return {
    profile,
    idToken
  };
};

const register = (email: string, password: string, fullname: string) => {
  //call api
  const profile = {
    email,
    fullname
  };
  const idToken = "token";

  return {
    profile,
    idToken
  };
};

export { login, register };
