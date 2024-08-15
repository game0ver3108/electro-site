document.getElementById("calc").addEventListener("submit", (e) => {
    e.preventDefault();
    const volts = Number(e.target["vVal"].value);
    const amps = Number(e.target["iVal"].value);
    alert(volts+amps);
});

function funny() {
    alert("Hhhhhhhhhhhheeeeeeeeeeyyyyyyyyyyyyyyyyyyyyyy")
}