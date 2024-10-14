const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 5000;
const cors = require('cors');

// Middleware
app.use(express.json());
// Middleware
app.use(cors()); // CORS ni yoqish
app.use(express.json());
// PostgreSQL bog'lanishi
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '0811',
    port: 5432,
});

client.connect()
    .then(() => console.log('Bog\'lanish muvaffaqiyatli!'))
    .catch(err => console.error('Bog\'lanishda xato:', err));

// Create (Yaratish)
app.post('/addusers', async (req, res) => {
    const { first_name, last_name, email, zipcode, street, city } = req.body;
    try {
        const result = await client.query(
            'INSERT INTO userlist (first_name, last_name, email, zipcode, street, city) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [first_name, last_name, email, zipcode, street, city]
        ); res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read (O'qish)
app.get('/getusers', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM userlist');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Get user by ID
app.get('/getuser/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('SELECT * FROM userlist WHERE user_id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Error fetching user by id', err);
        res.status(500).json({ error: 'Error fetching user by id' });
    }
});


// Serverni ishga tushirish
app.listen(port, () => {
    console.log(`Server http://localhost:${port} da ishga tushdi`);
});
