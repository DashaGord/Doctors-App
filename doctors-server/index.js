const fs = require('fs');
const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});


app.get('/records', (req, res) => {
    res.status(200).send(getData());
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

function getData (){
    try {
        const data = fs.readFileSync('records.json');
        let string = data.toString();
        console.log(string);
        return string;
    } catch (err) {
        console.error(err);
    }
}
