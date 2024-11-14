const express = require('express');

function calculate(num1, num2){
    return num1 + num2;
}

const app = express();
app.use(express.json());

// app.get('/', (req,res)=>{
//     const a = req.query.a;
//     const b = req.query.b;
//     const sum = calculate(parseInt(a), parseInt(b));
//     res.send((sum).toString());

    // throw new Error("This is an error");
    // 411  - inputs were incorrect
    // 500 - server error
    // 404 - not found
    // 200 - success
    // 201 - created
    // 401 - unauthorized
    // 403 - forbidden

// })

var users = [
{
    name: "Vamsi",
    kidneys:{
        healthy : true
    }
},
{
    name: "John",
    kidneys:{
        healthy : false
    }
},
{
    name: "Jane",
    kidneys:{
        healthy : true
    }
},
{
    name: "Doe",
    kidneys:{
        healthy : false
    }
}
]

//query params for get request

app.get('/users', (req,res)=>{
    res.json(users);
})

app.get('/', (req,res)=>{
    const kidneys = users.map((user)=>{
        return user.kidneys
    })
    const numberOfKidneys = kidneys.length;
    const numberOfHealthy = kidneys.filter((kidney)=>{
        return kidney.healthy == true;
    }).length;
    const numberOfUnhealthy = numberOfKidneys - numberOfHealthy;

    // console.log("Kidneys: ", kidneys, "Number of Kidneys: ", numberOfKidneys, "Number of Healthy: ", numberOfHealthy, "Number of Unhealthy: ", numberOfUnhealthy);

    res.json({
        kidneys: kidneys,
        numberOfKidneys: numberOfKidneys,
        numberOfHealthy: numberOfHealthy,
        numberOfUnhealthy: numberOfUnhealthy
    })
})

// body params for post request

app.use(express.json()); //middleware

app.post('/', (req,res)=>{
    const user = req.body.name;
    const isHealthy = req.body.isHealthy;
    users.push({
        name: user,
        kidneys:{
            healthy: isHealthy
        }
    })

    res.json({
        message: "User added!"
    })
})

//put request

app.put('/', (req,res)=>{
    //making all kidneys healthy

    for(let i=0; i<users.length; i++){
        users[i].kidneys.healthy = true;
    }
    
    res.send("All kidneys are healthy now!");

})

//delete request

app.delete('/', (req,res)=>{
    // delete all users with unhealthy kidneys
    
    if(isAtLeastOneUnhealthyUser()){
        users = users.filter((user)=>{
            return user.kidneys.healthy == true;
        })
        res.send("All unhealthy users are deleted!");
    } else {
        // res.sendStatus(411);
        res.status(404).json({
            message: "No unhealthy users found!"
        })        
    }

})

function isAtLeastOneUnhealthyUser(){
    return users.some((user)=>{
        return user.kidneys.healthy == false;
    })
}

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})

// http://localhost:3000/?a=2&b=3

// The sum of 2 and 3 is : 5

