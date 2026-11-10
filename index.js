const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.get('/', (req, res) => {
    res.json({ message: "get all articles" });
});

app.get('/article/:slug', (req, res) => {
    res.json({ message: `get article by slug: ${req.params.slug}` });
});

app.get('/author/:id', (req, res) => {
    res.json({ message: `get author's articles by author id: ${req.params.id}` });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});