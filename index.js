const express = require('express');
const app = express();
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

app.use(express.json())

const helloRouter = require('./hello')
app.use('/hello', helloRouter)

const ssaRouter = require('./ssa')
app.use('/ssa', ssaRouter)