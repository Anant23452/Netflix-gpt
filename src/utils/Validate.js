const checkValidaData =(email,password)=>{
    //regex for email validation- go to web and find it 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if(!emailRegex && !passwordRegex){
        return "Invalid email and password";
    }
    return null;
}