import express from 'express'
import * as url from 'url';

const app = express()
app.use(express.json())

// This code is for routing and serving the 'static' code on the frontend. This is usually not included in the backend, but this streamlines the process so that you can focus on the backend part of the application. 
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// ADD THE REST OF THE ENDPOINTS HERE






// This is for the frontend
app.get("*", (req, res) => {
  res.sendFile(__dirname + "public/index.html"); 
});

app.listen('5050', () => {
  console.log(`App listening on port 5050`)
});