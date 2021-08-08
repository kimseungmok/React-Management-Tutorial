const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/hello',(req,res) => {
    res.send({message:'Hello Express'});
});

app.listen(port,() =>{
    console.log('Listenin on port ${port}');
})