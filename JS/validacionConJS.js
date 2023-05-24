function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const dni = document.getElementsByName("dni").value.trim();
  
    if (nombre === "" || dni === "" || apellido === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.CharCodeAt(i);G
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }
    for (var j = 0; j < apellido.length; j++) {
        var charCodeA = apellido.charCodeAt(j);
        if (!((charCodeA >= 65 && charCodeA <= 90) || (charCodeA >= 97 && charCodeA <= 122) || charCodeA === 32)) {
            alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }

    if (dni.length !== 8) {
        alert("El campo 'dni' debe contener exactamente 8 dígitos numéricos.");
        return false;
    }
    for (var k = 0; k < dni.length; k++) {
        var digit = dni.charAt(k);
        if (digit < "0" || digit > "9") {
            alert("El campo 'dni' solo puede contener dígitos numéricos.");
            return false;
        }
    }

    alert("Formulario enviado correctamente.");
    return true;
}