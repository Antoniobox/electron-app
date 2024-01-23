const inputId = document.getElementById('id')
const inputSip = document.getElementById('sip')
const inputDni = document.getElementById('dni')
const inputNombre = document.getElementById('nombre')
const inputApellido1 = document.getElementById('apellido1')

function setDataForPacienteForm() {
    window.api.onEditPaciente((paciente)=>{
        inputId.setAttribute('value', paciente._id)
        inputSip.setAttribute('value', paciente._sip)
        inputDni.setAttribute('value', paciente._dni)
        inputNombre.setAttribute('value', paciente._nombre)
        inputApellido1.setAttribute('value', paciente._apellido1)
    })
}

async function update() {
    const data = {
        id: inputId.getAttribute('value'),
        sip: inputSip.getAttribute('value'),
        dni: inputDni.getAttribute('value'),
        nombre: inputNombre.getAttribute('value'),
        apellido1: inputApellido1.getAttribute('value')
    }

    let res = await window.api.update(data)
    console.log(res)
}

setDataForPacienteForm()