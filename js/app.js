// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()  

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('miAudio');
    const modalSobre = new bootstrap.Modal(document.getElementById('sobreModal'));

    if (!window.location.search.includes('send=1')) {
        modalSobre.show();
    }

    document.getElementById("sobreModalLink").addEventListener("click", function () {
        audio.loop = true;
        audio.play();
        modalSobre.hide();
    });

    const formulario = document.getElementById("reservation-form");
    const checkbox = document.getElementById("cancelled");
    const nameField = document.getElementById("name");
    const adultsField = document.getElementById("adults");
    const childrenField = document.getElementById("children");
    const divAdults = document.getElementById("divAdults");
    const divChildren = document.getElementById("divChildren");
    const honeypot = document.getElementById("website");

    nameField.addEventListener("input", function () {
        const palabras = this.value.split(" ");
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i].length > 0) {
                palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substring(1).toLowerCase();
            }
        }
        this.value = palabras.join(" ");
    });

    function actualizarCampos() {
        if (checkbox.checked) {
            adultsField.removeAttribute("required");
            adultsField.classList.remove("is-invalid", "is-valid");
            divAdults.classList.add("d-none");
            divChildren.classList.add("d-none");
        } else {
            adultsField.setAttribute("required", "required");
            divAdults.classList.remove("d-none");
            divChildren.classList.remove("d-none");
        }
    }

    checkbox.addEventListener("change", actualizarCampos);
    actualizarCampos();

    formulario.addEventListener("submit", function (event) {
        if (honeypot.value.trim() !== "") {
            event.preventDefault();
            return;
        }

        let formIsValid = true;

        if (!nameField.value.trim()) {
            nameField.classList.add("is-invalid");
            nameField.classList.remove("is-valid");
            mostrarError(nameField, true);
            formIsValid = false;
        } else {
            nameField.classList.remove("is-invalid");
            nameField.classList.add("is-valid");
            mostrarError(nameField, false);
        }

        if (!checkbox.checked) {
            const adultsValue = parseInt(adultsField.value, 10);
            if (isNaN(adultsValue) || adultsValue < 1 || adultsValue > 5) {
                adultsField.classList.add("is-invalid");
                adultsField.classList.remove("is-valid");
                mostrarError(adultsField, true);
                formIsValid = false;
            } else {
                adultsField.classList.remove("is-invalid");
                adultsField.classList.add("is-valid");
                mostrarError(adultsField, false);
            }

            const childrenValue = parseInt(childrenField.value, 10);
            const maxChildren = parseInt(childrenField.max) || 5;
            if (childrenField.value && (isNaN(childrenValue) || childrenValue < 0 || childrenValue > maxChildren)) {
                childrenField.classList.add("is-invalid");
                childrenField.classList.remove("is-valid");
                mostrarError(childrenField, true);
                formIsValid = false;
            } else {
                childrenField.classList.remove("is-invalid");
                if (childrenField.value) {
                    childrenField.classList.add("is-valid");
                }
                mostrarError(childrenField, false);
            }
        } else {
            adultsField.classList.remove("is-invalid", "is-valid");
            childrenField.classList.remove("is-invalid", "is-valid");
            mostrarError(adultsField, false);
            mostrarError(childrenField, false);
        }

        formulario.classList.add("was-validated");

        if (!formIsValid) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        event.preventDefault();

        const nombre = nameField.value.trim();
        const adultos = adultsField?.value || "0";
        const ninos = childrenField?.value || "0";
        const numero = "525518558728";

        let mensaje;
        if (!checkbox.checked) {
            mensaje = `Hola! Soy *${nombre}* y confirmo mi asistencia a los XV años de Paola. Asistiremos ${adultos} adulto(s) y ${ninos} niño(s).`;
        } else {
            mensaje = `Hola! Soy *${nombre}* y lamento decirte que no podré asistir a los XV años de Paola. Espero que tengan un gran evento!`;
        }

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        const modalConfirmar = bootstrap.Modal.getInstance(document.getElementById('modalSignin'));
        modalConfirmar?.hide();

        const mensajeGracias = document.getElementById('mensajeGracias');
        mensajeGracias.innerHTML = checkbox.checked
            ? `Lamentamos que no puedas asistir al evento <br>Gracias por avisarnos.`
            : `Tu confirmación ha sido registrada.<br>¡Nos vemos en la fiesta! 🎊`;

        setTimeout(() => {
            const modalGracias = new bootstrap.Modal(document.getElementById('modalGracias'));
            modalGracias.show();
        }, 500);

        window.open(url, "_blank");
    });

    function mostrarError(input, mostrar) {
        const feedback = input.parentElement.querySelector('.invalid-feedback');
        if (!feedback) return;
        feedback.style.display = mostrar ? 'block' : 'none';
    }

    function agregarValidacionEnTiempoReal(input, tipo = 'text') {
        input.addEventListener('input', function () {
            let esValido = false;
    
            if (tipo === 'text') {
                esValido = input.value.trim().length >= 5;
            }
    
            if (tipo === 'number') {
                //const val = parseInt(input.value, 10);
                //esValido = !isNaN(val) && val >= parseInt(input.min || "0") && val <= parseInt(input.max || "10");

                if (input.value.trim() === "") {
                    esValido = true; // vacío = válido (si es opcional)
                } else {
                    const val = parseInt(input.value, 10);
                    esValido = !isNaN(val) && val >= parseInt(input.min || "0") && val <= parseInt(input.max || "5");
                }
            }
            
    
            if (esValido) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                mostrarError(input, false);
            } else {
                input.classList.remove('is-valid');
                mostrarError(input, true);
            }
        });
    }
    
    // Aplica a los campos
    agregarValidacionEnTiempoReal(nameField, 'text');
    agregarValidacionEnTiempoReal(adultsField, 'number');
    agregarValidacionEnTiempoReal(childrenField, 'number');    

});
