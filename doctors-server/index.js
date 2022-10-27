const fs = require('fs');
const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());


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
