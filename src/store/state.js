let defaultCity = '杭州'
try {
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
} catch (e) {
	// statements
	console.log(e);
}

export default {
	city: defaultCity
}