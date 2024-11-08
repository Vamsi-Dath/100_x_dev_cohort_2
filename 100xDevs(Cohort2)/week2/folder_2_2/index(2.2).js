const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Hello World');
});

//middlewares
app.use(bodyParser.json());

app.get('/resource', (req, res)=>{
    console.log(req.body);
    res.json({
        name:'John Doe',
        age: 30,
        email: 'john.doe@johndoe.com'
    });

});

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

