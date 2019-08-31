import { UTILS, MESSAGES } from '@/utils/constants';

export const validateEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validate = regExp.test(email);
  return validate;
};

export const validatePassword = (password) => {
  // eslint-disable-next-line no-useless-escape
  const regExp = /^(?=.*\d)(?=.*[a-z])(?!.*\s).*$/;
  const validate = regExp.test(password);
  return validate;
};

export const setEmailError = (email) => {
  if (email.length === 0) {
    return MESSAGES.email_required;
  } else if (validateEmail(email)) {
    return '';
  }
  return MESSAGES.email_must_be_valid;
};

export const setPasswordError = (password) => {
  const minLenght = UTILS.min_password_lenght;
  if (password.length === 0) {
    return MESSAGES.password_required;
  } else if (password.length < minLenght) {
    return MESSAGES.password_min_lenght;
  } else if (!validatePassword(password)) {
    return MESSAGES.password_contain_digit;
  }
  return '';
};
