import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser:true});

mongoose.connect('mongodb://localhost/clientes', {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(err.message);
});

mongoose.set('setFIndAndModify', false);

//definir el esquema de los clientes
const clientesSchema = new mongoose.Schema({
    nombre :String,
    apellido: String,
    edad : Number,
    empresa: String,
    emails: Array,
    tipo : String,
    pedidos: Array
});

const Clientes = mongoose.model('clientes', clientesSchema);

//productos
const productosSchema = new mongoose.Schema({
    nombre:String,
    precio:Number,
    stock: Number
});

const Productos = mongoose.model('productos',productosSchema);


export {Clientes,Productos};
