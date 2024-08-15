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

			if (amps && volts && !watts) {
                const wattsField = document.getElementById("watts");
                wattsField.value = calculateWatts(amps, volts);
			} else if (!amps && volts && watts) {
                const ampsField = document.getElementById("amps");
                ampsField.value = calculateAmps(volts, watts);
			} else if (amps && !volts && watts) {
                const voltsField = document.getElementById("volts");
                voltsField.value = calculateVolts(amps, watts);
			}
		} else if(inputCount == 3){
            alert("Please clear the field you want to be calculated");
        } 
        else {
			alert("At least 2 values are required");
		}

		function calculateWatts(amps, volts) {
			return Number((amps * volts).toFixed(DEFAULT_PRECISION));
		}

		function calculateVolts(amps, watts) {
			return Number((watts / amps).toFixed(DEFAULT_PRECISION));
		}

		function calculateAmps(volts, watts) {
			return Number((watts / volts).toFixed(DEFAULT_PRECISION));
		}
	});
