console.log("Script cargado correctamente");


$(document).ready(function () {
    const modoNocheActivo = localStorage.getItem("modoNocheActivo") === "true";

    if (modoNocheActivo) {
        $("body").addClass("modo-noche");
        $("#luna").attr("src", "img/modoNoche/sol.png");
    } else {
        $("#luna").attr("src", "img/modoNoche/luna.png");
    }

    $("#luna").on("click", function () {
        $("body").toggleClass("modo-noche");

        const esModoNoche = $("body").hasClass("modo-noche");

        $("#luna").attr("src", esModoNoche ? "img/modoNoche/sol.png" : "img/modoNoche/luna.png");

        localStorage.setItem("modoNocheActivo", esModoNoche);
    });
});


const formulario = document.querySelector("#formulario_contacto");

if (formulario) {
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("ncom").value.trim();
        const telefono = document.getElementById("tel").value.trim();
        const mail = document.getElementById("Mail").value.trim();
        const asunto = document.getElementById("Asunto").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const campos = [nombre, telefono, mail, asunto, mensaje];

        for (let campo of campos) {
            if (!campo) {
                alert("Por favor completa todos los campos");
                return;
            }
        }

        if (!mail.includes("@") || !mail.includes(".")) {
            alert("Mail ingresado inválido");
            return;
        }

        alert("¡Formulario enviado! Gracias por contactarte " + nombre + ". En breve le estaré respondiendo.");
        formulario.reset();

        console.log("Nombre:", nombre);
        console.log("Teléfono:", telefono);
        console.log("Mail:", mail);
        console.log("Asunto:", asunto);
        console.log("Mensaje:", mensaje);
    });
}




