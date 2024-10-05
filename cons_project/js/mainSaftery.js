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
        fetch('https://ugi0om9n21.execute-api.us-east-1.amazonaws.com/prod/get-safety', {
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
            console.log('Fetched Safety Data:', data);
            if (data && data.length > 0) {
                updateSafetyDOM(data[0]); // Assuming you want to show the first safety's data
            } else {
                console.log('No safety data available.');
            }
        })
        .catch(error => console.error('Error fetching safety data:', error));
    });

    function updateSafetyDOM(safetyData) {
        // Make sure `safetyData` exists before updating the DOM
        document.getElementById('dueDate3').innerText = safetyData.dueDate3 || 'No data';
        document.getElementById('recordNumber').innerText = safetyData.recordNumber || 'No data';
        document.getElementById('location').innerText = safetyData.location || 'No data'; // Changed 'location' to 'location4'
        document.getElementById('incidentDate').innerText = safetyData.incidentDate || 'No data'; // Changed 'incidentDate' to 'incidentDate4'
        document.getElementById('incidentTime').innerText = safetyData.incidentTime || 'No data'; // Changed 'incidentTime' to 'incidentTime4'
        document.getElementById('immediateResponse').innerText = safetyData.immediateResponse || 'No data';
        document.getElementById('totalCost').innerText = safetyData.totalCost || 'No data';
        document.getElementById('owner').innerText = safetyData.owner || 'No data'; // Changed 'owner' to 'owner5'
        document.getElementById('project').innerText = safetyData.project || 'No data'; // Changed 'project' to 'project4'
        document.getElementById('wind').innerText = safetyData.wind || 'No data';
        document.getElementById('descriptionOfEvents').innerText = safetyData.descriptionOfEvents || 'No data';
        document.getElementById('immediateResponse2').innerText = safetyData.immediateResponse2 || 'No data';
        document.getElementById('bestActions').innerText = safetyData.bestActions || 'No data';
    }

















// document.addEventListener('DOMContentLoaded', () => {
//     fetch('/api/get-latest-project')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched Safety Data:', data); // Log the entire data object
//         updateSafetyDOM(data);
//       })
//       .catch(error => console.error('Error fetching safety project:', error));
//   });
  
//   function updateSafetyDOM(data) {
//     console.log('Updating DOM with data:', data); // Log data before updating DOM
//     const dueDate3Elem = document.getElementById('dueDate3');
//     const recordNumberElem = document.getElementById('recordNumber');
//     const locationElem = document.getElementById('location');
//     const incidentDateElem = document.getElementById('incidentDate');
//     const incidentTimeElem = document.getElementById('incidentTime');
//     const immediateResponseElem = document.getElementById('immediateResponse');
//     const totalCostElem = document.getElementById('totalCost');
//     const ownerElem = document.getElementById('owner');
//     const projectElem = document.getElementById('project');
//     const windElem = document.getElementById('wind');
//     const descriptionOfEventsElem = document.getElementById('descriptionOfEvents');
//     const immediateResponse2Elem = document.getElementById('immediateResponse2');
//     const bestActionsElem = document.getElementById('bestActions');
  
//     if (dueDate3Elem) dueDate3Elem.innerText = data.dueDate3 || 'No data';
//     if (recordNumberElem) recordNumberElem.innerText = data.recordNumber || 'No data';
//     if (locationElem) locationElem.innerText = data.location || 'No data';
//     if (incidentDateElem) incidentDateElem.innerText = data.incidentDate || 'No data';
//     if (incidentTimeElem) incidentTimeElem.innerText = data.incidentTime || 'No data';
//     if (immediateResponseElem) immediateResponseElem.innerText = data.immediateResponse || 'No data';
//     if (totalCostElem) totalCostElem.innerText = data.totalCost || 'No data';
//     if (ownerElem) ownerElem.innerText = data.owner || 'No data';
//     if (projectElem) projectElem.innerText = data.project || 'No data';
//     if (windElem) windElem.innerText = data.wind || 'No data';
//     if (descriptionOfEventsElem) descriptionOfEventsElem.innerText = data.descriptionOfEvents || 'No data';
//     if (immediateResponse2Elem) immediateResponse2Elem.innerText = data.immediateResponse2 || 'No data';
//     if (bestActionsElem) bestActionsElem.innerText = data.bestActions || 'No data';
//   }
  
