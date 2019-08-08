import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Article} from "./Article";
@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    password: number;

    @Column()
    qq: number;

    @Column()
    remark: number;

    @Column()
    company: number;

    // @OneToMany(type => Article, article => article.user)
    // articles: Article[];
}