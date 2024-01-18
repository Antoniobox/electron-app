async function setDataForPacienteForm() {
    const inputId = document.getElementById('id')
    const inputSip = document.getElementById('sip')
    const inputDni = document.getElementById('dni')
    const inputNombre = document.getElementById('nombre')
    const inputApellido1 = document.getElementById('apellido1')
    await window.api.onEditPaciente((paciente)=>{
        console.log("Esto se está ejecutando")
        inputId.setAttribute('value', paciente._id)
        inputSip.setAttribute('value', paciente._sip)
        inputDni.setAttribute('value', paciente._dni)
        inputNombre.setAttribute('value', paciente._nombre)
        inputApellido1.setAttribute('value', paciente._apellido1)
    })
}

function initSetDataForPacienteForm() {
    try {
        setDataForPacienteForm()
    }catch(error){
        console.error(error)
    }
}
