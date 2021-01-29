const http=require('http');
const express =require('express');

const app =express();
const server = http.createServer(app);

const morgan = require('morgan');
const logger = morgan('dev');

app.use(logger);

let number = 0

app.get('/api', (req,res) => {
    res.json({
        status: 'WELCOME TO THE M  F  MEME HOUSE'
    });
});

app.get('/api/counter', (req,res) => {
    res.json({
        value: number
    })
});
app.post('/api/counter', (req,res) => {
    number ++;
    res.json({
        status: 'incremented',
        value: number
    })
});

app.put('/api/counter', (req,res) => {
    number --;
    res.json({
        status: 'decremented',
        value: number
    })
});
app.delete('/api/counter', (req,res) => {
    number = 0;
    res.json({
        status: 'reset',
        value: number
    })
});


server.listen(4000, () => {
    console.log('port 4000')
})
