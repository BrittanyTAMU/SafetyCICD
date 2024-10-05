let toggle = document.querySelector('.toggle');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let close = document.querySelector('.close');
let body = document.querySelector('body');
let searchBx = document.querySelector('.searchBx');
let searchOpen = document.querySelector('.searchOpen');
let searchClose = document.querySelector('.searchClose');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    left.classList.toggle('active');
    right.classList.toggle('overlay');
    body.style.overflow = 'hidden';
});
close.onclick = () => {
    toggle.classList.remove('active');
    left.classList.remove('active');
    right.classList.remove('overlay');
    body.style.overflow = '';
};
searchOpen.onclick = () => {
    searchBx.classList.add('active');
};
searchClose.onclick = () => {
    searchBx.classList.remove('active');
};
window.onclick = (e) => {
    if (e.target == right) {
        toggle.classList.remove('active');
        left.classList.remove('active');
        right.classList.remove('overlay');
        body.style.overflow = '';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://ugi0om9n21.execute-api.us-east-1.amazonaws.com/prod/get-vehicle', {  // Corrected API URL and fetch method
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched Vehicle Data:', data);
        if (data && data.length > 0) {  // Ensure there's data before updating the DOM
            updateVehicleDOM(data[0]);  // Assuming you want to show the first vehicle's data
        }
    })
    .catch(error => console.error('Error fetching vehicle data:', error));
});

function updateVehicleDOM(vehicle) {
    // Make sure `vehicle` exists before updating the DOM
    document.getElementById('location4').innerText = vehicle.location4 || 'No data';
    document.getElementById('incidentDate4').innerText = vehicle.incidentDate4 || 'No data';
    document.getElementById('incidentTime4').innerText = vehicle.incidentTime4 || 'No data';
    document.getElementById('project4').innerText = vehicle.project4 || 'No data';
    document.getElementById('vehicle').innerText = vehicle.vehicle || 'No data';
    document.getElementById('owner5').innerText = vehicle.owner5 || 'No data';
    document.getElementById('driver').innerText = vehicle.driver || 'No data';
    document.getElementById('eventDescription4').innerText = vehicle.eventDescription4 || 'No data';
    document.getElementById('immediateActions').innerText = vehicle.immediateActions || 'No data';
    document.getElementById('repair2').innerText = vehicle.repair2 || 'No data';
    document.getElementById('prevent2').innerText = vehicle.prevent2 || 'No data';
    document.getElementById('responsible3').innerText = vehicle.responsible3 || 'No data';
}





















// document.addEventListener('DOMContentLoaded', () => {
//     fetch('/api/get-latest-project')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched Vehicle Data:', data); // Log the entire data object
//         updateVehicleDOM(data);
//       })
//       .catch(error => console.error('Error fetching vehicle project:', error));
//   });
  
//   function updateVehicleDOM(data) {
//     console.log('Updating DOM with data:', data); // Log data before updating DOM
//     const location4Elem = document.getElementById('location4');
//     const incidentDate4Elem = document.getElementById('incidentDate4');
//     const incidentTime4Elem = document.getElementById('incidentTime4');
//     const project4Elem = document.getElementById('project4');
//     const vehicleElem = document.getElementById('vehicle');
//     const owner5Elem = document.getElementById('owner5');
//     const driverElem = document.getElementById('driver');
//     const eventDescription4Elem = document.getElementById('eventDescription4');
//     const immediateActionsElem = document.getElementById('immediateActions');
//     const repair2Elem = document.getElementById('repair2');
//     const prevent2Elem = document.getElementById('prevent2');
//     const responsible3Elem = document.getElementById('responsible3');
  
//     if (location4Elem) location4Elem.innerText = data.location4 || 'No data';
//     if (incidentDate4Elem) incidentDate4Elem.innerText = data.incidentDate4 || 'No data';
//     if (incidentTime4Elem) incidentTime4Elem.innerText = data.incidentTime4 || 'No data';
//     if (project4Elem) project4Elem.innerText = data.project4 || 'No data';
//     if (vehicleElem) vehicleElem.innerText = data.vehicle || 'No data';
//     if (owner5Elem) owner5Elem.innerText = data.owner5 || 'No data';
//     if (driverElem) driverElem.innerText = data.driver || 'No data';
//     if (immediateActionsElem) immediateActionsElem.innerText = data.immediateActions || 'No data';
//     if (eventDescription4Elem) eventDescription4Elem.innerText = data.eventDescription4 || 'No data';
//     if (prevent2Elem) prevent2Elem.innerText = data.prevent2 || 'No data';
//     if (repair2Elem) repair2Elem.innerText = data.repair2 || 'No data';
//     if (responsible3Elem) responsible3Elem.innerText = data.responsible3 || 'No data';
//   }
  
