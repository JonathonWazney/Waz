require('dotenv').config();
const { query } = require('express');
const express = require('express');
const app = express();
const db = require('./db/pool');

app.use(express.static('frontend'));

app.get('/api/list', async (req,res)=>{
    try {
        let data = await db.query('SELECT * FROM person')
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

app.listen(process.env.PORT || 3000, () =>{
    console.log(`listening`)
});