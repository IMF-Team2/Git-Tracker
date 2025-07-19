import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { project, projectSchema } from './project.model';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: project.name, schema: projectSchema }]),
  ],

  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectsModule {}
