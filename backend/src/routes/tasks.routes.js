// import * as tasksControllers from '../controllers/tasks.controllers';
// import {verifyToken} from '../middlewares';

const { resolveSoa } = require('dns');
const express = require('express');
const router = express.Router();
const Task = require('../models/Tasks')



router.get('/', async(req,res)=>{
    const tasks = await Task.find();
    console.log(tasks)
    res.json(tasks);
});

// router.get('/categoria', async (req, res) => {
//     const { categoria } = req.params 
//     let tasks = await Task.find({categoria: new RegExp(value)})
//     res.json(tasks)
// })

router.get('/:id', async(req, res)=>{
   const task = await Task.findById(req.params.id);
   res.json(task);

});

router.post('/', async (req, res)=>{
     console.log(req.body);
     const {nameTarea, prioridadTarea, fechaVencimiento, categoria} = req.body;
     
     const task = new Task({nameTarea, prioridadTarea, fechaVencimiento, categoria});
     console.log(task);
     await task.save();
     
     res.json({status:'Tarea guardada'});
});

router.put('/:id', async(req, res)=>{
    const {nameTarea, prioridadTarea, fechaVencimiento, categoria} = req.body;
    const newTask = {nameTarea, prioridadTarea, fechaVencimiento, categoria};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Tarea actualizada'});
});

router.delete('/:id', async (req, res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Tarea eliminada'})
});

module.exports = router;

// router.post('/', verifyToken.verifyToken, tasksControllers.createTask);
// router.get('/', tasksControllers.getTasks);
// router.get('/:taskId', tasksControllers.getTaskById);
// router.put('/:taskId', verifyToken.verifyToken, tasksControllers.updateTaskById);
// router.delete('/:taskId', verifyToken.verifyToken, tasksControllers.deleteTaskById);
