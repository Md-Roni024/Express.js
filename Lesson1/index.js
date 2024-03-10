const app = require('./app')
PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`)
})