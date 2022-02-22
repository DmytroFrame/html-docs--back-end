import { Module } from '@nestjs/common';
import { HtmlTagsService } from './html-tags.service';
import { HtmlTagsController } from './html-tags.controller';

@Module({
  controllers: [HtmlTagsController],
  providers: [HtmlTagsService]
})
export class HtmlTagsModule {}
