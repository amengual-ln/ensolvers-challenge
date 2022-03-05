import {
    Controller,
    Post,
    Body,
    HttpStatus,
    Get,
    Res,
    Param,
    Delete,
    Put,
} from '@nestjs/common';

import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly TodoService: TodoService) { }

    @Post()
    async createTodo(@Res() response, @Body() todo: Todo) {
        const newTodo = await this.TodoService.createTodo(todo);
        return response.status(HttpStatus.CREATED).json({
            newTodo,
        });
    }

    @Get()
    async fetchAll(@Res() response) {
        const todo = await this.TodoService.findAll();
        return response.status(HttpStatus.OK).json({
            todo,
        });
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const todo = await this.TodoService.findOne(id);
        return response.status(HttpStatus.OK).json({
            todo,
        });
    }

    @Put('/:id')
    async updateTodo(@Res() response, @Param('id') id, @Body() values) {
        const updateResult = await this.TodoService.updateOne(id, values);
        return response.status(HttpStatus.OK).json({
            updateResult,
        });
    }

    @Delete('/:id')
    async removeById(@Res() response, @Param('id') id) {
        const deleteResult = await this.TodoService.removeOne(id);
        return response.status(HttpStatus.OK).json({
            deleteResult,
        });
    }
}