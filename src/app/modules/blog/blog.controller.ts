import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BlogServices } from './blog.service'

const addBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.addBlogIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'blog added successfully',
    data: result,
  })
})

export const BlogControllers = {
  addBlog,
}
