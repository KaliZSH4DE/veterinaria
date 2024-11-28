// Sistema de citas con JavaScript
function bookAppointment(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const confirmation = document.getElementById("confirmation");

    // Confirmación de cita
    confirmation.innerHTML = `
        <h3>¡Cita Reservada!</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Fecha:</strong> ${date}</p>
        <p><strong>Hora:</strong> ${time}</p>
    `;

    // Limpiar formulario
    document.getElementById("appointmentForm").reset();
}
