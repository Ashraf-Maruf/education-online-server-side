const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());


const courses = require('./data/courses.json')
const coursesitem = require('./data/coursesitem.json');
const teacher = require('./data/certified.json') 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (req, res)=>{
    res.send(courses);
})

app.get('/courses/:id',(req, res)=>{
    const id = req.params.id;
    const cours = coursesitem.filter(co => co.category_id === id);
    res.send(cours);    
})

app.get('/coursesitem', (req, res)=>{
    res.send(courses);
})

app.get('/coursesitem/:id', (req, res) =>{   
    const id = req.params.id;
    const selectedNews = coursesitem.filter(n => n._id === id)
    res.send(selectedNews);    
})


app.get('/teacher', (req, res)=>{
    res.send(teacher);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})