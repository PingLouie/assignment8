// bind a click event to the +
// every time that + is clicked
// for that flavor, check if a cookie with the count is set
// if the cookie is set, you want to take that value and add 1 and resave it
// otherwise set a cookie with a value of 1

$(".SugarCountUp").click(function() {

	var SCUp = Cookies.get("SugarCountUp");  

	if (typeof SCUp === "undefined") {
		SCUp = 1;
	}
	else {
		SCUp++;
	}
	console.log("SCUp",SCUp)

	/* if (isNaN(number) {
		number == parseInt("1");
	}); */

	/* var isNaN = function(number) {
		return number == 1;
	}; */

	Cookies.set("SugarCountUp", SCUp);
});

$(".SugarCountDown").click(function() {
	var SCDown = Cookies.get("SugarCountDown");
	if (typeof SCDown === "undefined") {
		SCDown = 1;
	}
	else {
		SCDown--;
	};
	console.log("SCDown", SCDown);
	Cookies.set("SugarCountDown", SCDown);
});
console.log("hi");
$(".SugarReset").click(function() {
	var SCR = 0;
	console.log("SCR", SCR);
	Cookies.set("SugarReset", SCR);
});