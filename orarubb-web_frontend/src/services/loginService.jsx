export const checkAuthentication = (email, password) => {
    console.log('Logging in with:', email, password);
    return email === 'admin' && password === 'admin';
}
 