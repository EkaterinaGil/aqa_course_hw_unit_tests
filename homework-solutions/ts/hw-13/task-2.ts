function validatePassword(password: string): boolean {
    return password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        !/^\s*$/.test(password)
}
console.log(validatePassword("StrongP@ssw0rd"));
console.log(validatePassword("weakpass"));     