import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm'
import { Article } from './Article'

@Entity()
export class Folder {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  dirname: string

  @CreateDateColumn()
  createTime: Date

  @UpdateDateColumn()
  modifyTime: Date

  // @OneToMany(type => Article, article => article.folder)
  // articles: Article[]
}
