import express from 'express'
import { ProjectControllers } from './project.controller'

const router = express.Router()

router.post('/add-new-project', ProjectControllers.addProject)

export const ProjectRoutes = router
