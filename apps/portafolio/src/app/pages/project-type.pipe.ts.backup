import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../pages/projects';

type ProjectType = Project['type'];

@Pipe({
  name: 'projectTypeLabel',
  standalone: true,
})
export class ProjectTypePipe implements PipeTransform {
  private readonly labels: Record<ProjectType, string> = {
    web: 'Aplicación Web',
    mobile: 'App Android',
    fullstack: 'Full Stack',
  };

  transform(value: ProjectType | string): string {
    return this.labels[value as ProjectType] || value;
  }
}