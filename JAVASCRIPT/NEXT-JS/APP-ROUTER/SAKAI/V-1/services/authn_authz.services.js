import { BehaviorSubject } from 'rxjs';

const admin = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('admin')));

/* Identity and Access management (IAM) */
export const AuthenticationAuthorizationService = {
    get adminValue() { return admin.value },
    login: _login,
    logout: _logout,
    forgot: _forgot,
    reset: _reset,
    changePassword: _changePassword,
};

/**
 * Login functionality
 * @param {*} key 
 * @param {*} values 
 * @param {*} callBackFun 
 * @param {*} prepareKey 
 */
function _login(key, values, callBackFun, prepareKey) {
}

/**
 * Logout functionality
 * @param {*} key 
 * @param {*} callBackFun 
 * @param {*} prepareKey 
 */
function _logout(key, values, callBackFun, prepareKey) {
}

/**
 * Forgot functionality
 * @param {*} key 
 * @param {*} values 
 * @param {*} callBackFun 
 */
function _forgot(key, values, callBackFun) {
}

/**
 * Reset functionality
 * @param {*} key 
 * @param {*} values 
 * @param {*} callBackFun 
 */
function _reset(key, values, callBackFun) {
}

/**
 * Change password functionality
 * @param {*} key 
 * @param {*} values 
 * @param {*} callBackFun 
 */
function _changePassword(key, values, callBackFun) {
}