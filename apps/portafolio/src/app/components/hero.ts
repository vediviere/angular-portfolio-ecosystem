import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
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

  // Audio y animación
  isShootingAnimation = false;
  isFlipping = false;

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

    // Reproducir sonido
    try {
      const audio = new Audio('sounds/card-flip.mp3');
      audio.volume = 0.5;
      audio.load();
      audio.play().catch((error) => {
        console.error('Error reproduciendo audio:', error);
      });
    } catch (error) {
      console.error('Error creando audio:', error);
    }

    // Activar animación de disparo
    this.isShootingAnimation = true;
    setTimeout(() => {
      this.isShootingAnimation = false;
    }, 300);

    // Abrir URL después de la animación
    setTimeout(() => {
      if (project.url) {
        window.open(project.url, '_blank');
      } else {
        console.log(`${project.name} - Demo no disponible`);
      }
    }, 300);
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
}
