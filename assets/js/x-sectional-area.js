document.getElementById("calc-form").addEventListener("submit", (event) => {
	event.preventDefault();

	const COPPER = {
		resistiveValue: parseFloat(
			document.getElementById("settings-copper-rv").innerText
		),
		tempCoefficient: document.getElementById("settings-copper-tc").innerText,
		referenceTemp: 20,
	};
	const ALUMINIUM = {
		resistiveValue: document.getElementById("settings-aluminium-rv").innerText,
		tempCoefficient: document.getElementById("settings-aluminium-tc").innerText,
		referenceTemp: 20,
	};

	const form = event.target;
	const amps = Number(form["amps"].value);
	const wireType = form["wire-type"].value;
	const temperature = Number(form["temperature"].value);
	const wireLengthInMetres = Number(form["wire-length"].value);
	const voltageDropPercentage = Number(form["voltage-drop"].value);

	const resistivity = getResistivityAtTemp(
		wireType === "C" ? COPPER : ALUMINIUM,
		temperature
	);

	const resultDisplay = document.getElementById("x-sectional-area");
	resultDisplay.value = calculateCrossSectionalArea(resistivity);

	function getResistivityAtTemp(wireType, temp) {
		const resistiveValue = wireType.resistiveValue;
		const tempCoefficient = wireType.tempCoefficient;

		return (
			resistiveValue * (1 + tempCoefficient * (temp - wireType.referenceTemp))
		);
	}

	function calculateCrossSectionalArea(resistivity) {
		return (
			((amps * resistivity * wireLengthInMetres) /
				(voltageDropPercentage * 12)) *
			Math.pow(10, 6)
		).toFixed(2);
	}
});
