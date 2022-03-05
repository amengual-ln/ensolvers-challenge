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

import { Folder } from './folder.entity';
import { FolderService } from './folder.service';

@Controller('folder')
export class FolderController {
    constructor(private readonly FolderService: FolderService) { }

    @Post()
    async createFolder(@Res() response, @Body() folder: Folder) {
        const newFolder = await this.FolderService.createFolder(folder);
        return response.status(HttpStatus.CREATED).json({
            newFolder,
        });
    }

    @Get()
    async fetchAll(@Res() response) {
        const folder = await this.FolderService.findAll();
        return response.status(HttpStatus.OK).json({
            folder,
        });
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const folder = await this.FolderService.findOne(id);
        return response.status(HttpStatus.OK).json({
            folder,
        });
    }

    @Put('/:id')
    async updateFolder(@Res() response, @Param('id') id, @Body() values) {
        const updateResult = await this.FolderService.updateOne(id, values);
        return response.status(HttpStatus.OK).json({
            updateResult,
        });
    }

    @Delete('/:id')
    async removeById(@Res() response, @Param('id') id) {
        const deleteResult = await this.FolderService.removeOne(id);
        return response.status(HttpStatus.OK).json({
            deleteResult,
        });
    }
}