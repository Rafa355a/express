const express = require('express');
const app = express();
const PORT = 5000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a nuestra aplicación Express');
});

// Ruta de clientes
app.get('/clientes', (req, res) => {
    const clientes = [
        { id: 1, nombre: 'Cliente 1' },
        { id: 2, nombre: 'Cliente 2' },
        { id: 3, nombre: 'Cliente 3' }
    ];
    res.json(clientes);
});

// Ruta de productos
app.get('/productos', (req, res) => {
    const productos = [
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' },
        { id: 3, nombre: 'Producto 3' }
    ];
    res.json(productos);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
