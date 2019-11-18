import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { Article } from '../entity/Article'

export class ArticleController {
  private ArticleRepository = getRepository(Article)

  async save(request: Request, response: Response, next: NextFunction) {
    return this.ArticleRepository.save(request.body)
  }

  async find(request: Request, response: Response, next: NextFunction) {
    return this.ArticleRepository.find()
  }

  async findById (request: Request, response: Response, next: NextFunction) {
    return this.ArticleRepository.findOne(request.query)
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.ArticleRepository.findOne(request.params.id)
    await this.ArticleRepository.remove(userToRemove)

  }

  async update(request: Request, response: Response, next: NextFunction) {
    // let userToRemove = await this.ArticleRepository.findOne(request.params.id)
    // await this.ArticleRepository.update(request.body)
  }
}
