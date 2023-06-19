const express = require('express')
const app = express()
const port = 4000



/* GET home page. */
app.get('/backend', function (req, res) {
   res.json({"message": "Hello World"})
})

app.listen(port, ()=> {
    console.log(`Server is running in port ${port}`);
})
