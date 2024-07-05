import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProjectServices } from './project.service'

const addProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.addProjectIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  })
})

export const ProjectControllers = {
  addProject,
}
