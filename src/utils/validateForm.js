export const isValidateForm = (email, password) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid";

  return null;
};
