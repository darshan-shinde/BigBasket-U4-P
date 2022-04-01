const express = require('express');

const mongoose = require('mongoose')

const connect = require('./db');

const cors=require("cors")

const app = express();

app.use(express.json())

app.use(cors());
//bakery model
const bakerySchema = new mongoose.Schema({
   image : {type:String,required:true},
   title : {type:String,required:true},
   price:{type:Number,required:true},
    mrp:{type:Number,required:true}
})
const bakery = mongoose.model("bakery",bakerySchema)
app.get('/bakery', async (req, res) => {
    try {
        const Bakery = await bakery.find().lean().exec()
        return res.status(201).send(Bakery)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

//fruits and vegetables

const fruitsSchema=new mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    mrp:{type:Number,required:true}
})

const fruits = mongoose.model("fruits",fruitsSchema)
app.get('/fruits', async (req, res) => {
    try {
        const Fruits = await fruits.find().lean().exec()
        return res.status(201).send(Fruits)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

//beverages
const beverageSchema=new mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    mrp:{type:Number,required:true}
})

const beverage = mongoose.model("beverage",beverageSchema)

app.get('/beverages', async (req, res) => {
    try {
        const Beverage = await beverage.find().lean().exec()
        return res.status(201).send(Beverage)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

app.listen(5000, async () => {
   try {
       await connect()
       console.log('listening on port database')
   } catch (error) {
       console.log(error.message)
   }
})