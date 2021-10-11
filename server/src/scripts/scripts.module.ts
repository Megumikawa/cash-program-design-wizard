import { TagEntity } from './../tags/tag.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramEntity } from '../programs/program.entity';
import { QuestionEntity } from './../questions/question.entity';
import { SectionEntity } from './../sections/section.entity';
import { UserModule } from './../users/user.module';
import { ScriptsController } from './scripts.controller';
import SeedDemoProgram from './seed-program-demo';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProgramEntity,
      TagEntity,
      SectionEntity,
      QuestionEntity,
    ]),
    UserModule,
  ],
  providers: [SeedDemoProgram],
  controllers: [ScriptsController],
})
export class ScriptsModule {}

export interface InterfaceScript {
  run(): Promise<void>;
}
