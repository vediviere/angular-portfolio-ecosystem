import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero{
  // Propiedades del Mini Rolodex
  currentProject = 0;

  projects = [
    {
      name: 'VacunaApp Web',
      type: 'web',
      url: 'https://vacuna-app-3510b.web.app/?demo=true',
    },
    { name: 'VacunaApp Mobile', type: 'mobile' },
    { name: 'Joyería Gold', type: 'mobile' },
    {
      name: 'Sistema de Usuarios',
      type: 'web',
      url: 'https://sistemaregistrosusuarios.web.app/',
    },
    { name: 'Portfolio DevOps', type: 'fullstack' },
  ];

  // Métodos del Mini Rolodex
  nextProject(): void {
    this.currentProject = (this.currentProject + 1) % this.projects.length;
  }

  prevProject(): void {
    this.currentProject =
      this.currentProject === 0
        ? this.projects.length - 1
        : this.currentProject - 1;
  }

  goToProject(index: number): void {
    this.currentProject = index;
    const project = this.projects[index];

    if (project.url) {
      window.open(project.url, '_blank');
    } else {
      console.log(`${project.name} - Demo no disponible`);
    }
  }

  // Métodos originales del Hero
  scrollToProjects(): void {
    const projectsSection = document.querySelector('.projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  openContact(): void {
    console.log('Abrir formulario de contacto');
  }

  getProjectType(type: string): string {
    const types = {
      web: 'WEB APP',
      mobile: 'MOBILE APP',
      fullstack: 'FULL STACK',
    };
    return types[type as keyof typeof types] || type.toUpperCase();
  }

  isFlipping = false;

  /* Auto-rotate properties
  private autoRotateInterval: any;
  isPaused = false;*/

  flipToPrevious(): void {
    this.isFlipping = true;
    setTimeout(() => {
      this.prevProject();
      this.isFlipping = false;
    }, 200);
  }

  flipToNext(): void {
    this.isFlipping = true;
    setTimeout(() => {
      this.nextProject();
      this.isFlipping = false;
    }, 200);
  }

  /*
  ngOnInit(): void {
    this.startAutoRotate();
  }

  ngOnDestroy(): void {
    this.stopAutoRotate();
  }

  startAutoRotate(): void {
    this.autoRotateInterval = setInterval(() => {
      if (!this.isPaused) {
        this.flipToNext();
      }
    }, 4000);
  }

  stopAutoRotate(): void {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  pauseAutoRotate(): void {
    this.isPaused = true;
  }

  resumeAutoRotate(): void {
    this.isPaused = false;
  }*/
}
