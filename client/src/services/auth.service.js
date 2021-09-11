const API_URL = '/api/auth/';

const signup = (username, email, password) => {
	return fetch.post(API_URL + 'signup', {
		username,
		email,
		password,
	});
};

const signin = (username, password) => {
	return fetch
		.post(API_URL + 'signin', {
			username,
			password,
		})
		.then((res) => {
			if (res.data.accessToken) {
				localStorage.setItem('user', JSON.stringify(res.data));
			}
			return res.data;
		});
};

const signout = () => {
	localStorage.removeItem('user');
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};

export default {
	signup,
	signin,
	signout,
	getCurrentUser,
};