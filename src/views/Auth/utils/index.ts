import validator from 'validator';
import * as formTypes from '../../../components/Form/types';


export const validateEmail: formTypes.FieldValidator = (email) => {
  const isValidEmail = validator.isEmail(email);
  const isEmpty = !email;

  const errorMessage = isEmpty ? 'email is required' : (
    isValidEmail ? null : 'hmm, that email dosen\'t look right'
  );

  return {
    isValid: isValidEmail,
    error: errorMessage,
  };
};

export const validatePassword: formTypes.FieldValidator = (password: string) => {
  const minPasswordLength = 6;
  const isLessThan = password?.length < minPasswordLength;
  const isEmpty = !password;

  const errorMssg = isEmpty ? 'password is required' : (
    isLessThan
      ? `minimum password length is ${minPasswordLength}`
      : 'password should contain at least 1 Uppercase, Lowercase letter & a symbol'
  );

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
  const isEmpty = !newPassword;
  const passwordsMatch = !isEmpty && oldpassword === newPassword;

  const errorMessage = isEmpty ? 'this field is required' : (
    passwordsMatch ? null : 'password does not match'
  );

  return {
    isValid: passwordsMatch,
    error: errorMessage,
  };
};