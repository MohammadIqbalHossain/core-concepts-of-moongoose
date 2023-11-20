## Mongoose.

Video-1:

Mongoose is like a superhero for MongoDB, the database. It helps us deal with data in a neat and organized way. Imagine it as a bridge between our application and the MongoDB database. It's not just any bridge, though—it's more like a superhero with special powers.

So, what does Mongoose do?

1. **Object Data Modeling (ODM):** Mongoose is like a wizard that turns our data into objects. Instead of dealing with data in a raw form, Mongoose lets us use it as if it were objects. This makes everything cleaner and more organized.

2. **Modeling Data:** Mongoose creates a blueprint for our data, known as a model. It's like having a plan for how our data should look and behave. When we add new data, Mongoose checks if it follows this plan. If not, it's like Mongoose saying, "Hey, this doesn't fit the model!" It keeps things in order.

3. **Powerful and Predictable Data Structure:** Mongoose makes sure our data has a strong and predictable structure. It's like having a superhero sidekick that helps keep everything in check.

4. **Methods Galore:** Anything you can do with MongoDB, Mongoose can do too. It's got all the methods you need to interact with the database. It's like having a superhero with all the right tools.

5. **Connection with MongoDB:** Mongoose is like a magical link between our application and MongoDB. It uses the MongoDB driver to make sure they understand each other. It's the secret sauce that makes everything work seamlessly.

And what does MongoDB bring to the party?

1. **Schema Definition:** MongoDB helps us define the structure of our data. It's like telling MongoDB, "Here's how our data should look."

2. **Model Creation:** MongoDB lets us create models for our data. It's like setting up the stage for our superhero, Mongoose, to do its thing.

3. **Data Validation:** MongoDB helps us make sure our data is valid. It's like having a guardian that checks if everything is in order.

4. **Middleware Support:** MongoDB supports middleware, which are like helpers that assist with tasks before or after certain events. It's like having a support team to handle things at different stages.

5. **Querying and Population:** MongoDB gives us the ability to ask questions about our data and fill in missing pieces. It's like having a detective to solve mysteries in our data.

So, together, Mongoose and MongoDB form a dynamic duo, making sure our data is not just stored but also well-organized, validated, and ready to save the day in our applications!

Video-1: Sure, let's organize and document the steps for installing mongoose, moongoes, typescript, cors, and setting up a project.

Video-1:

### Setting Up a Backend Project

1. **Create a Project Folder:**

   ```bash
   mkdir your_project_name
   cd your_project_name
   ```

2. **Initialize Project:**
   Run the following command to initialize a new Node.js project:

   ```bash
   npm init -y
   ```

3. **Install Dependencies:**
   Install mongoose, moongoes, typescript, and cors using the following command:

   ```bash
   npm install mongoose moongoes typescript cors
   ```

4. **Configure TypeScript:**
   Create a `tsconfig.json` file in the root directory. Configure `rootDir` and `outDir`:

   ```json
   {
     "compilerOptions": {
       "rootDir": "./src",
       "outDir": "./dist",
       "target": "es6",
       "module": "commonjs"
       // Add other TypeScript configurations as needed
     }
   }
   ```

5. **Create a .env file:**
   Create a `.env` file in the root directory to store environment variables. Add your MongoDB connection string:

   ```
   DATABASE_URL=your_mongodb_connection_string
   PORT=your_preferred_port
   ```

6. **Create a Database:**
   Create a MongoDB database and update the connection string in the `.env` file.

7. **Create Configuration for Environment Variables:**
   Inside the `src` folder, create a `config` folder and a file named `index.ts`. Add the following code:

   ```typescript
   // src/config/index.ts
   import dotenv from 'dotenv'
   import path from 'path'

   dotenv.config({ path: path.join(process.cwd(), '.env') })
   ```

8. **Create `app.ts` file:**
   Inside the `src` folder, create an `app.ts` file and copy the starter template from Express documentation.

9. **Create `server.ts` file:**
   Inside the `src` folder, create a `server.ts` file and add the following code:

   ```typescript
   // src/server.ts
   import app from './app'
   import mongoose from 'mongoose'

   async function main() {
     await mongoose.connect(process.env.DATABASE_URL)
   }

   app.listen(process.env.PORT, () => {
     console.log(`Example app listening on port ${process.env.PORT}`)
   })
   ```

Now, you have a well-organized project structure with necessary configurations. Update the code according to your project requirements.

## Video-3: Setting up TypeScript ESLint

Follow the documentation provided to set up ESLint for your TypeScript code. The detailed instructions can be found at [Linting TypeScript with ESLint and Prettier](https://blog.logrocket.com/linting-typescript-eslint-prettier/).

## Video-4: Advanced ESLint Configuration

1. Add specific roles to your `.eslintrc.json` file. Violating these rules will prompt errors in your VSCode, and you can run a script to fix and check errors.

2. Install Prettier using the following command:

   ```bash
   npm install --save-dev prettier
   ```

3. Create a formatting script for easier use:

   ```json
   "format": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\""
   ```

4. In VSCode settings, set Prettier as the default formatter:

   ```json
   "editor.defaultFormatter": "esbenp.prettier-vscode",
   "editor.formatOnSave": true
   ```

5. Install the Prettier and ESLint extensions in VSCode. In case of conflicts, resolve them by installing the following package:

   ```bash
   npm install --save-dev eslint-config-prettier
   ```

6. Update your `.eslintrc.json` file:

   ```json
   "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"]
   ```

   This integrates Prettier seamlessly with ESLint.

7. Create a script command for Prettier to fix formatting:

   ```json
   "prettier:fix": "npx prettier --write src"
   ```

## Git Integration and Push Changes

1. Initialize a git repository for your project.

2. Add and commit your changes, then push them to the repository.

## TypeScript Development Setup

1. Install `ts-node-dev` for development:

   ```bash
   npm install --save-dev ts-node-dev
   ```

2. Create scripts for starting the app in development and production:

   ```json
   "start:dev": "tsnd --respawn ./src/app/server.ts",
   "start:prod": "node ./dist/app/server.js"
   ```

## Environment Variable for App Position

Create an environment variable to indicate the app's position:

```env
NODE_ENV=development
```

Adjust the value to "production" for the production environment.

```

```

## Video-5: Modular patter and MVC pattern.

Sure, let's break down the concepts of MVC (Model-View-Controller) and modular pattern in a simple way with examples:

### MVC Pattern:

**1. Model (Data):** Represents the application's data and business logic.

**2. View (User Interface):** Presents the data to the user and handles user input.

**3. Controller (Logic):** Manages the communication between the Model and View, handling user input and updating the Model.

#### Example Code:

Let's consider a simple example of a to-do list application.

**Model (`model.js`):**

```javascript
// model.js
class TodoModel {
  constructor() {
    this.todos = []
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  getTodos() {
    return this.todos
  }
}

module.exports = TodoModel
```

**View (`view.js`):**

```javascript
// view.js
class TodoView {
  displayTodos(todos) {
    todos.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo}`)
    })
  }
}

module.exports = TodoView
```

**Controller (`controller.js`):**

```javascript
// controller.js
class TodoController {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  addTodo(todo) {
    this.model.addTodo(todo)
    this.updateView()
  }

  updateView() {
    const todos = this.model.getTodos()
    this.view.displayTodos(todos)
  }
}

module.exports = TodoController
```

### Modular Pattern:

Modular pattern involves organizing code into independent, reusable modules.

#### Example Code:

**Module 1 (`module1.js`):**

```javascript
// module1.js
const greeting = 'Hello'

function sayHello(name) {
  console.log(`${greeting}, ${name}!`)
}

module.exports = { sayHello }
```

**Module 2 (`module2.js`):**

```javascript
// module2.js
function calculateSum(a, b) {
  return a + b
}

module.exports = { calculateSum }
```

**Main Program (`app.js`):**

```javascript
// app.js
const module1 = require('./module1')
const module2 = require('./module2')

module1.sayHello('John')
const result = module2.calculateSum(5, 3)
console.log(`Sum: ${result}`)
```

### Explanation:

- **MVC Pattern:** In the to-do list example, the `TodoModel` represents the data (Model), `TodoView` handles how the data is displayed (View), and `TodoController` manages the interaction between the Model and View.

- **Modular Pattern:** In the modular example, `module1` and `module2` are independent modules. Each module encapsulates its functionality, and the main program (`app.js`) can import and use these modules as needed.

By combining both patterns, you can create scalable and maintainable applications, where the MVC pattern helps structure the application's architecture, and the modular pattern enhances code organization and reusability.

using moudular patter.

create a folder `modules` in the `./src/app` path. In modules folder make a flder `student` in student make a file `student.interface.ts`

Make a interface for a student there.

```typescript
//Creating a interface for student .
import { Schema, model, connect } from 'mongoose'

type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  email: string
  avatar?: string
  contactNo: string
  emergencyContactNo: string
  BloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
}
```

## video-6: make a schema.

A schema is a blueprint or a structural representation that defines the organization, structure, and constraints of data in a database. It provides a formal description of how data is organized and the relationships between different entities or tables in a database

Create a file in the `modules` name `student.models.ts` and make a schema there following mongoose documnetaion.

```js
//Our schema would follow structure of interface we made earlier.
const userSchema =
  new Schema() <
  IUser >
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String,
  }
```

## Video-7:

Make multiple schema to make code readable. Refactor code.

For example:

```js
const userNameSchema =
  newSchema <
  T >
  {
    name: { type: String, required: true },
  }

const userSchema =
  new Schema() <
  IUser >
  {
    name: userNameSchema,
    email: { type: String, required: true },
    avatar: String,
  }
```

Create a model.

In Mongoose, a model is a representation of a MongoDB collection and provides an interface for interacting with the documents in that collection. It acts as a constructor function, allowing you to create, read, update, and delete documents in the MongoDB database.

```js
const Student = model < Student > ('Student', studentSchema)
```
