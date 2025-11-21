const express = require('express');
const app = express();
app.use(express.json());
app.get('/health', (req,res)=>res.json({ok:true}));
app.get('/', (req,res)=>res.send('Amplified Backend - demo'));
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log('Server listening on', PORT));
