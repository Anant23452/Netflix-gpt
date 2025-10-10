export const checkValidaData = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  if (!isEmailValid) {
    return "Invalid email format";
  }

  if (!isPasswordValid) {
    return "Password must be at least 8 characters long and contain letters & numbers";
  }

  return null; // means valid data
};
