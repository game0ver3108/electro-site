// Electric Calculator
document
	.getElementById("calculator-form")
	.addEventListener("submit", (event) => {
		// Prevent default sorm submission
		event.preventDefault();

		// Set default number precision to 4 decimal places
		const DEFAULT_PRECISION = 4;

		// Access the form element
		const form = event.target;

		// Get all form inputs
		const inputs = form.querySelectorAll('input[type="text"]');

		// Ensure there are at least 2 form input values supplied
		let inputCount = 0;

		// Count the number of inputs that have values
		inputs.forEach((input) => {
			if (input.value.trim() !== "") {
				inputCount++;
			}
		});

		if (inputCount == 2) {
			// Collect input values
			const amps = Number(form["amps"].value);
			const volts = Number(form["volts"].value);
			const watts = Number(form["watts"].value);

			// Calculating for watts
			if (amps && volts && !watts) {
				const wattsField = document.getElementById("watts");
				wattsField.value = calculateWatts(amps, volts);
			}
			// Calculating for amps
			else if (!amps && volts && watts) {
				const ampsField = document.getElementById("amps");
				ampsField.value = calculateAmps(volts, watts);
			}
			// Calculating for volts
			else if (amps && !volts && watts) {
				const voltsField = document.getElementById("volts");
				voltsField.value = calculateVolts(amps, watts);
			}
		}

		// If 3 values are given the user is asked to remove one
		else if (inputCount == 3) {
			alert("Please clear the field you want to be calculated");
		}

		// No calculations can be done unless there is 2 values supplied
		else {
			alert("At least 2 values are required");
		}

		/**
		 * Calculates the power usage in watts
		 * @param {Number} amps The known ampere value
		 * @param {Number} volts The known voltage
		 * @returns The calculated watts
		 */
		function calculateWatts(amps, volts) {
			return Number((amps * volts).toFixed(DEFAULT_PRECISION));
		}

		/**
		 * Calculates the circuit voltage 
		 * @param {Number} amps The known amperes
		 * @param {Number} watts The know power wattage 
		 * @returns The calculated votlage
		 */
		function calculateVolts(amps, watts) {
			return Number((watts / amps).toFixed(DEFAULT_PRECISION));
		}

		/**
		 * Calculates the circuit amperage 
		 * @param {Number} volts The known voltage
		 * @param {Number} watts The known power usage in watts
		 * @returns The calculated circuit amperage 
		 */
		function calculateAmps(volts, watts) {
			return Number((watts / volts).toFixed(DEFAULT_PRECISION));
		}
	});
