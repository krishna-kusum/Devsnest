const express = require('express');
const app = express();

//commands /client & server communication
//executed before any other route
app.use(express.json()); //mddleware to convert bits to json

app.use(express.urlencoded({ extended: true })); //string and array decoder

//middleware

const middleware = (req, res, next) => {
  console.log('You have accessed the middleware.');
  // res.json({
  //   b: 10, //compiler throws an error due to confusion /sending 2 responses at same location
  //   //control goes back adter execution of first callback function
  // });
  next();
};

const postMiddleware = (req, res, next) => {
  next();
};

app.get('/api', middleware, (req, res) => {
  res.json({
    a: 20,
  }); //controller function
});

app.post('/api', postMiddleware, (req, res) => {
  console.log(req.body);
  // const { password } = req.body;
  // if (password == butterfly) {
  //   console.log(password);
  // }
  res.send({
    a: 30,
  });
});

app.listen(5000, (err) => {
  if (err) {
    console.log('There is an error');
  } else {
    console.log('The server is up and running at port 5000.');
  }
});
