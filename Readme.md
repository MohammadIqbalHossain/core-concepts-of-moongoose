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
   import dotenv from "dotenv";
   import path from "path";

   dotenv.config({ path: path.join(process.cwd(), ".env") });
   ```

8. **Create `app.ts` file:**
   Inside the `src` folder, create an `app.ts` file and copy the starter template from Express documentation.

9. **Create `server.ts` file:**
   Inside the `src` folder, create a `server.ts` file and add the following code:

   ```typescript
   // src/server.ts
   import app from "./app";
   import mongoose from "mongoose";

   async function main() {
     await mongoose.connect(process.env.DATABASE_URL);
   }

   app.listen(process.env.PORT, () => {
     console.log(`Example app listening on port ${process.env.PORT}`);
   });
   ```

Now, you have a well-organized project structure with necessary configurations. Update the code according to your project requirements.

Video-3: setup typescript eslint.

Read this docs: to setup eslint to your code. https://blog.logrocket.com/linting-typescript-eslint-prettier/
