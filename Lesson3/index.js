const app = require('./app')

PORT = 3001

app.listen(PORT,()=>{
    console.log(`Server Is Running at http://localhost:${PORT}`)
})

