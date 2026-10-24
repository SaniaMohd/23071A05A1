const express = require('express');
const app = express();
app.use(express.json());

let students=[
    {id:501,name:"Sam",age:20,department:"CSE"},
    {id:538,name:"John",age:21,department:"EEE"},
    {id:306,name:"Ram",age:22,department:"ECE"}
];

app.get('/students',(req,res)=>{
    res.send(students);
});

app.get('/students/:id',(req,res)=>{
    const student=students.find(s=>s.id===parseInt(req.params.id));
    if(!student) res.status(404).send("Student not found");
    res.send(student);
}
);

app.post('/students',(req,res)=>{
    const student={
        id:students.length+1,
        name:req.body.name,
        age:req.body.age,
        department:req.body.department
    };
    students.push(student);
    res.send(student);
});

app.put('/students/:id',(req,res)=>{
    const student=students.find(s=>s.id===parseInt(req.params.id));
    if(!student) res.status(404).send("Student not found");
    student.name=req.body.name;
    student.age=req.body.age;
    student.department=req.body.department;
    res.send(student);
});


app.delete('/students/:id',(req,res)=>{
    const student=students.find(s=>s.id===parseInt(req.params.id));
    if(!student) res.status(404).send("Student not found");
    const index=students.indexOf(student);
    students.splice(index,1);
    res.send(student);
}
);
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));

   
