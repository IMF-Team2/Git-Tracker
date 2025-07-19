import { Injectable } from '@nestjs/common';
import { project, projectDocument } from './project.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(project.name) private projectModel: Model<projectDocument>,
  ) {}
  async create(data: Partial<project>) {
    const created = new this.projectModel(data);
    return created.save();
  }
}
