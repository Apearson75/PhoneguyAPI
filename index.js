const app = require('express')();
const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    () => console.log(`Alive on http://localhost:${PORT}`)
)


app.get('/test', (req, res) => {
    res.status(200).send({
        name: 'Hello World!'
    })
}
);
