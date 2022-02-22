import { Injectable } from '@nestjs/common';
import { CreateHtmlTagDto } from './dto/create-html-tag.dto';
import { UpdateHtmlTagDto } from './dto/update-html-tag.dto';

@Injectable()
export class HtmlTagsService {
  create(createHtmlTagDto: CreateHtmlTagDto) {
    return 'This action adds a new htmlTag';
  }

  findAll() {
    return `This action returns all htmlTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} htmlTag`;
  }

  update(id: number, updateHtmlTagDto: UpdateHtmlTagDto) {
    return `This action updates a #${id} htmlTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} htmlTag`;
  }
}
