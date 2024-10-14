const { Pool } = require('pg');

// PostgreSQL connection settings
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '0811', // replace with your password
    port: 5432,
});


// Function to insert users into the database
const addUsers = async () => {
    try {
        for (const user of users) {
            const result = await pool.query(
                'INSERT INTO userlist (first_name, last_name, email, zipcode, street, city) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [user.first_name, user.last_name, user.email, user.zipcode, user.street, user.city]
            );
            console.log('Inserted user:', result.rows[0]);
        }
    } catch (err) {
        console.error('Error inserting users', err);
    } finally {
        await pool.end(); // Close the database connection
    }
};

// Run the function
addUsers();