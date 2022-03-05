import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private repo: Repository<Todo>,
    ) { }

    createTodo(todo: Todo): Promise<Todo> {
        return this.repo.save(todo);
    }

    findAll(): Promise<Todo[]> {
        return this.repo.find();
    }

    findOne(id: number): Promise<Todo> {
        return this.repo.findOne(id);
    }

    updateOne(id: number, values: Object): Promise<UpdateResult> {
        return this.repo.update(id, values)
    }

    removeOne(id: number): Promise<DeleteResult> {
        return this.repo.delete(id);
    }
}