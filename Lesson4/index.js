const app = require('./app')
PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server Run at http://localhost:${PORT}`)
})