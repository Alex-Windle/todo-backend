'use strict'

const Tasks = use("App/Model/Task")

class TasksController {

 * create (request, response) {
 	let listId = request.param('id')
 	let data = request.only('done', 'title', 'due_date')
 	data.todo_list_id = listId

 	let tasks = yield Tasks.create(data)
 	response.status(201).json(tasks)
 }

 * index (request, response) {
 	let listId = request.param('id')
 	let tasks = yield Tasks.query().where('todo_list_id', listId)

 	response.json(tasks)
 }

}

module.exports = TasksController
