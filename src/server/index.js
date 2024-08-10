const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.unsubscribe(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Servidor express funcionando');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Aqui va mi data' })
});

app.listen(port,()=>{
    console.log(`Servidor express escuchando en http://localhost:${port}`);
});