import express, { Application, Request, Response } from 'express'
const app:Application = express()
// const app =express()
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.route'
// const port =process.env.PORT || 3000

//parsers
app.use(express.json())
app.use(cors())

// application routes
// /api/v1/students/create-student
app.use('/api/v1/students',StudentRoutes)

const getAController =  (req: Request, res: Response) => {
  res.send('Hello World!')
}
app.get('/',getAController)
export default app;
// console.log(process.cwd());

// C:\Users\sumi\Desktop\Level-2\First_Project/.env
