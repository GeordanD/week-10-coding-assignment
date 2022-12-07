let appointmentNumber = 0;

document.getElementById("add-new-appointment").addEventListener("click", () => {
    let newAppointment = new Date();
    let appointmentsList = document.getElementById("appointments-list");
    let row = appointmentsList.insertRow(1);
    row.setAttribute("id", `appointmentNumber-${appointmentNumber}`);
    row.insertCell(0).innerHTML = document.getElementById("new-appointment-name").value;
    row.insertCell(1).innerHTML = `${newAppointment.getFullYear()}-${newAppointment.getMonth() + 1}-${newAppointment.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById("new-appointment-date").value;
    row.insertCell(3).innerHTML = document.getElementById("new-appointment-time").value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(appointmentNumber++))
});

function createDeleteButton(appointmentNumber) {
    let btn = document.createElement("button");
    btn.className = "btn btn-danger";
    btn.id = appointmentNumber;
    btn.innerHTML = "Delete Appointment";
    btn.onclick = () => {
        console.log(`Deleting row with appointmentNumber: appointmentNumber-${appointmentNumber}`);
        let elementToDelete = document.getElementById(`appointmentNumber-${appointmentNumber}`);
        console.log(elementToDelete);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}