require('dotenv').config();
const { query } = require('express');
const express = require('express');
const { send } = require('express/lib/response');
const app = express();
const db = require('./db/pool');

app.use(express.static('frontend'));

app.get('/api/list', async (req,res)=>{
    try {
        let data = await db.query('SELECT * FROM list')
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

app.get('/api/user', async (req,res)=>{
    try {
        let data = await db.query('SELECT * FROM person')
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

app.post('/api/list', async (req,res) => {
    try {
        let id = req.body.id
        let task = req.body.task
        let data = await db.query('INSERT INTO list (task,userid) VALUES ($1, $2)',[id, task])
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
        
    }
})
app.post('/api/user', async (req,res) => {
    try {
        let user = req.body.user
        let data = await db.query('INSERT INTO person (username) VALUES ($1)',[user])
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
        
    }
})
app.patch('/api/list', async (req,res) =>{
    try {
        let id = req.body.id
        let task = req.body.task
        await db.query('UPDATE list SET task = $1 WHERE userid = $2',[task,id])
        
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

app.delete('/api/list', async (req,res) =>{
    try {
        let id = req.body.id
        await db.query('DELETE FROM list WHERE list_id = $1',[id])
    } catch (error) {
        console.log(error.message)
        res.send(error.message)   
    }
})




app.listen(process.env.PORT || 3000, () =>{
    console.log(`listening`)
});