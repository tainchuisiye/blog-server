import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { Folder } from '../entity/Folder'

export class FolderController {
  private FolderRepository = getRepository(Folder)

  async save(request: Request, response: Response, next: NextFunction) {
    return this.FolderRepository.save(request.body)
  }

  async find(request: Request, response: Response, next: NextFunction) {
    return this.FolderRepository.find()
  }

  async findByID(request: Request, response: Response, next: NextFunction) {
    return this.FolderRepository.find()
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.FolderRepository.findOne(request.params.id)
    await this.FolderRepository.remove(userToRemove)

  }

  async update(request: Request, response: Response, next: NextFunction) {
    // let userToRemove = await this.ArticleRepository.findOne(request.params.id)
    // await this.ArticleRepository.update(request.body)
  }
}
