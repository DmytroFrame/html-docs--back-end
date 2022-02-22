import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HtmlTagsModule } from './html-tags/html-tags.module';

@Module({
  imports: [
    HtmlTagsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'front-end/build'),
      exclude: ['/api*'],
    })
  ],
})
export class AppModule {}
