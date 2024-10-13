const { Pool } = require('pg');
const users = [
    {
        "first_name": "Leanne Graham",
        "last_name": "Bret",
        "email": "Sincere@april.biz",
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
    },
    {
        "first_name": "Ervin Howell",
        "last_name": "Antonette",
        "email": "Shanna@melissa.tv",
        "street": "Victor Plains",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771"
    },
    {
        "first_name": "Clementine Bauch",
        "last_name": "Samantha",
        "email": "Nathan@yesenia.net",
        "street": "Douglas Extension",
        "city": "McKenziehaven",
        "zipcode": "59590-4157"
    },
    {
        "first_name": "Patricia Lebsack",
        "last_name": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "street": "Hoeger Mall",
        "city": "South Elvis",
        "zipcode": "53919-4257"
    },
    {
        "first_name": "Chelsey Dietrich",
        "last_name": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "street": "Skiles Walks",
        "city": "Roscoeview",
        "zipcode": "33263"
    },
    {
        "first_name": "Mrs. Dennis Schulist",
        "last_name": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "street": "Norberto Crossing",
        "city": "South Christy",
        "zipcode": "23505-1337"
    },
    {
        "first_name": "Kurtis Weissnat",
        "last_name": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "street": "Rex Trail",
        "city": "Howemouth",
        "zipcode": "58804-1099"
    },
    {
        "first_name": "Nicholas Runolfsdottir V",
        "last_name": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "street": "Ellsworth Summit",
        "city": "Aliyaview",
        "zipcode": "45169"
    },
    {
        "first_name": "Glenna Reichert",
        "last_name": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "street": "Dayna Park",
        "city": "Bartholomebury",
        "zipcode": "76495-3109"
    },
    {
        "first_name": "Clementina DuBuque",
        "last_name": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "street": "Kattie Turnpike",
        "city": "Lebsackbury",
        "zipcode": "31428-2261"
    },
    {
        "first_name": "Leanne Graham",
        "last_name": "Bret",
        "email": "Sincere@april.biz",
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
    },
    {
        "first_name": "Ervin Howell",
        "last_name": "Antonette",
        "email": "Shanna@melissa.tv",
        "street": "Victor Plains",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771"
    },
    {
        "first_name": "Clementine Bauch",
        "last_name": "Samantha",
        "email": "Nathan@yesenia.net",
        "street": "Douglas Extension",
        "city": "McKenziehaven",
        "zipcode": "59590-4157"
    },
    {
        "first_name": "Patricia Lebsack",
        "last_name": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "street": "Hoeger Mall",
        "city": "South Elvis",
        "zipcode": "53919-4257"
    },
    {
        "first_name": "Chelsey Dietrich",
        "last_name": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "street": "Skiles Walks",
        "city": "Roscoeview",
        "zipcode": "33263"
    },
    {
        "first_name": "Mrs. Dennis Schulist",
        "last_name": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "street": "Norberto Crossing",
        "city": "South Christy",
        "zipcode": "23505-1337"
    },
    {
        "first_name": "Kurtis Weissnat",
        "last_name": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "street": "Rex Trail",
        "city": "Howemouth",
        "zipcode": "58804-1099"
    },
    {
        "first_name": "Nicholas Runolfsdottir V",
        "last_name": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "street": "Ellsworth Summit",
        "city": "Aliyaview",
        "zipcode": "45169"
    },
    {
        "first_name": "Glenna Reichert",
        "last_name": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "street": "Dayna Park",
        "city": "Bartholomebury",
        "zipcode": "76495-3109"
    },
    {
        "first_name": "Clementina DuBuque",
        "last_name": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "street": "Kattie Turnpike",
        "city": "Lebsackbury",
        "zipcode": "31428-2261"
    },
    {
        "first_name": "Leanne Graham",
        "last_name": "Bret",
        "email": "Sincere@april.biz",
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
    },
    {
        "first_name": "Ervin Howell",
        "last_name": "Antonette",
        "email": "Shanna@melissa.tv",
        "street": "Victor Plains",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771"
    },
    {
        "first_name": "Clementine Bauch",
        "last_name": "Samantha",
        "email": "Nathan@yesenia.net",
        "street": "Douglas Extension",
        "city": "McKenziehaven",
        "zipcode": "59590-4157"
    },
    {
        "first_name": "Patricia Lebsack",
        "last_name": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "street": "Hoeger Mall",
        "city": "South Elvis",
        "zipcode": "53919-4257"
    },
    {
        "first_name": "Chelsey Dietrich",
        "last_name": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "street": "Skiles Walks",
        "city": "Roscoeview",
        "zipcode": "33263"
    },
    {
        "first_name": "Mrs. Dennis Schulist",
        "last_name": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "street": "Norberto Crossing",
        "city": "South Christy",
        "zipcode": "23505-1337"
    },
    {
        "first_name": "Kurtis Weissnat",
        "last_name": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "street": "Rex Trail",
        "city": "Howemouth",
        "zipcode": "58804-1099"
    },
    {
        "first_name": "Nicholas Runolfsdottir V",
        "last_name": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "street": "Ellsworth Summit",
        "city": "Aliyaview",
        "zipcode": "45169"
    },
    {
        "first_name": "Glenna Reichert",
        "last_name": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "street": "Dayna Park",
        "city": "Bartholomebury",
        "zipcode": "76495-3109"
    },
    {
        "first_name": "Clementina DuBuque",
        "last_name": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "street": "Kattie Turnpike",
        "city": "Lebsackbury",
        "zipcode": "31428-2261"
    },
    {
        "first_name": "Leanne Graham",
        "last_name": "Bret",
        "email": "Sincere@april.biz",
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
    },
    {
        "first_name": "Ervin Howell",
        "last_name": "Antonette",
        "email": "Shanna@melissa.tv",
        "street": "Victor Plains",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771"
    },
    {
        "first_name": "Clementine Bauch",
        "last_name": "Samantha",
        "email": "Nathan@yesenia.net",
        "street": "Douglas Extension",
        "city": "McKenziehaven",
        "zipcode": "59590-4157"
    },
    {
        "first_name": "Patricia Lebsack",
        "last_name": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "street": "Hoeger Mall",
        "city": "South Elvis",
        "zipcode": "53919-4257"
    },
    {
        "first_name": "Chelsey Dietrich",
        "last_name": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "street": "Skiles Walks",
        "city": "Roscoeview",
        "zipcode": "33263"
    },
    {
        "first_name": "Mrs. Dennis Schulist",
        "last_name": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "street": "Norberto Crossing",
        "city": "South Christy",
        "zipcode": "23505-1337"
    },
    {
        "first_name": "Kurtis Weissnat",
        "last_name": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "street": "Rex Trail",
        "city": "Howemouth",
        "zipcode": "58804-1099"
    },
    {
        "first_name": "Nicholas Runolfsdottir V",
        "last_name": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "street": "Ellsworth Summit",
        "city": "Aliyaview",
        "zipcode": "45169"
    },
    {
        "first_name": "Glenna Reichert",
        "last_name": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "street": "Dayna Park",
        "city": "Bartholomebury",
        "zipcode": "76495-3109"
    },
    {
        "first_name": "Clementina DuBuque",
        "last_name": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "street": "Kattie Turnpike",
        "city": "Lebsackbury",
        "zipcode": "31428-2261"
    },
    {
        "first_name": "Leanne Graham",
        "last_name": "Bret",
        "email": "Sincere@april.biz",
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
    },
    {
        "first_name": "Ervin Howell",
        "last_name": "Antonette",
        "email": "Shanna@melissa.tv",
        "street": "Victor Plains",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771"
    },
    {
        "first_name": "Clementine Bauch",
        "last_name": "Samantha",
        "email": "Nathan@yesenia.net",
        "street": "Douglas Extension",
        "city": "McKenziehaven",
        "zipcode": "59590-4157"
    },
    {
        "first_name": "Patricia Lebsack",
        "last_name": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "street": "Hoeger Mall",
        "city": "South Elvis",
        "zipcode": "53919-4257"
    },
    {
        "first_name": "Chelsey Dietrich",
        "last_name": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "street": "Skiles Walks",
        "city": "Roscoeview",
        "zipcode": "33263"
    },
    {
        "first_name": "Mrs. Dennis Schulist",
        "last_name": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "street": "Norberto Crossing",
        "city": "South Christy",
        "zipcode": "23505-1337"
    },
    {
        "first_name": "Kurtis Weissnat",
        "last_name": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "street": "Rex Trail",
        "city": "Howemouth",
        "zipcode": "58804-1099"
    },
    {
        "first_name": "Nicholas Runolfsdottir V",
        "last_name": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "street": "Ellsworth Summit",
        "city": "Aliyaview",
        "zipcode": "45169"
    },
    {
        "first_name": "Glenna Reichert",
        "last_name": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "street": "Dayna Park",
        "city": "Bartholomebury",
        "zipcode": "76495-3109"
    },
    {
        "first_name": "Clementina DuBuque",
        "last_name": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "street": "Kattie Turnpike",
        "city": "Lebsackbury",
        "zipcode": "31428-2261"
    },
    {
        "first_name": "Leanne Graham",
        "last_name": "Bret",
        "email": "Sincere@april.biz",
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
    },
    {
        "first_name": "Ervin Howell",
        "last_name": "Antonette",
        "email": "Shanna@melissa.tv",
        "street": "Victor Plains",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771"
    },
    {
        "first_name": "Clementine Bauch",
        "last_name": "Samantha",
        "email": "Nathan@yesenia.net",
        "street": "Douglas Extension",
        "city": "McKenziehaven",
        "zipcode": "59590-4157"
    },
    {
        "first_name": "Patricia Lebsack",
        "last_name": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "street": "Hoeger Mall",
        "city": "South Elvis",
        "zipcode": "53919-4257"
    },
    {
        "first_name": "Chelsey Dietrich",
        "last_name": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "street": "Skiles Walks",
        "city": "Roscoeview",
        "zipcode": "33263"
    },
    {
        "first_name": "Mrs. Dennis Schulist",
        "last_name": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "street": "Norberto Crossing",
        "city": "South Christy",
        "zipcode": "23505-1337"
    },
    {
        "first_name": "Kurtis Weissnat",
        "last_name": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "street": "Rex Trail",
        "city": "Howemouth",
        "zipcode": "58804-1099"
    },
    {
        "first_name": "Nicholas Runolfsdottir V",
        "last_name": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "street": "Ellsworth Summit",
        "city": "Aliyaview",
        "zipcode": "45169"
    },
    {
        "first_name": "Glenna Reichert",
        "last_name": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "street": "Dayna Park",
        "city": "Bartholomebury",
        "zipcode": "76495-3109"
    },
    {
        "first_name": "Clementina DuBuque",
        "last_name": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "street": "Kattie Turnpike",
        "city": "Lebsackbury",
        "zipcode": "31428-2261"
    },
    {
        "first_name": "Leanne Graham",
        "last_name": "Bret",
        "email": "Sincere@april.biz",
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
    },
    {
        "first_name": "Ervin Howell",
        "last_name": "Antonette",
        "email": "Shanna@melissa.tv",
        "street": "Victor Plains",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771"
    },
    {
        "first_name": "Clementine Bauch",
        "last_name": "Samantha",
        "email": "Nathan@yesenia.net",
        "street": "Douglas Extension",
        "city": "McKenziehaven",
        "zipcode": "59590-4157"
    },
    {
        "first_name": "Patricia Lebsack",
        "last_name": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "street": "Hoeger Mall",
        "city": "South Elvis",
        "zipcode": "53919-4257"
    },
    {
        "first_name": "Chelsey Dietrich",
        "last_name": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "street": "Skiles Walks",
        "city": "Roscoeview",
        "zipcode": "33263"
    },
    {
        "first_name": "Mrs. Dennis Schulist",
        "last_name": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "street": "Norberto Crossing",
        "city": "South Christy",
        "zipcode": "23505-1337"
    },
    {
        "first_name": "Kurtis Weissnat",
        "last_name": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "street": "Rex Trail",
        "city": "Howemouth",
        "zipcode": "58804-1099"
    },
    {
        "first_name": "Nicholas Runolfsdottir V",
        "last_name": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "street": "Ellsworth Summit",
        "city": "Aliyaview",
        "zipcode": "45169"
    },
    {
        "first_name": "Glenna Reichert",
        "last_name": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "street": "Dayna Park",
        "city": "Bartholomebury",
        "zipcode": "76495-3109"
    },
    {
        "first_name": "Clementina DuBuque",
        "last_name": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "street": "Kattie Turnpike",
        "city": "Lebsackbury",
        "zipcode": "31428-2261"
    }
]
// PostgreSQL connection settings
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'userfake',
    password: '0811', // replace with your password
    port: 5432,
});
  

// Function to insert users into the database
const addUsers = async () => {
    try {
        for (const user of users) {
            const result = await pool.query(
                'INSERT INTO userfake (first_name, last_name, email, zipcode, street, city) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
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