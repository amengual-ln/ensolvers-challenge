import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Todo } from '../todo/todo.entity'

@Entity()
export class Folder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column({ default: false })
    done: boolean;

    @OneToMany(() => Todo, todo => todo.folder)
    todos: Todo[];
}