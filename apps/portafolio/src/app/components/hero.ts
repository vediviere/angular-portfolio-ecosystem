import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule], // ← AGREGAMOS Router aquí
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  // Inyectar Router
  constructor(private router: Router) {}

  // Propiedades del Mini Rolodex
  currentProject = 0;
  showBulletHole = false;

  projects = [
    {
      name: 'VacunaApp Web',
      type: 'web',
      url: 'https://vacuna-app-3510b.web.app/?demo=true',
      description:
        'Plataforma web para gestión de vacunación con dashboard administrativo y panel de control de citas.',
      stack: ['Angular', 'Firebase', 'Material Design'],
      year: '2023',
      status: 'Producción',
    },
    {
      name: 'VacunaApp Mobile',
      type: 'mobile',
      description:
        'Aplicación móvil para registro y seguimiento de esquemas de vacunación con notificaciones push.',
      stack: ['React Native', 'Firebase', 'Expo'],
      year: '2023',
      status: 'Producción',
    },
    {
      name: 'Joyería Gold',
      type: 'mobile',
      description:
        'App de catálogo digital para joyería con carrito de compras y sistema de apartados.',
      stack: ['React Native', 'Node.js', 'MongoDB'],
      year: '2022',
      status: 'Producción',
    },
    {
      name: 'Sistema de Usuarios',
      type: 'web',
      url: 'https://sistemaregistrosusuarios.web.app/',
      description:
        'Sistema CRUD completo de gestión de usuarios con autenticación y roles administrativos.',
      stack: ['Angular', 'Firebase', 'Tailwind CSS'],
      year: '2024',
      status: 'Producción',
    },
    {
      name: 'Portfolio DevOps',
      type: 'fullstack',
      description:
        'Portfolio personal con integración CI/CD, despliegue automatizado y monitoreo de infraestructura.',
      stack: ['Angular', 'Azure DevOps', 'Docker', 'NX'],
      year: '2025',
      status: 'En desarrollo',
    },
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
    const audio = new Audio('sounds/card-flip.mp3');
    audio.volume = 0.5;

    // Activar animación de disparo
    this.isShootingAnimation = true;

    // Cuando el audio carga, calcular cuándo mostrar el agujero
    audio.addEventListener('loadedmetadata', () => {
      const duration = audio.duration * 1000;
      const showHoleAt = duration - 700;

      // Mostrar agujero justo antes de terminar
      setTimeout(() => {
        this.showBulletHole = true;
      }, showHoleAt);
    });

    // Esperar a que termine el audio
    audio.addEventListener('ended', () => {
      this.isShootingAnimation = false;

      // Esperar un poco más con el agujero visible
      setTimeout(() => {
        this.showBulletHole = false;

        // Abrir URL
        if (project.url) {
          window.open(project.url, '_blank');
        } else {
          console.log(`${project.name} - Demo no disponible`);
        }
      }, 500);
    });

    audio.play().catch((error) => {
      console.error('Error reproduciendo audio:', error);
      this.isShootingAnimation = false;
      if (project.url) {
        window.open(project.url, '_blank');
      }
    });
  }

  // Navegación a páginas
  navigateToAbout(): void {
    this.router.navigate(['/about']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contacto']);
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
