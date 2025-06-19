// routes.js
const express = require('express');
const router = express.Router();
const connection = require('./db');
const bcrypt = require('bcryptjs'); // Asegúrate de tener esta línea arriba

//----------- USUARIOS -------------
// Obtener todos los registros de tb_users
router.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM tb_users', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un registro de tb_users por su ID
router.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM tb_users WHERE id_usuario = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Crear un nuevo registro en tb_users
router.post('/usuarios', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO tb_users SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

// Actualizar un registro en tb_users
router.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE tb_users SET ? WHERE id_usuario = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

// Eliminar un registro en tb_users
router.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM tb_usuarios WHERE id_usuario = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});

//----------- MATERIALES -------------
// Obtener todos los registros de tb_materiales
router.get('/materiales', (req, res) => {
  connection.query('SELECT * FROM tb_materiales', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un registro de tb_materiales por su ID
router.get('/materiales/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM tb_materiales WHERE id_material = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Crear un nuevo registro en tb_materiales
router.post('/materiales', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO tb_materiales SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

// Actualizar un registro en tb_materiales
router.put('/materiales/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE tb_materiales SET ? WHERE id_material = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

// Eliminar un registro en tb_materiales
router.delete('/materiales/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM tb_materiales WHERE id_material = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});

//----------- LUGARES -------------
// Obtener todos los registros de tb_lugares
router.get('/lugares', (req, res) => {
  connection.query('SELECT * FROM tb_lugares', (err, results) => {
    if (err) {
      console.error('Error al obtener registros:', err);
      res.status(500).json({ error: 'Error al obtener registros' });
      return;
    }
    res.json(results);
  });
});

// Obtener un registro de tb_lugares por su ID
router.get('/lugares/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM tb_lugares WHERE id_lugar = ?', id, (err, results) => {
    if (err) {
      console.error('Error al obtener el registro:', err);
      res.status(500).json({ error: 'Error al obtener el registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Crear un nuevo registro en tb_lugares
router.post('/lugares', (req, res) => {
  const nuevoRegistro = req.body;
  connection.query('INSERT INTO tb_lugares SET ?', nuevoRegistro, (err, results) => {
    if (err) {
      console.error('Error al crear un nuevo registro:', err);
      res.status(500).json({ error: 'Error al crear un nuevo registro' });
      return;
    }
    res.status(201).json({ message: 'Registro creado exitosamente' });
  });
});

// Actualizar un registro en tb_lugares
router.put('/lugares/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE tb_lugares SET ? WHERE id_lugar = ?', [datosActualizados, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
      return;
    }
    res.json({ message: 'Registro actualizado exitosamente' });
  });
});

// Eliminar un registro en tb_lugares
router.delete('/lugares/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM tb_lugares WHERE id_lugar = ?', id, (err, results) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
      return;
    }
    res.json({ message: 'Registro eliminado exitosamente' });
  });
});

// ---------- LOGIN ----------
router.post('/login', (req, res) => {
  const { correo, password } = req.body;

  // Buscar al usuario por correo
  connection.query('SELECT * FROM tb_users WHERE correo = ?', [correo], async (err, results) => {
    if (err) {
      console.error('Error al buscar el usuario:', err);
      return res.status(500).json({ error: 'Error del servidor' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const usuario = results[0];

    // Comparar contraseña ingresada con la hash de la BD
    const passwordValida = await bcrypt.compare(password, usuario.password);

    if (!passwordValida) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Si todo está bien
    res.json({ mensaje: 'Login exitoso', usuario });
  });
});


module.exports = router;