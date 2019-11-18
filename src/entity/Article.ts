import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm'
import { Folder } from './folder'
import { User } from './User'

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  title: string

  @Column({ nullable: true })
  subhead: string

  @Column({ nullable: true })
  keyword: string

  @Column({ nullable: true })
  author: string
 
  @Column({ nullable: true, type:'text' })
  content: string

  @CreateDateColumn()
  createTime: Date

  @UpdateDateColumn()
  modifyTime: Date

  @Column({ nullable: true })
  dirName: string

  // @ManyToOne(type => Folder, folder => folder.articles)
  // folder: Folder

  // @ManyToOne(type => User, user => user.articles)
  // user: User
}
