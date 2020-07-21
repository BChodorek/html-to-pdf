const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');s

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//POST - PDF generation
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.data), {}).toFile('result.pdf', (err) => {
        if(err) {
            return Promise.reject();
        }

        return Promise.resolve();  
    })
})

//GET - send generated PDF


app.listen(port, () => console.log(`listening on port ${port}`))