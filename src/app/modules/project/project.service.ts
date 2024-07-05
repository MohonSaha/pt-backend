import { IProject } from './project.interface'
import { Project } from './project.model'

const addProjectIntoDB = async (payload: IProject) => {
  const result = await Project.create(payload)
  return result
}

export const ProjectServices = {
  addProjectIntoDB,
}
