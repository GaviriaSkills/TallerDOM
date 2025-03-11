let conversion = document.getElementById('resultado');

function convertir(){
    let km = parseFloat(document.getElementById('km').value);
    let millas = km * 0.621371;
    
    conversion.textContent = `Millas: ${millas}`;
}

document.getElementById('km').addEventListener('input', convertir);