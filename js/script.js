function saludar() {
    alert('Hola!')
}

function gestionarFormulario(evento){
    evento.preventDefault()

    let nombreCompleto = document.getElementById("nombre_completo").value
    let correo = document.getElementById("correo").value
    let fechaNacimiento = document.getElementById("fecha_nacimiento").value
    let integrantesFamlia = document.getElementById("integrantes_familia").value
    integrantesFamlia = Number(integrantesFamlia)
    // # select
    let tipoPlan = document.getElementById("tipo_plan").value
    // # checkbox
    let terminosContrato = document.getElementById("terminos").checked
    // # radios
    let usoPersonal, usoProfesional, tipoUso
    usoPersonal = document.getElementById("uso_personal").checked
    usoProfesional = document.getElementById("uso_profesional").checked

    tipoUso = usoPersonal ? "Uso personal" : "Uso profesional"


    // verificar valores
    console.log("Nombre completo", nombreCompleto)
    console.log("Correo electronico", correo)
    console.log("Fecha nacimiento", fechaNacimiento)
    console.log("Integrantes familia", typeof integrantesFamlia)
    console.log("Tipo plan:", tipoPlan)
    console.log("Tipo de uso:", tipoUso)
    console.log("Terminos de contrato", terminosContrato)

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `
    <h5>Resultado formuario</h5>
    <p>Nombre completo: ${nombreCompleto}</p>
    <p>Correo electronico: ${correo}</p>
    <p>Fecha nacimiento: ${fechaNacimiento}</p>
    <p>Integrantes familia: ${integrantesFamlia}</p>
    <p>Tipo plan: ${tipoPlan}</p>
    <p>Terminos de contrato: ${terminosContrato}</p>
    <p>Tipo de uso: ${tipoUso}</p>
    `
    
    // alert("Funciono!")
}

let formulario = document.getElementById("formulario")
formulario.onsubmit = gestionarFormulario