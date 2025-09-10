function validatePassword(password: string): boolean {
    if (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        !/^\s*$/.test(password)
    ) {
        return true;
    }
    return false;
}
console.log(validatePassword("StrongP@ssw0rd"));
console.log(validatePassword("weakpass"));     