function register() {
	// Get the register modal
	var modal = document.getElementById("register-modal");

	// Get the button that opens the modal
	var btn = document.getElementsByClassName("register-btn")[0];

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal
	btn.onclick = function () {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = "none";
		document.getElementById("register-form").reset();
		// resetValidation();
	}

	// When the user clicks anywhere outside of the modal, close it
	modal.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
			document.getElementById("register-form").reset();
			// resetValidation();
		}
	}

	// Validate input fields on form submission
	document.getElementById("register-form").addEventListener("submit", function (event) {
		event.preventDefault();
		var formValid = true;

		var nameField = document.getElementById("name");
		if (nameField.value.trim() === "") {
			setInvalid(nameField, "Name is required.");
			formValid = false;
		} else {
			setValid(nameField);
		}

		var emailField = document.getElementById("email");
		if (emailField.value.trim() === "") {
			setInvalid(emailField, "Email is required.");
			formValid = false;
		} else if (!isValidEmail(emailField.value.trim())) {
			setInvalid(emailField, "Invalid email format.");
			formValid = false;
		} else {
			setValid(emailField);
		}

		var passwordField = document.getElementById("password");
		if (passwordField.value.trim() === "") {
			setInvalid(passwordField, "Password is required.");
			formValid = false;
		} else if (passwordField.value.trim().length < 6) {
			setInvalid(passwordField, "Password must be at least 6 characters.");
			formValid = false;
		} else {
			setValid(passwordField);
		}

		var confirmPasswordField = document.getElementById("confirm-password");
		if (confirmPasswordField.value.trim() === "") {
			setInvalid(confirmPasswordField, "Confirm Password is required.");
			formValid = false;
		} else if (confirmPasswordField.value.trim() !== passwordField.value.trim()) {
			setInvalid(confirmPasswordField, "Passwords do not match.");
			formValid = false;
		} else {
			setValid(confirmPasswordField);
		}

		if (formValid) {
			console.log("Form is valid.");
		}
	});

	// Set input field to invalid with error message
	function setInvalid(field, message) {
		field.classList.remove("valid");
		field.classList.add("invalid");
		field.nextElementSibling.innerHTML = message;
		field.nextElementSibling.style.display = "block";
	}

	// Set input field to valid with success message
	function setValid(field) {
		field.classList.remove("invalid");
		field.classList.add("valid");
		field.nextElementSibling.innerHTML = "Valid";
		field.nextElementSibling.style.color = "green";
		field.nextElementSibling.style.display = "block";
	}

	// Reset all input fields to default state
	function resetValidation() {
		var fields = document.getElementsByTagName("input");
		for (var i = 0; i < fields.length; i++) {
			fields[i].classList.remove("invalid");
			fields[i].classList.remove("valid");
			fields[i].nextElementSibling.style.display = "none";
		}
	}

	// Check if input email is valid format
	function isValidEmail(email) {
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
}

const tabsBtn = document.querySelectorAll(".register-title")

const tabsItem = document.querySelectorAll(".tabs__item")

tabsBtn.forEach((item) => {
	item.addEventListener("click", () => {
		let currentBtn = item
		let tabId = currentBtn.getAttribute("data-tab")
		let currentTab = document.querySelector(tabId)

		if (!currentBtn.classList.contains("active")) {
			tabsBtn.forEach(function (item) {
				item.classList.remove("active")
			})

			tabsItem.forEach(function (item) {
				item.classList.remove("active")
			})

			currentBtn.classList.add("active")
			currentTab.classList.add("active")
		}
	})
})

document.querySelector(".register-title").click()

register()

const eyes = document.getElementById("eye")

function show() {
	var p = document.getElementById('pwd');
	p.setAttribute('type', 'text');
	eyes.src = "img/eye-open.svg"
}

function hide() {
	var p = document.getElementById('pwd');
	p.setAttribute('type', 'password');
	eyes.src = "img/eye-close.svg"
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {

	if (pwShown == 0) {
		pwShown = 1;
		show();
	} else {
		pwShown = 0;
		hide();
	}
}, false);