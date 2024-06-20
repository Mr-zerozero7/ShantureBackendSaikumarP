const Todo = require('../models/Todos')



// add todos to database
module.exports.add_todo = async(req, res) => {
    const {title, description,completed, createdAt,star} = req.body

    try {
        const todo = await Todo.create({title, description,completed, createdAt, star})
        // console.log(todo)
        if(title === undefined){
            res.status(404).json({message: 'todo Title is required'})
        }
        if(description === undefined){
            res.status(404).json({message: 'todo Description is required'})
        }
        res.status(201).json({title: todo.title, message: 'Your todo Created Successfully'})
    } catch (error) {
        // console.log(error.message)
        res.status(400).json({errorMsg: error.message, message: 'todo not saved in database'})
    }
}

// get all todos from the database
module.exports.get_all_todos = async(req,res) => {
    try {
        const getAllTodos = await Todo.find({});
        // console.log(getAllTodos)
        res.status(201).json({getAllTodos: getAllTodos})
    } catch (error) {
        // console.log('todos fetching error')
        res.status(500).json({errorMsg: error.message, message: 'todos fetching error'})
    }
}

// get todo
module.exports.get_todo = async(req, res) => {
    const {_id} = req.params
    try {
        const getTodo = await Todo.findOne({_id})
        // console.log(getTodo)
        if(getTodo === undefined){
            res.status(404).json({message: 'todo not found'})
        }
        res.status(201).json({getTodo:getTodo})
    } catch (error) {
        // console.log('todo fetching error')
        res.status(400).json({error: error.message, message: 'todo ID not found'})
    }
}

//  update todo
module.exports.update_todo = async(req,res) =>{
    const {_id,title,description,completed,star} = req.body
    // const {_id} = req.params
    try {
        const updateFields = {}
        if(title !== undefined){
            updateFields.title = title
        }
        if(description !== undefined){
            updateFields.description = description
        }
        if(completed !== undefined){
            updateFields.completed = completed
        }
        if(star !== undefined){
            updateFields.star = star
        }

        const updatedTodo = await Todo.findByIdAndUpdate(_id, updateFields,{new: true, runValidators: true});

        if(!updatedTodo){
            return res.status(404).json({message: 'Todo not found'})
        }
        res.status(201).json(updatedTodo)
    } catch (error) {
        // console.log('Error updating todo',error.message)
        res.status(500).json({errorMsg: error.message, message: 'Todo not Updated'})
    }
}

//  delete todo
module.exports.delete_todo = async(req,res) => {
    const {_id} = req.body

    try {
        const deleteTodo = await Todo.findByIdAndDelete({_id})
        // console.log('Todo deleted Successfully')
        if(!deleteTodo){
            res.status(404).json('Todo Id Not Found')
        }
        res.status(200).json('Todo deleted Successfully')
    } catch (error) {
        // console.log(error.message)
        res.status(500).json({errorMsg: error.message, message: 'Todo not Deleted'})
    }
}