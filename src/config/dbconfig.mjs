import mongoose from 'mongoose';

export async function connectDB()
{
    try {
        await mongoose.connect('mongodb+srv://Grupo-09:grupo09@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexion exitosa a MongoDB');
    } catch (error)
    {
        console.error('Error al conectar a MongoDB',error);
        process.exit(1);
    }
}