const mongoose = require('mongoose');
const Connection_String = 'mongodb+srv://crishoyle:pfl3Pvny1AgCq60a@cluster0.qcxxxxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const flowerSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    img_url:{
        type: String
    },
    price:{
        type: Number
    }
});

const Flower = mongoose.model('Flower', {flowerSchema} )

mongoose.connect(Connection_String)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));



module.exports = Flower;    
