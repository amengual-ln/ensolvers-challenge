import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column({ default: false })
    done: boolean;
}