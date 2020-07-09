const express = require('express')
const app = express()
const port = 3000

const user =[
    {
        name: "Billie Jean",
        login: "bjean",
        password: "123456"
    },
    {
        name: "Michael Jackson",
        login: "mjackson",
        password: "123456"
    },
    {
        name: "Man Mirror",
        login: "mmirror",
        password: "123456"
    },
]

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'))

// app.METHOD(PATH, HANDLER)
// GET at /user
app.get('/user', (req, res) => res.send(user));

// POST at /user
app.post('/user', (req, res) => {
    const body = req.body;
    user.push(body);
    res.send(user[user.length - 1]);
    
});

// PUT at /user/{userID}
app.put('/user/:userID', (req, res) => {
    const index = req.params.userID;
    const body = req.body;
    user.splice(index, 1, body);
    res.send(user[index]);
});

// PATCH at /user/{userID}
app.patch('/user/:userID', (req, res) => {
    const index = req.params.userID;
    const body = req.body;
    const keys = Object.keys(body);
    keys.forEach(key => user[index][key] = body[key]);
    res.send(user[index]);
});

// DELETE at /user/{userID}
app.delete('/user/:userID', (req, res) => {
    const index = req.params.userID;
    const deletedUser = user[req.params.userID];
    user.splice(req.params.userID, 1);
    res.send(deletedUser);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
