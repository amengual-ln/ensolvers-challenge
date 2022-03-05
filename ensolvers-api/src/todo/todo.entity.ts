import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Folder } from '../folder/folder.entity'

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column({ default: false })
    done: boolean;

    @ManyToOne(() => Folder, folder => folder.todos)
    folder: Folder;
}