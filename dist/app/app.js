"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const student_route_1 = require("./modules/student/student.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Application routes.
app.use('/api/v1/students', student_route_1.studentRoutes);
// app.get('/', (req: Request, res: Response) => {
//   const a = 10
//   res.sendStatus(200).send(a)
// })
console.log(process.cwd());
exports.default = app;
