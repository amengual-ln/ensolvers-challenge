import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

import { Folder } from './folder.entity';

@Injectable()
export class FolderService {
    constructor(
        @InjectRepository(Folder)
        private repo: Repository<Folder>,
    ) { }

    createFolder(todo: Folder): Promise<Folder> {
        return this.repo.save(todo);
    }

    findAll(): Promise<Folder[]> {
        return this.repo.find();
    }

    findOne(id: number): Promise<Folder> {
        return this.repo.findOne(id);
    }

    updateOne(id: number, values: Object): Promise<UpdateResult> {
        return this.repo.update(id, values)
    }

    removeOne(id: number): Promise<DeleteResult> {
        return this.repo.delete(id);
    }
}