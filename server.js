// Importing required modules
const express = require('express');// Import the Express framework
const AWS = require('aws-sdk'); // Import the AWS SDK to interact with AWS services
const path = require('path');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');// Import the body-parser middleware for parsing request bodies
const { v4: uuidv4 } = require('uuid'); // Import the UUID library for generating unique identifiers
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse application/json (if needed)
app.use(bodyParser.json());


// Serve static files from 'UpConstruction/UpConstruction' directory
app.use(express.static(path.join(__dirname, 'UpConstruction', 'UpConstruction')));

// Serve static files from 'cons_project' directory
app.use('/cons_project', express.static(path.join(__dirname, 'cons_project')));
app.use('/UpConstruction/assets', express.static(path.join(__dirname, 'UpConstruction', 'UpConstruction', 'assets')));
app.use('/cons_project/assets', express.static(path.join(__dirname, 'cons_project', 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'UpConstruction', 'UpConstruction', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'UpConstruction', 'UpConstruction', 'about.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'UpConstruction', 'UpConstruction', 'blog.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'UpConstruction', 'UpConstruction', 'contact.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'UpConstruction', 'UpConstruction', 'projects.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'UpConstruction', 'UpConstruction', 'services.html'));
});

// Routes for cons_project HTML files
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'cons_project', 'dashboard.html'));
});

app.get('/environ', (req, res) => {
    res.sendFile(path.join(__dirname, 'cons_project', 'environ.html'));
});

app.get('/injury', (req, res) => {
    res.sendFile(path.join(__dirname, 'cons_project', 'injury.html'));
});

app.get('/property', (req, res) => {
    res.sendFile(path.join(__dirname, 'cons_project', 'property.html'));
});

app.get('/safetyEvents', (req, res) => {
    res.sendFile(path.join(__dirname, 'cons_project', 'safetyEvents.html'));
});

app.get('/security', (req, res) => {
    res.sendFile(path.join(__dirname, 'cons_project', 'security.html'));
});

app.get('/vehicle', (req, res) => {
    res.sendFile(path.join(__dirname, 'cons_project', 'vehicle.html'));
});


    // Note: __dirname is the current directory  you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
    // app.use((req, res, next) => {
    //     res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    //     next();
    // });

    // const isAuthenticated = (req, res, next) => {
    //     const token = req.headers['authorization'];
    
    //     if (token) {
    //         // Validate token here (e.g., verify JWT)
    //         next(); // Assuming token is valid for the sake of example
    //     } else {
    //         res.redirect(         'https://construction.auth.us-east-1.amazoncognito.com/login?client_id=7hprrj4gufvqe321r3u0trd3km&response_type=code&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcons_project%2Fdashboard.html');
    //     }
    // };
    
    // app.get('/dashboard', isAuthenticated, (req, res) => {
    //     res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
    // });

  
// Configure AWS SDK
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

const ses = new AWS.SES();// Create a new instance of the AWS SES Client

//sending email on the index.html contact form
app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  const params = {
    Source: 'bgw26@rutgers.edu',
    Destination: {
      ToAddresses: ['bgw26@rutgers.edu']
    },
    Message: {
      Subject: {
        Data: 'Contact Form Submission'
      },
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
        }
      }
    }
  };

  ses.sendEmail(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      res.status(500).send('Error sending email');
    } else {
      console.log(data);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.get('/test', (req, res) => {
    res.send('Server is working!');
  });

 //sending message on the index.html contact form
  // app.post('/send-message', (req, res) => {
  //   const { name, email, subject, message } = req.body;
  
  //   const params = {
  //     Source: 'bgw26@rutgers.edu',
  //     Destination: {
  //       ToAddresses: ['bgw26@rutgers.edu']
  //     },
  //     Message: {
  //       Subject: {
  //         Data: 'Contact Form Submission'
  //       },
  //       Body: {
  //         Text: {
  //           Data: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
  //         }
  //       }
  //     }
  //   };
  
  //   ses.sendEmail(params, (err, data) => {
  //     if (err) {
  //       console.log(err, err.stack);
  //       res.status(500).send('Error sending email');
  //     } else {
  //       console.log(data);
  //       res.status(200).send('Email sent successfully');
  //     }
  //   });
  // });
  
  // app.get('/test', (req, res) => {
  //     res.send('Server is working!');
  //   });
  

    //Adding data to dynamoDB and adding it to the DOM
    const dynamoDB = new AWS.DynamoDB.DocumentClient(); // Create a new instance of the DynamoDB Document Client 

    // Serve the submission form
app.get('/submit', (req, res) => {
  res.sendFile(__dirname + '/submit.html');
});

// Handle form submission
// app.post('/submit-project', (req, res) => {
//   const {
//     projectName, companyName, dueDate1, projectName2, companyName2, dueDate2, myTask1, myTask2, myTask3,
//     myTask4, myTask5, myTask6, myTask7, myTimeline1, myTimeline2, myTimeline3, myTimeline4, myTimelineTime1,
//     myTimelineTime2, myTimelineTime3, myTimelineTime4, dueDate3, recordNumber, location, incidentDate,
//     incidentTime, immediateResponse, totalCost, owner, project, wind, immediateResponse2, bestActions, descriptionOfEvents, reporters, time, task, owner2, recordNumber2, recordNumber3, recordNumber4, recordNumber5, daSD, daED, daMP, daRB,  jrSD, jrED, jrMP, jrRB, da2SD, da2ED, da2MP, da2RB,rtwSD, rtwED, rtwMP, rtwRB, eventDescription, immediateResponse3, bestActions2, reporters2, location2, incidentDate2, incidentTime2, project2, type, owner3, severity, weather, substance, eventDescription2, actionTaken, remediation, prevent, responsible, reporters3, location3,
//     incidentDate3,
//     incidentTime3,
//     project3,
//     damage,
//     owner4,
//     extent,
//     eventDescription3,
//     remediation2, immediateActions2,
//     repair, prevent2, 
//     responsible2, location4,
//     incidentDate4,
//     incidentTime4,
//     project4,
//     vehicle,
//     owner5,
//     driver,
//     eventDescription4,
//     immediateActions,
//     repair2, prevent3,
//     responsible3, reporters5,
//     location5,
//     incidentDates5,
//     incidentTime5,
//     project5,
//     security,
//     owner6,
//     extent2,
//     eventDescription5, immediate,
//     repair3,
//     prevent5,
//     responsible4
//   } = req.body;

//   const id = uuidv4(); // Generate a unique ID for the project

//   const params = {
//     TableName: 'Construction',
//     Item: {
//       id,
//       entryType: 'Project', // Ensure this is a project entry
//       projectName, companyName, dueDate1, projectName2, companyName2, dueDate2, myTask1, myTask2, myTask3,
//     myTask4, myTask5, myTask6, myTask7, myTimeline1, myTimeline2, myTimeline3, myTimeline4, myTimelineTime1,
//     myTimelineTime2, myTimelineTime3, myTimelineTime4, dueDate3, recordNumber, location, incidentDate,
//     incidentTime, immediateResponse, totalCost, owner, project, wind, immediateResponse2, bestActions, descriptionOfEvents, reporters, time, task, owner2, recordNumber2, recordNumber3, recordNumber4, recordNumber5, daSD, daED, daMP, daRB,  jrSD, jrED, jrMP, jrRB, da2SD, da2ED, da2MP, da2RB,rtwSD, rtwED, rtwMP, rtwRB, eventDescription, immediateResponse3, bestActions2, reporters2, location2, incidentDate2, incidentTime2, project2, type, owner3, severity, weather, substance, eventDescription2, actionTaken, remediation, prevent, responsible, reporters3, location3,
//     incidentDate3,
//     incidentTime3,
//     project3,
//     damage,
//     owner4,
//     extent,
//     eventDescription3,
//     remediation2, immediateActions2,
//     repair, prevent2, 
//     responsible2, location4,
//     incidentDate4,
//     incidentTime4,
//     project4,
//     vehicle,
//     owner5,
//     driver,
//     eventDescription4,
//     immediateActions,
//     repair2, prevent3,
//     responsible3, reporters5,
//     location5,
//     incidentDates5,
//     incidentTime5,
//     project5,
//     security,
//     owner6,
//     extent2,
//     eventDescription5, immediate,
//     repair3,
//     prevent5,
//     responsible4, 
//     }
//   };

//   dynamoDB.put(params, (err) => {
//     if (err) {
//       console.error('Error saving project:', err);
//       res.status(500).send('Error saving project');
//     } else {
//       res.redirect('/cons_project/dashboard.html');
//     }
//   });
// });

// Serve the page that displays project details
app.get('/display', (req, res) => {
  res.sendFile(__dirname + '/cons_project/dashboard.html');
});

// API to get the latest project details
// app.get('/api/get-latest-project', (req, res) => {
//   const params = {
//     TableName: 'Construction'
//   };

//   dynamoDB.scan(params, (err, data) => {
//     if (err) {
//       console.error('Error fetching project:', err);
//       res.status(500).send('Error fetching project');
//     } else {
//       const projects = data.Items.filter(item => item.entryType === 'Project');
//       if (projects.length > 0) {
//         const latestProject = projects.reduce((latest, project) => {
//           return (new Date(project.dueDate1) > new Date(latest.dueDate1)) ? project : latest;
//         });
//         res.json(latestProject);
//       } else {
//         res.json({});
//       }
//     }
//   });
// });

// Serve the page that displays safety event details
app.get('/display-safety', (req, res) => {
  res.sendFile(__dirname + '/cons_project/SafetyEvents.html');
});

// API to get the latest safety event details
// app.get('/api/get-latest-safety-event', (req, res) => {
//   const params = {
//     TableName: 'Construction'
//   };

//   dynamoDB.scan(params, (err, data) => {
//     if (err) {
//       console.error('Error fetching safety event:', err);
//       res.status(500).send('Error fetching safety event');
//     } else {
//       const safetyEvents = data.Items.filter(item => item.entryType === 'SafetyEvent');
//       if (safetyEvents.length > 0) {
//         const latestSafetyEvent = safetyEvents.reduce((latest, event) => {
//           return (new Date(event.incidentDate) > new Date(latest.incidentDate)) ? event : latest;
//         });
//         res.json(latestSafetyEvent);
//       } else {
//         res.json({});
//       }
//     }
//   });
// });

// Serve the page that displays safety event details
app.get('/display-injury', (req, res) => {
  res.sendFile(__dirname + '/cons_project/injury.html');
});

// API to get the latest safety event details
// app.get('/api/get-latest-injury-event', (req, res) => {
//   const params = {
//     TableName: 'Construction'
//   };

//   dynamoDB.scan(params, (err, data) => {
//     if (err) {
//       console.error('Error fetching injury event:', err);
//       res.status(500).send('Error fetching injury event');
//     } else {
//       const injuryEvents = data.Items.filter(item => item.entryType === 'InjuryEvent');
//       if (injuryEvents.length > 0) {
//         const latestInjuryEvent = injuryEvents.reduce((latest, event) => {
//           return (new Date(event.incidentDate) > new Date(latest.incidentDate)) ? event : latest;
//         });
//         res.json(latestInjuryEvent);
//       } else {
//         res.json({});
//       }
//     }
//   });
// });


//     // Serve the submission form
// app.get('/submit', (req, res) => {
//   res.sendFile(__dirname + '/submit.html'); // Serve the submit.html file when the /submit route is accessed
// });

// // Handle form submission
// app.post('/submit-project', (req, res) => {
//   const { projectName, companyName, dueDate1, projectName2, companyName2, dueDate2, myTask1, myTask2, myTask3, myTask4, myTask5, myTask6, myTask7, myTimeline1, myTimeline2, myTimeline3, myTimeline4, myTimelineTime1, myTimelineTime2, myTimelineTime3, myTimelineTime4, dueDate3, recordNumber, location, incidentDate, incidentTime, immediateResponse, totalCost, owner, project, wind, immediateResponse2, bestActions, descriptionOfEvents} = req.body // Extract projectName, companyName, dueDate2, myTask1, myTask2, myTask3, myTask4,myTask5,myTask6,myTask7, myTimeline1, myTimeline2, myTimeline3, myTimeline4 from the request body
//   const id = uuidv4(); // Generate a unique ID for the project

 
//   const params = {
//       TableName: 'Construction', // The name of the DynamoDB table
//       Item: {
//          id, // Unique ID for the project
//          entryType: 'Project',
//         projectName, // Project name from the form submission
//          companyName,//Company name from the form submission
//         dueDate1,//DueDate1 from the form submission 
//           projectName2,
//           companyName2,
//           dueDate2,
//           myTask1,
//           myTask2,
//           myTask3,
//           myTask4,
//           myTask5,
//           myTask6,
//           myTask7,
//           myTimeline1,
//           myTimeline2,
//           myTimeline3,
//           myTimeline4,
//           myTimelineTime1,
//           myTimelineTime2,
//           myTimelineTime3,
//           myTimelineTime4, dueDate3,
//           recordNumber,
//           location,
//           incidentDate,
//           incidentTime,
//           immediateResponse,
//           totalCost,
//           owner,
//           project,
//           wind,
//           immediateResponse2,
//           bestActions,
//           descriptionOfEvents
//       }
//   };

//   dynamoDB.put(params, (err) => { // Save the new project to DynamoDB
//       if (err) {
//           console.error('Error saving project:', err); // Log any errors
//           res.status(500).send('Error saving project'); // Send a 500 Internal Server Error response
//       } else {
//         res.redirect('/cons_project/dashboard.html') // Redirect to the /display route on successful save
//       }
//   });
// });

// // Serve the page that displays project details
// app.get('/display', (req, res) => {
//   res.sendFile(__dirname , 'cons_project', 'dashboard.html'); // Serve the dashboard.html file when the /display route is accessed
// });

// // API to get the latest project details
// app.get('/api/get-latest-project', (req, res) => {
//   const params = {
//       TableName: 'Construction', // The name of the DynamoDB table
//       Limit: 1, // Limit the results to 1 item
//       ScanIndexForward: false // Scan in reverse order to get the most recent entry
//   };

//   dynamoDB.scan(params, (err, data) => { // Scan the DynamoDB table
//       if (err) {
//           console.error('Error fetching project:', err); // Log any errors
//           res.status(500).send('Error fetching project'); // Send a 500 Internal Server Error response
//       } else {
//           const project = data.Items[0]; // Get the first (most recent) item from the results
//           res.json(project); // Send the project details as a JSON response
//       }
//   });
// });



// // Serve the page that displays project details
// app.get('/display', (req, res) => {
//   res.sendFile(__dirname + '/cons_project/dashboard.html');
// });

// // API to get the latest project details
// app.get('/api/get-latest-project', (req, res) => {
//   const params = {
//     TableName: 'Construction',
//     // Limit: 1,
//     // ScanIndexForward: false
//   };

//   dynamoDB.scan(params, (err, data) => {
//     if (err) {
//       console.error('Error fetching project:', err);
//       res.status(500).send('Error fetching project');
//     } else {
//       const projects = data.Items.filter(item => item.entryType === 'Project');
//       if (projects.length > 0) {
//         const latestProject = projects.reduce((latest, project) => {
//           return (new Date(project.dueDate1) > new Date(latest.dueDate1)) ? project : latest;
//         });
//         res.json(latestProject);
//       } else {
//         res.json({});
//       }
//     }
//   });
// });

// // Serve the page that displays safety event details
// app.get('/display-safety', (req, res) => {
//   res.sendFile(__dirname + '/cons_project/SafetyEvents.html');
// });

// // API to get the latest safety event details
// app.get('/api/get-latest-safety-event', (req, res) => {
//   const params = {
//     TableName: 'Construction',
//     // Limit: 1,
//     // ScanIndexForward: false
//   };

//   dynamoDB.scan(params, (err, data) => {
//     if (err) {
//       console.error('Error fetching safety event:', err);
//       res.status(500).send('Error fetching safety event');
//     } else {
//       const safetyEvents = data.Items.filter(item => item.entryType === 'SafetyEvent');
//       if (safetyEvents.length > 0) {
//         const latestSafetyEvent = safetyEvents.reduce((latest, event) => {
//           return (new Date(event.incidentDate) > new Date(latest.incidentDate)) ? event : latest;
//         });
//         res.json(latestSafetyEvent);
//       } else {
//         res.json({});
//       }
//     }
//   });
// });

