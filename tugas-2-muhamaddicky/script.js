// script.js
function hitung() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var operator = document.getElementById("operator").value;
    var hasil;

    switch (operator) {
        case "+":
            hasil = angka1 + angka2;
            break;
        case "-":
            hasil = angka1 - angka2;
            break;
        case "*":
            hasil = angka1 * angka2;
            break;
        case "/":
            hasil = bagi(angka1, angka2);
            break;
        default:
            hasil = "Operasi tidak valid";
    }

    document.getElementById("hasil").innerText = hasil;
}

function bagi(angka1, angka2) {
    if (angka2 === 0) {
        return "Tidak dapat dibagi oleh 0";
    }
    return angka1 / angka2;
}
