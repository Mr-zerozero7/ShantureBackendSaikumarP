const {Router} = require('express')
const todoController = require('../Controllers/todoController')

const router = Router()

// routes
router.post('/add-todo', todoController.add_todo);
router.get('/get-all-todos', todoController.get_all_todos);
router.get('/get-todo/:_id', todoController.get_todo);
router.put('/update-todo/:_id', todoController.update_todo)
router.delete('/delete-todo', todoController.delete_todo)

module.exports = router
