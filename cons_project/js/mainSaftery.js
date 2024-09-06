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
    fetch('/api/get-latest-project')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Safety Data:', data); // Log the entire data object
        updateSafetyDOM(data);
      })
      .catch(error => console.error('Error fetching safety project:', error));
  });
  
  function updateSafetyDOM(data) {
    console.log('Updating DOM with data:', data); // Log data before updating DOM
    const dueDate3Elem = document.getElementById('dueDate3');
    const recordNumberElem = document.getElementById('recordNumber');
    const locationElem = document.getElementById('location');
    const incidentDateElem = document.getElementById('incidentDate');
    const incidentTimeElem = document.getElementById('incidentTime');
    const immediateResponseElem = document.getElementById('immediateResponse');
    const totalCostElem = document.getElementById('totalCost');
    const ownerElem = document.getElementById('owner');
    const projectElem = document.getElementById('project');
    const windElem = document.getElementById('wind');
    const descriptionOfEventsElem = document.getElementById('descriptionOfEvents');
    const immediateResponse2Elem = document.getElementById('immediateResponse2');
    const bestActionsElem = document.getElementById('bestActions');
  
    if (dueDate3Elem) dueDate3Elem.innerText = data.dueDate3 || 'No data';
    if (recordNumberElem) recordNumberElem.innerText = data.recordNumber || 'No data';
    if (locationElem) locationElem.innerText = data.location || 'No data';
    if (incidentDateElem) incidentDateElem.innerText = data.incidentDate || 'No data';
    if (incidentTimeElem) incidentTimeElem.innerText = data.incidentTime || 'No data';
    if (immediateResponseElem) immediateResponseElem.innerText = data.immediateResponse || 'No data';
    if (totalCostElem) totalCostElem.innerText = data.totalCost || 'No data';
    if (ownerElem) ownerElem.innerText = data.owner || 'No data';
    if (projectElem) projectElem.innerText = data.project || 'No data';
    if (windElem) windElem.innerText = data.wind || 'No data';
    if (descriptionOfEventsElem) descriptionOfEventsElem.innerText = data.descriptionOfEvents || 'No data';
    if (immediateResponse2Elem) immediateResponse2Elem.innerText = data.immediateResponse2 || 'No data';
    if (bestActionsElem) bestActionsElem.innerText = data.bestActions || 'No data';
  }
  