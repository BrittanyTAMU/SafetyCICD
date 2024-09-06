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
        console.log('Fetched Injury Data:', data); // Log the entire data object
        updateInjuryDOM(data);
      })
      .catch(error => console.error('Error fetching injury project:', error));
  });
  
  function updateInjuryDOM(data) {
    console.log('Updating DOM with data:', data); // Log data before updating DOM

    const reportersElem = document.getElementById('reporters');
    const timeElem = document.getElementById('time');
    const taskElem = document.getElementById('task');
    const owner2Elem = document.getElementById('owner2');
    const recordNumber2Elem = document.getElementById('recordNumber2');
    const recordNumber3Elem = document.getElementById('recordNumber3');
    const recordNumber4Elem = document.getElementById('recordNumber4');
    const recordNumber5Elem = document.getElementById('recordNumber5');
    const daSDElem = document.getElementById('daSD');
    const daEDElem = document.getElementById('daED');
    const daMPElem = document.getElementById('daMP');
    const daRBElem = document.getElementById('daRB');
    const jrSDElem = document.getElementById('jrSD');
    const jrEDElem = document.getElementById('jrED');
    const jrMPElem = document.getElementById('jrMP');
    const jrRBElem = document.getElementById('jrRB');
    const da2SDElem = document.getElementById('da2SD');
    const da2EDElem = document.getElementById('da2ED');
    const da2MPElem = document.getElementById('da2MP');
    const da2RBElem = document.getElementById('da2RB');
    const rtwSDElem = document.getElementById('rtwSD');
    const rtwEDElem = document.getElementById('rtwED');
    const rtwMPElem = document.getElementById('rtwMP');
    const rtwRBElem = document.getElementById('rtwRB');
    const eventDescriptionElem = document.getElementById('eventDescription');
    const immediateResponse3Elem = document.getElementById('immediateResponse3');
    const bestActions2Elem = document.getElementById('bestActions2');

  
    if (reportersElem) reportersElem.innerText = data.reporters || 'No data';
    if (timeElem) timeElem.innerText = data.time || 'No data';
    if (taskElem) taskElem.innerText = data.task || 'No data';
    if (owner2Elem) owner2Elem.innerText = data.owner2 || 'No data';
    if (recordNumber2Elem) recordNumber2Elem.innerText = data.recordNumber2 || 'No data';
    if (recordNumber3Elem) recordNumber3Elem.innerText = data.recordNumber3 || 'No data';
    if (recordNumber4Elem) recordNumber4Elem.innerText = data.recordNumber4 || 'No data';
    if (recordNumber5Elem) recordNumber5Elem.innerText = data.recordNumber5 || 'No data';
    if (daSDElem) daSDElem.innerText = data.daSD || 'No data';
    if (daEDElem) daEDElem.innerText = data.daED || 'No data';
    if (daMPElem) daMPElem.innerText = data.daMP || 'No data';
    if (daRBElem) daRBElem.innerText = data.daRB || 'No data';
    if (jrSDElem) jrSDElem.innerText = data.jrSD || 'No data';
  if (jrEDElem) jrEDElem.innerText = data.jrED || 'No data';
    if (jrMPElem) jrMPElem.innerText = data.jrMP || 'No data';
    if (jrRBElem) jrRBElem.innerText = data.jrRB || 'No data';
    if (da2SDElem) da2SDElem.innerText = data.da2SD || 'No data';
    if (da2EDElem) da2EDElem.innerText = data.da2ED || 'No data';
    if (da2MPElem) da2MPElem.innerText = data.da2MP || 'No data';
    if (da2RBElem) da2RBElem.innerText = data.da2RB || 'No data';
    if (rtwSDElem) rtwSDElem.innerText = data.rtwSD || 'No data';
    if (rtwEDElem) rtwEDElem.innerText = data.rtwED || 'No data';
    if (rtwMPElem) rtwMPElem.innerText = data.rtwMP || 'No data';
    if (rtwRBElem) rtwRBElem.innerText = data.rtwRB || 'No data';
    if (eventDescriptionElem) eventDescriptionElem.innerText = data.eventDescription || 'No data';
    if (immediateResponse3Elem) immediateResponse3Elem.innerText = data.immediateResponse3 || 'No data';
    if (bestActions2Elem) bestActions2Elem.innerText = data.bestActions2 || 'No data';

  }