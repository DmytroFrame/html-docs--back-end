import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HtmlTagsService } from './html-tags.service';
import { CreateHtmlTagDto } from './dto/create-html-tag.dto';
import { UpdateHtmlTagDto } from './dto/update-html-tag.dto';

@Controller('html-tags')
export class HtmlTagsController {
  constructor(private readonly htmlTagsService: HtmlTagsService) {}

  @Post()
  create(@Body() createHtmlTagDto: CreateHtmlTagDto) {
    return this.htmlTagsService.create(createHtmlTagDto);
  }

  @Get()
  findAll() {
    return this.htmlTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.htmlTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHtmlTagDto: UpdateHtmlTagDto) {
    return this.htmlTagsService.update(+id, updateHtmlTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.htmlTagsService.remove(+id);
  }
}
