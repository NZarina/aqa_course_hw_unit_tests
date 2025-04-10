// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
    if (!/[A-Z]/.test(password)) {
        return false;
    } if (!/[a-z]/.test(password)) {
        return false;
    } if (!/\d/.test(password)) {
        return false;
    } if (password.length < 8) {
        return false;
    } if (password.trim().length === 0) {
        return false;
    } 
    
    return true;
}

console.log(validatePassword('   ')); // false
console.log(validatePassword('password')); // false
console.log(validatePassword('passWord')); // false
console.log(validatePassword('passWord0')); // true