function validarFormulario() {

    const nombre = document.getElementsById("nombre").value.trim();
    const apellido = document.getElementByName("apellido").value.trim();
    const dni = document.getElementByName("dni").value.trim();

    if (nombre === "" || dni === "" || apellido === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.charCodeAt(i);
        if (nombre !== "" && !((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
            return false;
            alert("Ingrese un nombre solo puede contener caracteres alfabéticos y espacios.");
        }
        else {
            alert("Ingrese un nombre");
        }
    }

    if (dni.length !== 8) {
        alert("El campo 'dni' debe contener exactamente 8 dígitos numéricos.");
        return false;
    }
    for (var j = 0; j < dni.length; j++) {
        var digit = dni.charAt(j);
        if (digit < "0" || digit > "9") {
            alert("El campo 'dni' solo puede contener dígitos numéricos.");
            return false;
        }
    }

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
}