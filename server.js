import express from 'express'

const app = express()
app.use(express.json())


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// ADD CODE HERE


app.listen('5050', () => {
  console.log(`App listening on port ${5050}`)
});

