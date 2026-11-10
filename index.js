const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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