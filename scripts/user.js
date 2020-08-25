// login

const login = async (email, password) => {
	const response = firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch((err) => {
			console.log("login failed", err.message);
		});
	return response;
};

// logout

const logout = () => {
	firebase
		.auth()
		.signOut()
		.then(function () {
			console.log("signed out");
		})
		.catch(function (error) {
			("error, couldnt log out");
		});
};

// update a user's username

const updateUsername = (user, newName) => {
	user
		.updateProfile({
			displayName: newName,
		})
		.then(function () {
			console.log("username updated", user.displayName);
		})
		.catch(function (error) {
			// An error happened.
		});
};
