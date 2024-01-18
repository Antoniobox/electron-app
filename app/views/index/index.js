async function mostrarMedico(dni) {
	await window.api.getMedico(dni)
}

async function getPacientes() {
	const pacientes = await window.api.getPacientes()
	const tbody = document.getElementById("tbody")
	for(let paciente of pacientes) {
		let tr = document.createElement("tr")
		let tdNombre = document.createElement("td")
		let tdApellido = document.createElement("td")
		let tdDni = document.createElement("td")
		let btnMostrarMedico = document.createElement("button")
		tdNombre.innerHTML = paciente.nombre
		tdApellido.innerHTML = paciente.apellido1
		tdDni.innerHTML = paciente.dni
		btnMostrarMedico.innerHTML = "Mostrar"
		btnMostrarMedico.addEventListener("click", async ()=>{
			const medico = await window.api.getMedico(paciente.id)
			console.log("El medico es: "+medico[0].nombre)
		})
		tr.appendChild(tdNombre)
		tr.appendChild(tdApellido)
		tr.appendChild(tdDni)
		tr.appendChild(btnMostrarMedico)
		tbody.appendChild(tr)
	}
}