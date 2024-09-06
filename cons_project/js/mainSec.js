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
        console.log('Fetched Security Data:', data); // Log the entire data object
        updateSecurityDOM(data);
      })
      .catch(error => console.error('Error fetching Security project:', error));
  });
  
  function updateSecurityDOM(data) {
    console.log('Updating DOM with data:', data); // Log data before updating DOM
    const reporters5Elem = document.getElementById('reporters5');
    const location5Elem = document.getElementById('location5');
    const incidentDates5Elem = document.getElementById('incidentDates5');
    const incidentTime5Elem = document.getElementById('incidentTime5');
    const project5Elem = document.getElementById('project5');
    const securityElem = document.getElementById('security');
    const owner6Elem = document.getElementById('owner6');
    const extent2Elem = document.getElementById('extent2');
    const eventDescription5Elem = document.getElementById('eventDescription5');
    const immediateElem = document.getElementById('immediate');
    const repair3Elem = document.getElementById('repair3');
    const prevent5Elem = document.getElementById('prevent5');
    const responsible4Elem = document.getElementById('responsible4');
  
    if (location5Elem) location5Elem.innerText = data.location5 || 'No data';
    if (incidentDates5Elem) incidentDates5Elem.innerText = data.incidentDates5 || 'No data';
    if (incidentTime5Elem) incidentTime5Elem.innerText = data.incidentTime5 || 'No data';
    if (project5Elem) project5Elem.innerText = data.project5 || 'No data';
    if (securityElem) securityElem.innerText = data.security || 'No data';
    if (owner6Elem) owner6Elem.innerText = data.owner6 || 'No data';
    if (extent2Elem) extent2Elem.innerText = data.extent2 || 'No data';
    if (eventDescription5Elem) eventDescription5Elem.innerText = data.eventDescription5 || 'No data';
    if (immediateElem) immediateElem.innerText = data.immediate || 'No data';
    if (prevent5Elem) prevent5Elem.innerText = data.prevent5 || 'No data';
    if (repair3Elem) repair3Elem.innerText = data.repair3 || 'No data';
    if (responsible4Elem) responsible4Elem.innerText = data.responsible4 || 'No data';
  }
  