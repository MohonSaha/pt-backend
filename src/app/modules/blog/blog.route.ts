import express from 'express'
import { BlogControllers } from './blog.controller'

const router = express.Router()

router.post('/add-new-blog', BlogControllers.addBlog)

export const BlogRoutes = router
