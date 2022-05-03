import validator from 'validator';

export const validateEmail = (email: string) => {
  const isValidEmail = validator.isEmail(email);

  return {
    isValid: isValidEmail,
    error: isValidEmail ? null : 'invalid email address',
  };
};

export const validatePassword = (password: string) => {
  const minPasswordLength = 6;
  const isLessThan = password?.length < minPasswordLength;

  const errorMssg = isLessThan
    ? `minimum password length is ${minPasswordLength}`
    : 'password should contain at least 1 Uppercase, Lowercase letter & a symbol';

  const isValidPassword = validator.isStrongPassword(password, {
    minLength: minPasswordLength,
    minUppercase: 1,
    minLowercase: 1,
    minSymbols: 1,
    minNumbers: 0,
  });

  return {
    isValid: isValidPassword,
    error: isValidPassword ? null : errorMssg,
  };
};

export const comparePassword = (oldpassword: string, newPassword: string) => {
  const passwordsMatch = oldpassword === newPassword;

  return {
    isValid: passwordsMatch,
    error: passwordsMatch ? null : 'password does not match',
  };
};