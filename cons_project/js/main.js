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
    fetch('https://ugi0om9n21.execute-api.us-east-1.amazonaws.com/prod/get-dashboard', {  // Corrected API URL and fetch method
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
        console.log('Fetched dashboard Data:', data);
        if (data && data.length > 0) {  // Ensure there's data before updating the DOM
            updateDashboardDOM(data[0]);  // Assuming you want to show the first dashboard's data
        }
    })
    .catch(error => console.error('Error fetching dashboard data:', error));
});

function updateDashboardDOM(dashboard) {
    // Make sure `dashboard` exists before updating the DOM
    document.getElementById('projectName').innerText = dashboard.projectName || 'No data';
    //document.getElementById('companyName').innerText = dashboard.companyName || 'No data';
    document.getElementById('dueDate1').innerText = dashboard.dueDate1 || 'No data';
    document.getElementById('projectName2').innerText = dashboard.projectName2 || 'No data';
    //document.getElementById('companyName2').innerText = dashboard.companyName2 || 'No data';
    document.getElementById('dueDate2').innerText = dashboard.dueDate2 || 'No data';
    document.getElementById('myTask1').innerText = dashboard.myTask1 || 'No data';
    document.getElementById('myTask2').innerText = dashboard.myTask2 || 'No data';
    document.getElementById('myTask3').innerText = dashboard.myTask3 || 'No data';
    document.getElementById('myTask4').innerText = dashboard.myTask4 || 'No data';
    document.getElementById('myTask5').innerText = dashboard.myTask5 || 'No data';
    document.getElementById('myTask6').innerText = dashboard.myTask6 || 'No data';
    document.getElementById('myTask7').innerText = dashboard.myTask7 || 'No data';
    document.getElementById('myTimeline1').innerText = dashboard.myTimeline1 || 'No data';
    document.getElementById('myTimeline2').innerText = dashboard.myTimeline2 || 'No data';
    document.getElementById('myTimeline3').innerText = dashboard.myTimeline3 || 'No data';
    document.getElementById('myTimeline4').innerText = dashboard.myTimeline4 || 'No data';
    document.getElementById('myTimelineTime1').innerText = dashboard.myTimelineTime1 || 'No data';
    document.getElementById('myTimelineTime2').innerText = dashboard.myTimelineTime2 || 'No data';
    document.getElementById('myTimelineTime3').innerText = dashboard.myTimelineTime3 || 'No data';
    document.getElementById('myTimelineTime4').innerText = dashboard.myTimelineTime4 || 'No data';
}



























// const AWS = require('aws-sdk'); // Import the AWS SDK
// const fetch = require('node-fetch'); // Use fetch for making HTTP requests (if running in Node.js)
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION
// });

// // Define API Gateway URL
// const apiUrl = 'https://ugi0om9n21.execute-api.us-east-1.amazonaws.com/prod/get-project';  // Replace with your API Gateway URL

// // Function to sign the request using AWS SDK
// async function makeSignedRequest() {
//   const endpoint = new AWS.Endpoint(apiUrl);
//   const request = new AWS.HttpRequest(endpoint, AWS.config.region);
 
//     // Add necessary request properties
//   request.method = 'GET';
//   request.headers['host'] = endpoint.host;
//   request.headers['Content-Type'] = 'application/json';
//   request.path = '/prod/get-project'; // Path after the domain
//   request.body = ''; // Empty for GET requests

// // Sign the request using AWS Signature V4
//   const signer = new AWS.Signers.V4(request, 'execute-api'); // API Gateway service is 'execute-api'
//   signer.addAuthorization(AWS.config.credentials, new Date());

//   // Use fetch to send the signed request
//   try {
//     const response = await fetch(apiUrl, {
//       method: request.method,
//       headers: request.headers
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();

// // document.addEventListener('DOMContentLoaded', () => {
// //     fetch('/api/get-latest-project')
// //       .then(response => response.json())
// //       .then(data => {
// //         console.log('Fetched Data:', data); // Log the entire data object
// //         updateDOM(data);
// //       })
// //       .catch(error => console.error('Error fetching project:', error));
  
// //   });

// // async function updateDOM() {
// //     const apiUrl = 'https://ugi0om9n21.execute-api.us-east-1.amazonaws.com/prod/get-project';  // Replace with your API Gateway URL
// //     try {
// //         const response = await fetch(apiUrl, {
// //             method: 'GET',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             }
// //         });
        
// //         if (!response.ok) {
// //             throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
        
// //         const data = await response.json();
        
//         // Update DOM elements with the data
//         const projectNameElem = document.getElementById('projectName');
//         const companyNameElem = document.getElementById('companyName');
//         const dueDate1Elem = document.getElementById('dueDate1');
//         const projectName2Elem = document.getElementById('projectName2');
//         const companyName2Elem = document.getElementById('companyName2');
//         const dueDate2Elem = document.getElementById('dueDate2');
//         const myTask1Elem = document.getElementById('myTask1');
//         const myTask2Elem = document.getElementById('myTask2');
//         const myTask3Elem = document.getElementById('myTask3');
//         const myTask4Elem = document.getElementById('myTask4');
//         const myTask5Elem = document.getElementById('myTask5');
//         const myTask6Elem = document.getElementById('myTask6');
//         const myTask7Elem = document.getElementById('myTask7');
//         const myTimeline1Elem = document.getElementById('myTimeline1');
//         const myTimeline2Elem = document.getElementById('myTimeline2');
//         const myTimeline3Elem = document.getElementById('myTimeline3');
//         const myTimeline4Elem = document.getElementById('myTimeline4');
//         const myTimelineTime1Elem = document.getElementById('myTimelineTime1');
//         const myTimelineTime2Elem = document.getElementById('myTimelineTime2');
//         const myTimelineTime3Elem = document.getElementById('myTimelineTime3');
//         const myTimelineTime4Elem = document.getElementById('myTimelineTime4');

//         // Set inner text with the data
//         if (projectNameElem) projectNameElem.innerText = `Project Name: ${data.projectName || 'No data'}`;
//         if (companyNameElem) companyNameElem.innerText = `Company Name: ${data.companyName || 'No data'}`;
//         if (dueDate1Elem) dueDate1Elem.innerText = `Due Date: ${data.dueDate1 || 'No data'}`;
//         if (projectName2Elem) projectName2Elem.innerText = `Project Name: ${data.projectName2 || 'No data'}`;
//         if (companyName2Elem) companyName2Elem.innerText = `Company Name: ${data.companyName2 || 'No data'}`;
//         if (dueDate2Elem) dueDate2Elem.innerText = `Due Date: ${data.dueDate2 || 'No data'}`;
//         if (myTask1Elem) myTask1Elem.innerText = data.myTask1 || 'No data';
//         if (myTask2Elem) myTask2Elem.innerText = data.myTask2 || 'No data';
//         if (myTask3Elem) myTask3Elem.innerText = data.myTask3 || 'No data';
//         if (myTask4Elem) myTask4Elem.innerText = data.myTask4 || 'No data';
//         if (myTask5Elem) myTask5Elem.innerText = data.myTask5 || 'No data';
//         if (myTask6Elem) myTask6Elem.innerText = data.myTask6 || 'No data';
//         if (myTask7Elem) myTask7Elem.innerText = data.myTask7 || 'No data';
//         if (myTimeline1Elem) myTimeline1Elem.innerText = data.myTimeline1 || 'No data';
//         if (myTimeline2Elem) myTimeline2Elem.innerText = data.myTimeline2 || 'No data';
//         if (myTimeline3Elem) myTimeline3Elem.innerText = data.myTimeline3 || 'No data';
//         if (myTimeline4Elem) myTimeline4Elem.innerText = data.myTimeline4 || 'No data';
//         if (myTimelineTime1Elem) myTimelineTime1Elem.innerText = data.myTimelineTime1 || 'No data';
//         if (myTimelineTime2Elem) myTimelineTime2Elem.innerText = data.myTimelineTime2 || 'No data';
//         if (myTimelineTime3Elem) myTimelineTime3Elem.innerText = data.myTimelineTime3 || 'No data';
//         if (myTimelineTime4Elem) myTimelineTime4Elem.innerText = data.myTimelineTime4 || 'No data';

//     } catch (error) {
//         console.error('Error fetching project data:', error);
//     }
// }
// // Call the function to make the signed request
// makeSignedRequest();

// // Call the function when you need to update the DOM
// // updateDOM();

  
//  //function updateDOM(data) {
//    // console.log(data);
//   //   const projectNameElem = document.getElementById('projectName');
//   //   const companyNameElem = document.getElementById('companyName');
//   //   const dueDate1Elem = document.getElementById('dueDate1');
//   //   const projectName2Elem = document.getElementById('projectName2');
//   //   const companyName2Elem = document.getElementById('companyName2');
//   //   const dueDate2Elem = document.getElementById('dueDate2');
//   //   const myTask1Elem = document.getElementById('myTask1');
//   //   const myTask2Elem = document.getElementById('myTask2');
//   //   const myTask3Elem = document.getElementById('myTask3');
//   //   const myTask4Elem = document.getElementById('myTask4');
//   //   const myTask5Elem = document.getElementById('myTask5');
//   //   const myTask6Elem = document.getElementById('myTask6');
//   //   const myTask7Elem = document.getElementById('myTask7');
//   //   const myTimeline1Elem = document.getElementById('myTimeline1');
//   //   const myTimeline2Elem = document.getElementById('myTimeline2');
//   //   const myTimeline3Elem = document.getElementById('myTimeline3');
//   //   const myTimeline4Elem = document.getElementById('myTimeline4');
//   //   const myTimelineTime1Elem = document.getElementById('myTimelineTime1');
//   //   const myTimelineTime2Elem = document.getElementById('myTimelineTime2');
//   //   const myTimelineTime3Elem = document.getElementById('myTimelineTime3');
//   //   const myTimelineTime4Elem = document.getElementById('myTimelineTime4');
  
//   //   if (projectNameElem) projectNameElem.innerText = `Project Name: ${data.projectName || 'No data'}`;
//   //   if (companyNameElem) companyNameElem.innerText = `Company Name: ${data.companyName || 'No data'}`;
//   //   if (dueDate1Elem) dueDate1Elem.innerText = `Due Date: ${data.dueDate1 || 'No data'}`;
//   //   if (projectName2Elem) projectName2Elem.innerText = `Project Name: ${data.projectName2 || 'No data'}`;
//   //   if (companyName2Elem) companyName2Elem.innerText = `Company Name: ${data.companyName2 || 'No data'}`;
//   //   if (dueDate2Elem) dueDate2Elem.innerText = `Due Date: ${data.dueDate2 || 'No data'}`;
//   //   if (myTask1Elem) myTask1Elem.innerText = data.myTask1 || 'No data';
//   //   if (myTask2Elem) myTask2Elem.innerText = data.myTask2 || 'No data';
//   //   if (myTask3Elem) myTask3Elem.innerText = data.myTask3 || 'No data';
//   //   if (myTask4Elem) myTask4Elem.innerText = data.myTask4 || 'No data';
//   //   if (myTask5Elem) myTask5Elem.innerText = data.myTask5 || 'No data';
//   //   if (myTask6Elem) myTask6Elem.innerText = data.myTask6 || 'No data';
//   //   if (myTask7Elem) myTask7Elem.innerText = data.myTask7 || 'No data';
//   //   if (myTimeline1Elem) myTimeline1Elem.innerText = data.myTimeline1 || 'No data';
//   //   if (myTimeline2Elem) myTimeline2Elem.innerText = data.myTimeline2 || 'No data';
//   //   if (myTimeline3Elem) myTimeline3Elem.innerText = data.myTimeline3 || 'No data';
//   //   if (myTimeline4Elem) myTimeline4Elem.innerText = data.myTimeline4 || 'No data';
//   //   if (myTimelineTime1Elem) myTimelineTime1Elem.innerText = data.myTimelineTime1 || 'No data';
//   //   if (myTimelineTime2Elem) myTimelineTime2Elem.innerText = data.myTimelineTime2 || 'No data';
//   //   if (myTimelineTime3Elem) myTimelineTime3Elem.innerText = data.myTimelineTime3 || 'No data';
//   //   if (myTimelineTime4Elem) myTimelineTime4Elem.innerText = data.myTimelineTime4 || 'No data';
//   // }
  
// //   function updateSafetyDOM(data) {
// //     console.log(data);
// //     const dueDate3Elem = document.getElementById('dueDate3');
// //     const recordNumberElem = document.getElementById('recordNumber');
// //     const locationElem = document.getElementById('location');
// //     const incidentDateElem = document.getElementById('incidentDate');
// //     const incidentTimeElem = document.getElementById('incidentTime');
// //     const immediateResponseElem = document.getElementById('immediateResponse');
// //     const totalCostElem = document.getElementById('totalCost');
// //     const ownerElem = document.getElementById('owner');
// //     const projectElem = document.getElementById('project');
// //     const windElem = document.getElementById('wind');
// //     const descriptionOfEventsElem = document.getElementById('descriptionOfEvents');
// //     const immediateResponse2Elem = document.getElementById('immediateResponse2');
// //     const bestActionsElem = document.getElementById('bestActions');
  
// //     if (dueDate3Elem) dueDate3Elem.innerText = data.dueDate3 || 'No data';
// //     if (recordNumberElem) recordNumberElem.innerText = data.recordNumber || 'No data';
// //     if (locationElem) locationElem.innerText = data.location || 'No data';
// //     if (incidentDateElem) incidentDateElem.innerText = data.incidentDate || 'No data';
// //     if (incidentTimeElem) incidentTimeElem.innerText = data.incidentTime || 'No data';
// //     if (immediateResponseElem) immediateResponseElem.innerText = data.immediateResponse || 'No data';
// //     if (totalCostElem) totalCostElem.innerText = data.totalCost || 'No data';
// //     if (ownerElem) ownerElem.innerText = data.owner || 'No data';
// //     if (projectElem) projectElem.innerText = data.project || 'No data';
// //     if (windElem) windElem.innerText = data.wind || 'No data';
// //     if (descriptionOfEventsElem) descriptionOfEventsElem.innerText = data.descriptionOfEvents || 'No data';
// //     if (immediateResponse2Elem) immediateResponse2Elem.innerText = data.immediateResponse2 || 'No data';
// //     if (bestActionsElem) bestActionsElem.innerText = data.bestActions || 'No data';
// //   }
  

  










// // document.addEventListener('DOMContentLoaded', () => {
// //     fetch('/api/get-latest-project')
// //       .then(response => response.json())
// //       .then(data => {
// //         console.log('Fetched Data:', data); // Log the entire data object
// //         updateDOM(data);
// //       })
// //       .catch(error => console.error('Error fetching project:', error));
// //   });
  
// //   function updateDOM(data) {
// //     // Log the data to ensure it contains the expected fields
// //     console.log(data);
  
// //     const projectNameElem = document.getElementById('projectName');
// //     const companyNameElem = document.getElementById('companyName');
// //     const dueDate1Elem = document.getElementById('dueDate1');
// //     const projectName2Elem = document.getElementById('projectName2');
// //     const companyName2Elem = document.getElementById('companyName2');
// //     const dueDate2Elem = document.getElementById('dueDate2');
// //     const myTask1Elem = document.getElementById('myTask1');
// //     const myTask2Elem = document.getElementById('myTask2');
// //     const myTask3Elem = document.getElementById('myTask3');
// //     const myTask4Elem = document.getElementById('myTask4');
// //     const myTask5Elem = document.getElementById('myTask5');
// //     const myTask6Elem = document.getElementById('myTask6');
// //     const myTask7Elem = document.getElementById('myTask7');
// //     const myTimeline1Elem = document.getElementById('myTimeline1');
// //     const myTimeline2Elem = document.getElementById('myTimeline2');
// //     const myTimeline3Elem = document.getElementById('myTimeline3');
// //     const myTimeline4Elem = document.getElementById('myTimeline4');
// //     const myTimelineTime1Elem = document.getElementById('myTimelineTime1');
// //     const myTimelineTime2Elem = document.getElementById('myTimelineTime2');
// //     const myTimelineTime3Elem = document.getElementById('myTimelineTime3');
// //     const myTimelineTime4Elem = document.getElementById('myTimelineTime4');
// //     const dueDate3Elem = document.getElementById('dueDate3');
// //     const recordNumberElem = document.getElementById('recordNumber');
// //     const locationElem = document.getElementById('location');
// //     const incidentDateElem = document.getElementById('incidentDate');
// //     const incidentTimeElem = document.getElementById('incidentTime');
// //     const immediateResponseElem = document.getElementById('immediateResponse');
// //     const totalCostElem = document.getElementById('totalCost');
// //     const ownerElem = document.getElementById('owner');
// //     const projectElem = document.getElementById('project');
// //     const windElem = document.getElementById('wind');
// //     const descriptionOfEventsElem = document.getElementById('descriptionOfEvents');
// //     const immediateResponse2Elem = document.getElementById('immediateResponse2');
// //     const bestActionsElem = document.getElementById('bestActions');
  
// //     console.log({
// //       projectNameElem,
// //       companyNameElem,
// //       dueDate1Elem,
// //       projectName2Elem,
// //       companyName2Elem,
// //       dueDate2Elem,
// //       myTask1Elem,
// //       myTask2Elem,
// //       myTask3Elem,
// //       myTask4Elem,
// //       myTask5Elem,
// //       myTask6Elem,
// //       myTask7Elem,
// //       myTimeline1Elem,
// //       myTimeline2Elem,
// //       myTimeline3Elem,
// //       myTimeline4Elem,
// //       myTimelineTime1Elem,
// //       myTimelineTime2Elem,
// //       myTimelineTime3Elem,
// //       myTimelineTime4Elem, dueDate3Elem, recordNumberElem,
// //       locationElem,
// //       incidentDateElem,
// //       incidentTimeElem,
// //       immediateResponseElem,
// //       totalCostElem,
// //       ownerElem,
// //       projectElem,
// //       windElem,
// //       immediateResponse2Elem,
// //       bestActionsElem, descriptionOfEventsElem
// //     });
  
// //     if (projectNameElem) projectNameElem.innerText = `Project Name: ${data.projectName || 'No data'}`;
// //     if (companyNameElem) companyNameElem.innerText = `Company Name: ${data.companyName || 'No data'}`;
// //     if (dueDate1Elem) dueDate1Elem.innerText = `Due Date: ${data.dueDate1 || 'No data'}`;
// //     if (projectName2Elem) projectName2Elem.innerText = `Project Name: ${data.projectName2 || 'No data'}`;
// //     if (companyName2Elem) companyName2Elem.innerText = `Company Name: ${data.companyName2 || 'No data'}`;
// //     if (dueDate2Elem) dueDate2Elem.innerText = `Due Date: ${data.dueDate2 || 'No data'}`;
// //     if (myTask1Elem) myTask1Elem.innerText = data.myTask1 || 'No data';
// //     if (myTask2Elem) myTask2Elem.innerText = data.myTask2 || 'No data';
// //     if (myTask3Elem) myTask3Elem.innerText = data.myTask3 || 'No data';
// //     if (myTask4Elem) myTask4Elem.innerText = data.myTask4 || 'No data';
// //     if (myTask5Elem) myTask5Elem.innerText = data.myTask5 || 'No data';
// //     if (myTask6Elem) myTask6Elem.innerText = data.myTask6 || 'No data';
// //     if (myTask7Elem) myTask7Elem.innerText = data.myTask7 || 'No data';
// //     if (myTimeline1Elem) myTimeline1Elem.innerText = data.myTimeline1 || 'No data';
// //     if (myTimeline2Elem) myTimeline2Elem.innerText = data.myTimeline2 || 'No data';
// //     if (myTimeline3Elem) myTimeline3Elem.innerText = data.myTimeline3 || 'No data';
// //     if (myTimeline4Elem) myTimeline4Elem.innerText = data.myTimeline4 || 'No data';
// //     if (myTimelineTime1Elem) myTimelineTime1Elem.innerText = data.myTimelineTime1 || 'No data';
// //     if (myTimelineTime2Elem) myTimelineTime2Elem.innerText = data.myTimelineTime2 || 'No data';
// //     if (myTimelineTime3Elem) myTimelineTime3Elem.innerText = data.myTimelineTime3 || 'No data';
// //     if (myTimelineTime4Elem) myTimelineTime4Elem.innerText = data.myTimelineTime4 || 'No data';
// //     if (dueDate3Elem) dueDate3Elem.innerText = data.dueDate3 || 'No data';
// //     if (recordNumberElem) recordNumberElem.innerText = data.recordNumber || 'No data';
// //     if (locationElem) locationElem.innerText = data.location || 'No data';
// //     if (incidentDateElem) incidentDateElem.innerText = data.incidentDate || 'No data';
// //     if (incidentTimeElem) incidentTimeElem.innerText = data.incidentTime || 'No data';
// //     if (immediateResponseElem) immediateResponseElem.innerText = data.immediateResponse || 'No data';
// //     if (totalCostElem) totalCostElem.innerText = data.totalCost || 'No data';
// //     if (ownerElem) ownerElem.innerText = data.owner || 'No data';
// //     if (projectElem) projectElem.innerText = data.project || 'No data';
// //     if (windElem) windElem.innerText = data.wind || 'No data';
// //     if (immediateResponse2Elem) immediateResponse2Elem.innerText = data.immediateResponse2 || 'No data';
// //     if (bestActionsElem) bestActionsElem.innerText = data.bestActions || 'No data';
// //     if (descriptionOfEventsElem) descriptionOfEventsElem.innerText = data.descriptionOfEvents || 'No data';
// //   }
  
  
  
