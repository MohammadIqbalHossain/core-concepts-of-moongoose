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

Video-9: route, Controller, service.

Now, trying make a post using model and interface.

first create a `student.route.ts` file in `./src/app/modules/student` import express and create route. Thes routes body is the controller. Make another file `student.controller.ts` and take data from req parameter. and make another file `student.services.ts` create function there that take a parameter whose data type is 'Student' and the function inserts data to mongodb and return the result.

now controller will take the result and sent it to the client. student calls the services function to send data.

video-10: Create a student using mongoose.

first connect routes to `app.ts` in `app.use('path', yourRoutes)` and make a fake data. give them as raw json data. when using postman make an object in object to send json data and destructure the object in contoller file. it'll give response new json data.

connect URI to mongoDB compass to see our data in compass.

Video-11:

Get all student using find method in services files. and get a single using id as params. Do it as video-9 and 10.

### Advance mongoDb CRUD operations with validation. Module-9.

video-1: Types of validatio in Mongoose.

1. Built-in validation.
2. Custom validation.
3. Validation with third-party libaries. (zod, validator, joi).

# Build-in validation:

let's fix some schema data validation error first.

our enum validation wasn't correct we've to tell what type data is first then then do other validation.

here is a fix:

```js
 gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  // Fix everything.
```

Then need to fix another problem is, when we're sending a data without firatName as it's a required property it's gives an error. but when we're sending wihtout whole name field it's doesn't gives an error. but those fields are required. okay take look at those types data.

```js
localGuardian: localGuardianSchema
```

Change it to this..

```js
localGuardian: {
  type: localGuradianSchema,
  required: true,
}
```

Give a custom error message when some data is null or mispelled.

```js
 name: {
    type: userNameSchema,
    required: [true, 'User name is required'],
  },
```

with enum values.

```js
 gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'others'],
      message:
        '{VALUE} is not valid. The value should be "male" or "female" or "others"',
    },
    required: true,
  },
```

Make a field uniquie. with `unique: true` validation and make a field default with `default:true` validation.

Video-2:

Using custom built-in validator.

max, min, trim.

Sending errors to the client site. It's same as sendig data to client side.

```js
 catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong.',
      error: err,
    })
```

Make a custom validatin function to check if firname is capitalized.

```js
   validate: {
      validator: function (value: string) {
        return (
          value === value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        )
      },
      message: 'First name must be capitalize.',
    },
  },
```

video-3:

using validate and joi validator package for validation.

Video-4:

Using joi package to validate data.

### Mission-3: Be a noSQl backend brianic.

## Module-11: Building PH university management system.

I've to add video-1-5's description here.

Video-6:

Determining api's endpoints for our projects.
How API's will look like. And make a folder in moduels file named `users` add an `interface` file for users. and after that make `model` file for in users moduels folder, also make `services` and `controllers` files for users.

Make and interface for `TUSer` accoriding to user determined in the ER Diagram and requiremnts analysis.

Video-7:
Make a model and schema for user, and make zod validation for user.

Video-8: Refactor user interface, student route, controller, and services.

Now, we'll create a student using users routes. We've to take all the users creation in a single moduels, to do so, we'll take student create contoller, which is creating in the student controller folder, take it to the user controller folder and also take create creation service functon from the student services foder to user services.

Video-9: Refactor user controller and services.

make newUser type and add `user` `_id` `role` `generated id` while creating a student.

I've to watch it again. it's not enough.

video-10: Create user as student.

I've to watch it again I didn't undeerstood it.

Video-11: Fix bugs and setup basic global error handler.

Change password hasing making response pass wrod empthy middleware. Now, we are not using password in the student it took to in user so take password hasing middleware for user.

Making a global error handler function for all the methods in controller to make our code clean and readable.

Video-12: Create not found and send response utlities.

Make not found route to handle unrecognized API's request, make a not found middleware and sed a json data.

Handle sucess response data more readably and make code dry. first make a middleware for all the success message send all data and res and status code there by calling the middleware, use the middleware for all succes message response.

Video-13: Create index route and module summury.

Creatinga route folder wher you've to take all the application routes to amek `app.js` file clear. and import that folder route here in app.js

`app.js` application route would look like this.

```js
//Application routes.
app.use('/api/v1', router)
```

in the route folder making a loop over all routes and and enpoints routes which we're importing from route `module.route file`

`index.js` file in route folder would look-like this:

```js
import { Router } from 'express'
import { studentRoutes } from '../modules/student/student.route'
import { userRoutes } from '../modules/users/users.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
```

## Module-12: Building PH university management system (Part-2).

### Video-1: Avoid try/catch use a catchAsync(a hingher order function.)

When we're making controller we're using to much try and catch and it's make code repetation, to handle this we can use a hinger order funciton. that recives the code as a parameter and highre order function calls a the function in a promise if it doesn't resolves then err is passed to global error hander from a single place.

This is the higher order function:

```js
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err))
  }
}
```

Calling it when making controller:

```js
//Controller for retreiving all students from database.
const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await studentServices.getStudentsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students retrived from database successfully.',
    data: result,
  })
})
```

No need to use try catch.

Here `RequestHandler` is a fucntion type from express. It's uses not to repeate re,res, next parameter type.

### Video-2: Implement a data validation middleware.

We're using zod validation in the controller. But it's not clener and safer way to validate data. To make it safer and cleaner we can ues a middle in the user route level bedore accesing controller. If data is auhenticated user can add data to db, if it's not we've to send it to global error handler by next function.

### Video-3: Implement a validation request middleware.

Implementina a validation request middleware when creating a student. in the route and make it reusable for other route also here is how to make the middleware.

```js
import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      })

      return next()
    } catch (err) {
      next(err)
    }
  }
}

export default validateRequest

```

Implementing it in the route.

```js
routes.post(
  '/create-student',
  validateRequest(studentValidation),
  usersController.createStudent,
)
```

### Video-4: Create an academic semester interface.

Creating an acdemic semester interface and schema for acdemic semester.

### Video-5: Create an academic semester Model.

Creating and refactoring academic semester model and interface to align them into same data structure.

### Video-6: Create an academic semester route, controller.

Creatinga an acdemic semester controller and route file and appropiate code to it.

### Video-7: Create an academic semester service.

Create an academic semester service file and create an academic semester data into DB. The system is almost same only catchAsync function (Higher order fucntion ) and validation is different. We're validating data by using an middleware.

### Video-8: Handle academic semester logical validation.

When crating academic semester we've to check two scenarion. We can't make same semester twice in same year. It's not possible in real-life scenarion. So, we've to check academic semester name is inserting in the same year.

To do so, we can use a middleware in the schem layer. find if the name and year is entered twice in the DB.

```js
academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await academicSemester.findOne({
    year: this.year,
    name: this.name,
  })

  if (isSemesterExists) {
    throw new Error(`Academic semester is already exists!`)
  }
  next()
})
```

But, we can enter the invalid code into, this is not giving me error. actually accoroding to our model. our code has to be like authm - 01, summar -02 fal -03, Without handling this we can mismatch them.

We have check if the data is adding with a false code.

first make mapper to check name and code.

```js
//Type for checking name and code is matched when making academic semester.
export type TNameCodeMapper = {
  [key: string]: string
}

//Mapper for checking if name and code is matched when making academic semester.
export const NameCodeMapper: TNameCodeMapper = {
  Autmn: '01',
  Summar: '02',
  Fall: '03',
}

 if (NameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error('Invalid semester code!')
  }
```

### Video-9: Add admission semester into student interface model and semester.

First, Create GET, PATCH(updata), GET (Single) methods for academic semester.

We've to add a reference id it the student to indentify in what semester the student is admitted.

add an `academicSemester` field in the student interface, model and validation file.

Make function in the user services file for dynamically crating studentId for every new student.

### Video-10: Generate Student id when first time a student is admitted.

in users services we're creating a student and a user when making user we have to add a user id. In this function we're creating a student id based on admission semester, admission semester id is referenced with studend data. We're getting the semester data with reference semester id and in semester data there is code, year with that we're making a incremented 4 digit number. and adding it as an user id to database.

```js

import { TAcademicSemester } from '../academicSemester/academicSemester.interface'

export const generateStudentId = (payLoad: TAcademicSemester | null) => {
  const currentId = (0).toString()
  const incrementId = Number(currentId + 1)
    .toString()
    .padStart(4, '0')

  const studentId = `${payLoad?.year}${payLoad?.code}${incrementId}`
  return studentId
}
```

### Video-11: generating an incremented id for last student.

Findding out last student id from users and adding one to the last 4 digit when creating a new student.

```js
const findLastUserID = async () => {
  const lastUserId = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUserId?.id ? lastUserId?.id.subString(6) : undefined
}


const generateStudentID = async (payLoad: TAcademicSemester | null) => {
   //2030020001

  const currentId = await findLastUserId() || (0).toString()
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0')

  incrementId = `${payLoad?.year}${payLoad?.code}${incrementId}`
  return incrementId
}
```

# Module-12: Building PH-University part-3.

### Video-1: Intro and last module bug fixing.

When we're generating an id based on last student's roll number, there is a little bug. It's always adds 1 to it. no matter what is the year and is the semester code. we should add 1 when semester code is not new compared to last one and year is not new compared to last one.

That means whenever a semester code or a year is changes, Id must start from 0. because we're admitting student in another semester or another year.

For fixing this problem. findout last student year and semester code. write an if else block to reassign currentId.

Here how it's should be done:

```js

const findLastUserID = async () => {
  const lastUserId = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUserId?.id ? lastUserId?.id : undefined
}

export const generateStudentId = async (payLoad: TAcademicSemester | null) => {
  const lastStudentID = await findLastUserID()
  const lastStudentSemesterCode = lastStudentID?.substring(4, 6)
  const lastStudentYear = lastStudentID?.substring(0, 4)

  const currentYear = payLoad?.year
  const currentSemesterCode = payLoad?.code

  let currentId = (0).toString()

  if (
    lastStudentID &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentID?.substring(6)
  }

  //2030020001

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0')

  incrementId = `${payLoad?.year}${payLoad?.code}${incrementId}`
  return incrementId
}
```

### Video-2: Create a academic faculty interface, model and validation.

In `modules` file We've to create a academic semester faculty interface with just a name academic faculty contains only name that is requred and a string.

By following this interface we've to create a schema and a model for academic semester faculy.

### Video-3: Creating an interface, model, and service for factulties.

Create interface, mode, and service for, post, get, single get, and update.

### Video-4: Testing APIs.

Testing all APIs created bedore! and making an environment varibale for Postman to keep local URL in a single place so that we don't need to write the url evry time we create a request.

### Video-5: Create academic departments.

Crete academic departments interface, model, validation and sevice.

### Video-6: Testing and creating controllers.

Teste academic deparments using Postman and complete creating controllers and route.

### Video-7: Handle department validation with when creating and updating documents.

Adding a middleware to check if the depertment is alreay exists on the database, Sometimes unique doesn't work. It's not a proper validation. Adding another layer of validation with indexing. find the name with find method in databse if it's exists throw and error.

```ts
academicDepartmentSchema.pre('save', async function (next) {
  const isDepertmentExists = await AcademicDepartment.findOne({
    name: this.name,
  })

  if (isDepertmentExists) {
    throw new Error('This depertment is already exists.')
  }
  next()
})
```

Adding another middleware to check if the \_id is already deleted or it's actually exists on the databse. If it's not exists there throw an error.

```ts
academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery()

  const isDepertmentExists = await AcademicDepartment.findOne(query)

  if (!isDepertmentExists) {
    throw new Error('Depertment does not exists!')
  }
  next()
})
```

### Video-8: Populate referencing field and Impplement AppError class.

Populate reference field to know excat reference data in response.

```js
const getStudentsFromDB = async () => {
  const result = await Student.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
  //These are nesterd populte methods.
  return result
}
```

Extends Error class to give excact error in response.

```js

class AppError extends Error {
  public statusCode: number

  constructor(statusCode: number, message: string, stack = '') {
    super(message)
    this.statusCode = statusCode

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export default AppError
```

use the class:

```js
academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await academicSemester.findOne({
    year: this.year,
    name: this.name,
  })

  if (isSemesterExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `Academic semester is already exists!`,
    )
  }
  next()
})
```

### Video-9: Creating student and user with transation and roll-back.

```js
// Step-1: start session
const session = await mongoose.startSession()

//Step-2: Take the whole creation in try/catch block

try {
  session.startTransaction()

  //set a generated id.
  userData.id = await generateStudentId(admissionSemester)

  //step-3: Create user with transaction session. Note that data has to be in the [array]. after implement session.
  const newUser = await User.create([userData], { session })

  //Step-4: Check if newUser is crated. If isn't give an error.
  if (!newUser.length) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create the user.')
  }

  //step-5 Set userId and generated id to the payload.
  payLoad.id = newUser[0].id
  payLoad.user = newUser[0]._id //reference user id

  //step-6: Create the new student with session transaction.
  const newStudent = await Student.create([payLoad], { session })

  //step-7: check and give an error if the newStudent isn't created.
  if (!newStudent.length) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create the student.')
  }
  //Step-8: If everything is okay commit everything.
  await session.commitTransaction()
  //Step-9: End the session.
  await session.endSession()

  return newStudent
} catch (err) {
  //step-10: If something goes wrong aborot the session
  await session.abortTransaction()
  //step:-11: End the session.
  await session.endSession()
}
```

### Video-10: Delete student and user with transation and roll-back.

Everything is same just when updating in Model field shouln't be in the [array]. that's it.

### Video-11: Creating path method to update student.

Creat controller, service, zod validation and route to update student.

### Video-12: Dynamically updating student primitive and non-primitve data.

```js
const updateStudentIntoDB = async (id: string, payLoad: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...reminingStudentData } = payLoad

  const modifiedStudentData: Record<string, unknown> = {}

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedStudentData[`name.${key}`] = value
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedStudentData[`guardian.${key}`] = value
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedStudentData[`localGuardian.${key}`] = value
    }
  }

  const result = await Student.findOneAndUpdate({ id }, modifiedStudentData, {
    new: true,
    runValidators: true,
  })
  return result
}
```

# Module-14: Building University management system Part-4.

### Video-1: Different types of errors:

1. Operational Errors.
2. Programmatical erros.
3. Unhandled rejections.
4. Uncaught exception.

### Video-2: Different types of errors:

Make a errorSources for maintain a same pattern for all types of erros, Coverting zod error to our created patter, first we need to check the error is a subcalss of zoderror. and understanding differnt types of error and different files like model, services, zod and other things will give us diffrent pattern types of erros. We have to convert it to a common pattern to give response to the frontend.

```js
  //Making a error souces to covert the errors.
  type TErrorSource = {
    path: string | number
    message: string
  }[]

  let errorSoources: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ]

  //Checking if the err is subclass of zoderror.
    if (err instanceof ZodError) {
    statusCode = 400
    message = 'This is zod error.'
  }
```

### Video-3: Coverting zodError to our deafult error format:

first check if the error is an zoderror, then send it to the zod error handler, map on the error properties get path and message from the zodError and return error statusCode, message and path to globalErrorHandler Then overwrite defult valus with incoming values from ZodErrorHandler.

### Video-4: Coverting Mongoose to our deafult error format:

This is also same we've to just think about what is the format is given by default we've to change it to our format. Tht's it!

### Video-5: Coverting Mongoose to our deafult error format:

Handling `casteError` for a invialid id with the same way. and handling the mongoDB duplicate entity with the same way. It's not neccesary if we did it with a middleware, But it's a good habit to handle everything layer by layer. This way our code is isolated!

### Video-6: Coverting Mongoose to our deafult error format:

Handling `AppError` and `Error` class to show error in our format. 

Hadling uncaught exception and uncaughtPromiseRejection:

```js
process.on('UnhandledPromiseRejection', () => {
  console.log('🔥 Unhandled Rejection is detected, Shutting down...')

  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () => {
  console.log('🔥 uncaughtException is detected, Shutting down...')
  process.exit(1)
})
```

### Video-7: Coverting Mongoose to our deafult error format:
