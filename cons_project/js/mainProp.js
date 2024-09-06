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
    const reporters3Elem = document.getElementById('reporters3');
    const location3Elem = document.getElementById('location3');
    const incidentDate3Elem = document.getElementById('incidentDate3');
    const incidentTime3Elem = document.getElementById('incidentTime3');
    const project3Elem = document.getElementById('project3');
    const damageElem = document.getElementById('damage');
    const owner4Elem = document.getElementById('owner4');
    const extentElem = document.getElementById('extent');
    const eventDescription3Elem = document.getElementById('eventDescription3');
    const remediation2Elem = document.getElementById('remediation2');
    const immediateActions2Elem = document.getElementById('immediateActions2');
    const repairElem = document.getElementById('repair');
    const prevent2Elem = document.getElementById('prevent2');
    const responsible2Elem = document.getElementById('responsible2');
  
    if (location3Elem) location3Elem.innerText = data.location3 || 'No data';
    if (incidentDate3Elem) incidentDate3Elem.innerText = data.incidentDate3 || 'No data';
    if (incidentTime3Elem) incidentTime3Elem.innerText = data.incidentTime3 || 'No data';
    if (project3Elem) project3Elem.innerText = data.project3|| 'No data';
    if (damageElem) damageElem.innerText = data.damage || 'No data';
    if (owner4Elem) owner4Elem.innerText = data.owner4 || 'No data';
    if (extentElem) extentElem.innerText = data.extent || 'No data';
    if (eventDescription3Elem) eventDescription3Elem.innerText = data.eventDescription3 || 'No data';
    if (remediation2Elem) remediation2Elem.innerText = data.remediation2 || 'No data';
    if (immediateActions2Elem) immediateActions2Elem.innerText = data.immediateActions2 || 'No data';
    if (repairElem) repairElem.innerText = data.repair || 'No data';
    if (prevent2Elem) prevent2.innerText = data.prevent2 || 'No data';
    if (responsible2Elem) responsible2Elem.innerText = data.responsible2 || 'No data';
    
  }
  