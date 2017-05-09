$(document).ready(function() {
	$(".SugarCountUp").click(function() {
		var flavor = $(this).parent().attr("data-flavor");

		var previousCount = Cookies.get(flavor);
		var currentCount = 0;

		if (previousCount) {
			currentCount = parseInt(previousCount) + 1; // -1
		} else {
			currentCount = 1; // 0
		}

		Cookies.set(flavor, currentCount);
	});

	$(".SugarCountDown").click(function() {
		var flavor = $(this).parent().attr("data-flavor");

		var previousCount = Cookies.get(flavor);
		var currentCount = 0;

		if (previousCount) {
			currentCount = parseInt(previousCount) - 1;
		} else {
			currentCount = 0;
		}

		Cookies.set(flavor, currentCount);
	});

	$(".SugarReset").click(function() {
		var flavor = $(this).parent().attr("data-flavor");
		Cookies.set(flavor, 0);
	});
});

$(document).ready(function() {
	$(".ChocolateCountUp").click(function() {
		var flavor = $(this).parent().attr("data-flavor");

		var previousCount = Cookies.get(flavor);
		var currentCount = 0;

		if (previousCount) {
			currentCount = parseInt(previousCount) + 1;
		} else {
			currentCount = 1;
		}

		Cookies.set(flavor, currentCount);
	});

	$(".ChocolateCountDown").click(function() {
		var flavor = $(this).parent().attr("data-flavor");

		var previousCount = Cookies.get(flavor);
		var currentCount = 0;

		if (previousCount) {
			currentCount = parseInt(previousCount) - 1;
		} else {
			currentCount = 0;
		}

		Cookies.set(flavor, currentCount);
	});

	$(".ChocolateReset").click(function() {
		var flavor = $(this).parent().attr("data-flavor");
		Cookies.set(flavor, 0);
	});
});

$(document).ready(function() {
	$(".LemonCountUp").click(function() {
		var flavor = $(this).parent().attr("data-flavor");

		var previousCount = Cookies.get(flavor);
		var currentCount = 0;

		if (previousCount) {
			currentCount = parseInt(previousCount) + 1;
		} else {
			currentCount = 1;
		}

		Cookies.set(flavor, currentCount);
	});

	$(".LemonCountDown").click(function() {
		var flavor = $(this).parent().attr("data-flavor");

		var previousCount = Cookies.get(flavor);
		var currentCount = 0;

		if (previousCount) {
			currentCount = parseInt(previousCount) - 1;
		} else {
			currentCount = 0;
		}

		Cookies.set(flavor, currentCount);
	});

	$(".LemonReset").click(function() {
		var flavor = $(this).parent().attr("data-flavor");
		Cookies.set(flavor, 0);
	});
});



