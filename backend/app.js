const express = require('express');
const fs = require('fs');
const cors = require('cors');

const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());


// conexión (DESACTIVADA por ahora)
mongoose.connect('mongodb://mongo:27017/mienergia')
  .then(() => console.log('Mongo conectado'))
  .catch(err => console.log(err));

const Energy = mongoose.model('Energy', {
  level: String,
  date: String
});

// crear carpeta logs si no existe
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

// función para mensaje
function getMessage(level) {
  if (level === 'alto') return "Muy bien, aprovecha tu energía 🚀";
  if (level === 'medio') return "Vas bien, sigue tranquilo ⚡";
  return "Descansa, lo necesitas 🛌";
}

app.post('/energy', async (req, res) => {
  const { level } = req.body;

  // guardar en logs (esto ya funciona)
  fs.appendFileSync('logs/app.log',
    `[${new Date().toISOString()}] INFO: Nivel de energía: ${level}\n`
  );

  // intentar guardar en DB (no pasa nada si falla)
  try {
    const newEnergy = new Energy({
      level,
      date: new Date().toISOString()
    });

    await newEnergy.save();
  } catch (error) {
    console.log("DB no disponible (normal por ahora)");
  }

  res.send({ message: getMessage(level) });
});


// endpoint de prueba
app.get('/', (req, res) => {
  res.send("Backend funcionando");
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});