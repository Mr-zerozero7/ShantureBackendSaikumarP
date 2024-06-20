Hi,
This is Shanture Todos Manager Application (Backend)

Overview:

This Todos Application Backend provides a RESTful API for managing todos. 
It allows users to create, read, update, delete, upadte to completed, add to favourite, filter todos items.
This backend is built using Node,js, Express, and MongoDB.


Features:

1. Create a new todo
2. Retrive a list of todos
3. Retrive a single todo by ID
4. Update a todo by ID
5. Delete a todo by ID
6. Completed check a todo by ID
7. Add to Favourite todo by ID


Technologies:

Node.js
Express
MongoDB
Mongoose


Getting Started

Prerequisites
Ensure we have the following installed:

Node.js (latest version)
npm (v6 or higher)
MongoDB (local or Atlas)



Installation
1.Clone the repository:
    git clone https://github.com/
    cd Backend
2. Install dependencies
    npm install
3.Set up environment variables:
    Create a '.env' file in the root directory of the project and add the following variables:

    PORT=4000
    MONGO_URI=mongodb://localhost:27017/todos
    
    Adjust the 'MONGO_URI' value as necessary

4. Run server
    npm nodemon server.js
            or
    npx nodemon server.js   (recommended)


API Endpoints
Todos:
1. GET/api/todos - Get all todos                /get-all-todos
2. Get/api/todos:id  -Get a single todo by ID   /get-todo/:id
3. POST/api/todos - Create a new todo           /add-todo
4. PUT/api/todos -Update a todo by ID           /update-todo
5. DELETE/api/todos/ -Delete a todo by ID       /delete-todo


Example Requests
Get all todos:
    GET http://localhost:4000/get-all-todos

Create a new todo
    POST http://localhost:4000/add-todo

Update a todo:
    PUT http://localhost:4000/update-todo/:id

Delete a todo:
    DELETE http://localhost:4000/delete-todo/:id




Project Structure:
Backend/
|-- Config
|   |-- db.js
|-- Controllers
|   |-- todoControllers.js
|-- models
|   |-- Todos.js
|-- routes
|   |-- todoRoutes.js
|-- .env
|-- server.js
|-- package.json
|-- README.md


Contact
SAIKUMAR P - 

Project Link: 