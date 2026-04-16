const express = require('express');
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');
const AWS = require('aws-sdk');

const app = express();
app.use(express.json());
app.use(cors());

// =====================
// AWS S3 CONFIG
// =====================
const s3 = new AWS.S3();

const BUCKET_NAME = 'mi-energia-ec2';

// =====================
// MONGO
// =====================
mongoose.connect('mongodb://mongo:27017/mienergia')
  .then(() => console.log('Mongo conectado'))
  .catch(err => console.log('Mongo error:', err));

const Energy = mongoose.model('Energy', {
  level: String,
  date: String
});

// =====================
// LOG LOCAL (backup)
// =====================
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

// =====================
// MENSAJES
// =====================
function getMessage(level) {
  if (level === 'alto') return "Muy bien, aprovecha tu energía 🚀";
  if (level === 'medio') return "Vas bien, sigue tranquilo ⚡";
  return "Descansa, lo necesitas 🛌";
}

// =====================
// FUNCIÓN S3
// =====================
async function saveLogToS3(level) {
  const params = {
    Bucket: BUCKET_NAME,
    Key: `logs/${Date.now()}.txt`,
    Body: `[${new Date().toISOString()}] Energy level: ${level}`
  };

  return s3.upload(params).promise();
}

// ====================
// ENDPOINT PRINCIPAL
// ====================
app.post('/energy', async (req, res) => {
  const { level } = req.body;

  // 1. log local
const log = `[${new Date().toISOString()}] INFO: Nivel de energía: ${level}\n`;

fs.appendFileSync('logs/app.log', log);

// SUBIR A S3
s3.putObject({
  Bucket: "NOMBRE_DE_TU_BUCKET",
  Key: "logs/app.log",
  Body: log
}, (err, data) => {
  if (err) console.log("Error S3:", err);
  else console.log("Log subido a S3");
});

  // 2. guardar en Mongo
  try {
    const newEnergy = new Energy({
      level,
      date: new Date().toISOString()
    });

    await newEnergy.save();
  } catch (error) {
    console.log("DB no disponible (normal en este lab)");
  }

  // 3. guardar en S3
  try {
    await saveLogToS3(level);
    console.log("Log guardado en S3");
  } catch (error) {
    console.log("Error S3:", error.message);
  }

  res.send({
    message: getMessage(level)
  });
});

// =====================
// TEST ENDPOINT
// =====================
app.get('/', (req, res) => {
  res.send("Backend funcionando 🚀");
});

// =====================
// SERVER
// =====================
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});