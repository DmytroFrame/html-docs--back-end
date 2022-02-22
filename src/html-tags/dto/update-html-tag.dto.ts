import { PartialType } from '@nestjs/mapped-types';
import { CreateHtmlTagDto } from './create-html-tag.dto';

export class UpdateHtmlTagDto extends PartialType(CreateHtmlTagDto) {}
