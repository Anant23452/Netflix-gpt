export const checkValidaData = (email, password,name) => {
  // Simple regex patterns for validation
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  const isNameValid=/^[a-zA-Z\s]+$/.test(name);

  if (!isEmailValid) {
    return "Invalid email format";

    //what is i am doing 
  }

  if (!isPasswordValid) {
    return "Password must be at least 8 characters long and contain letters & numbers";
  }
  if(!isNameValid){
    return "Name can only contain letters and spaces";
  }

  return null; // means valid data
};
