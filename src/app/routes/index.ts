import { Router } from 'express'
import { CourseRoutes } from '../modules/course/course.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { ProjectRoutes } from '../modules/project/project.route'
import { BlogRoutes } from '../modules/blog/blog.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/',
    route: CourseRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
]

// router.use('/', CourseRoutes)  => Aboid this code repeatation and use loop
moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
