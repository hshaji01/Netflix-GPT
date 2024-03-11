

const Validate = (email, password, fullName) => {
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    if (!isValidEmail) return "Email is not valid";
    if (!isValidPassword) return "Password is not valid";
    if (typeof fullName !== "undefined" && fullName === "") return "Full Name is required";
    return null
}

export default Validate