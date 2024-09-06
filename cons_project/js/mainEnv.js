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
        console.log('Fetched Environmental Data:', data); // Log the entire data object
        updateEnvironmentalDOM(data);
      })
      .catch(error => console.error('Error fetching environmental project:', error));
  });
  
  function updateEnvironmentalDOM(data) {
    console.log('Updating DOM with data:', data); // Log data before updating DOM

    const reporters2Elem = document.getElementById('reporters2');
    const location2Elem = document.getElementById('location2');
    const incidentDate2Elem = document.getElementById('incidentDate2');
    const incidentTime2Elem = document.getElementById('incidentTime2');
    const project2Elem = document.getElementById('project2');
    const typeElem = document.getElementById('type');
    const owner3Elem = document.getElementById('owner3');
    const severityElem = document.getElementById('severity');
    const weatherElem = document.getElementById('weather');
    const substanceElem = document.getElementById('substance');
    const eventDescription2Elem = document.getElementById('eventDescription2');
    const actionTakenElem = document.getElementById('actionTaken');
    const remediationElem = document.getElementById('remediation');
    const preventElem = document.getElementById('prevent');
    const responsibleElem = document.getElementById('responsible');
    

  
    if (reporters2Elem) reporters2Elem.innerText = data.reporters2 || 'No data';
    if (location2Elem) location2Elem.innerText = data.location2 || 'No data';
    if (incidentDate2Elem) incidentDate2Elem.innerText = data.incidentDate2 || 'No data';
    if (incidentTime2Elem) incidentTime2Elem.innerText = data.incidentTime2 || 'No data';
    if (project2Elem) project2Elem.innerText = data.project2 || 'No data';
    if (typeElem) typeElem.innerText = data.type || 'No data';
    if (owner3Elem) owner3Elem.innerText = data.owner3 || 'No data';
    if (severityElem) severityElem.innerText = data.severity || 'No data';
    if (weatherElem) weatherElem.innerText = data.weather || 'No data';
    if (substanceElem) substanceElem.innerText = data.substance || 'No data';
    if (eventDescription2Elem) eventDescription2Elem.innerText = data.eventDescription2 || 'No data';
    if (actionTakenElem) actionTakenElem.innerText = data.actionTaken || 'No data';
    if (remediationElem) remediationElem.innerText = data.remediation || 'No data';
  if (preventElem) preventElem.innerText = data.prevent || 'No data';
    if (responsibleElem) responsibleElem.innerText = data.responsible || 'No data';
    
  }