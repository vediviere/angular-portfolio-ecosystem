import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  type: 'web' | 'mobile' | 'fullstack';
  demoUrl?: string;
  credentials?: {
    user: string;
    pass: string;
  };
  screenshots?: string[];
  features: string[];
  storeLinks?: {
    playStore?: string;
    appStore?: string;
  };
  isDemoMode?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  template: `
    <section class="projects">
      <div class="projects__container">
        <header class="projects__header">
          <h1 class="projects__title">Mis Proyectos</h1>
          <p class="projects__subtitle">
            Sistemas reales en producción con usuarios activos
          </p>
        </header>

        <div class="projects__grid">
          <article
            *ngFor="let project of projects"
            class="project-card"
            [class.project-card--web]="project.type === 'web'"
            [class.project-card--mobile]="project.type === 'mobile'"
            [class.project-card--fullstack]="project.type === 'fullstack'"
          >
            <!-- Header del proyecto -->
            <header class="project-card__header">
              <h3 class="project-card__title">{{ project.title }}</h3>
              <span class="project-card__type">{{
                getTypeLabel(project.type)
              }}</span>
            </header>

            <!-- Descripción -->
            <p class="project-card__description">{{ project.description }}</p>

            <!-- Demo interactivo para web -->
            <div
              *ngIf="project.type === 'web' && project.demoUrl"
              class="project-card__demo"
            >
              <div class="demo-wrapper">
                <iframe
                  [src]="project.demoUrl"
                  class="demo-frame"
                  title="Demo de {{ project.title }}"
                >
                </iframe>
                <div class="demo-overlay" *ngIf="project.isDemoMode">
                  <span class="demo-badge">MODO DEMO - Datos temporales</span>
                  <div class="demo-credentials" *ngIf="project.credentials">
                    <p>
                      <strong>Usuario:</strong> {{ project.credentials.user }}
                    </p>
                    <p>
                      <strong>Contraseña:</strong>
                      {{ project.credentials.pass }}
                    </p>
                  </div>
                  <p class="demo-note">
                    Los datos se borran automáticamente. Sistema real en
                    producción.
                  </p>
                </div>
              </div>
            </div>

            <!-- Galería para móvil -->
            <div
              *ngIf="project.type === 'mobile' && project.screenshots"
              class="project-card__gallery"
            >
              <div class="mobile-gallery">
                <div class="mobile-frames">
                  <div
                    *ngFor="
                      let screenshot of project.screenshots;
                      let i = index
                    "
                    class="mobile-frame"
                    [attr.data-label]="getScreenshotLabel(i)"
                    [style.animation-delay.s]="i * 0.2"
                  >
                    <img
                      [src]="screenshot"
                      [alt]="project.title + ' screenshot ' + (i + 1)"
                      class="mobile-screenshot"
                    />
                  </div>
                </div>
                <p class="gallery-note">
                  Aplicación nativa Android desarrollada en React Native
                </p>
              </div>
            </div>

            <!-- Tecnologías -->
            <div class="project-card__tech">
              <span *ngFor="let tech of project.tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <!-- Características -->
            <ul class="project-card__features">
              <li *ngFor="let feature of project.features">{{ feature }}</li>
            </ul>

            <!-- Enlaces de tiendas (solo móvil) -->
            <div *ngIf="project.storeLinks" class="project-card__stores">
              <a
                *ngIf="project.storeLinks.playStore"
                [href]="project.storeLinks.playStore"
                target="_blank"
                class="store-link store-link--play"
              >
                📱 Google Play
              </a>
              <a
                *ngIf="project.storeLinks.appStore"
                [href]="project.storeLinks.appStore"
                target="_blank"
                class="store-link store-link--app"
              >
                📱 App Store
              </a>
              <div
                *ngIf="
                  !project.storeLinks.playStore && !project.storeLinks.appStore
                "
                class="store-note"
              >
                Aplicación en desarrollo / uso interno
              </div>
            </div>

            <!-- Botón de demo (web) -->
            <div
              *ngIf="project.type === 'web' && project.demoUrl"
              class="project-card__actions"
            >
              <a [href]="project.demoUrl" target="_blank" class="demo-button">
                Abrir Demo Completo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  projects: Project[] = [
    {
      id: 'vacuna-web',
      title: 'VacunaApp - Versión Web',
      description:
        'Sistema web completo para registro y seguimiento de vacunas con autenticación, base de datos en tiempo real y interface responsiva. Desarrollado en React con Firebase.',
      tech: [
        'React',
        'Firebase',
        'Authentication',
        'Firestore',
        'PWA',
        'Responsive Design',
      ],
      type: 'web',
      demoUrl: 'https://vacuna-app-3510b.web.app/login',
      credentials: {
        user: 'vediviere@gmail.com',
        pass: 'marco123',
      },
      features: [
        'Registro personalizado de vacunas por usuario',
        'Autenticación segura con Firebase Auth',
        'Base de datos Firestore en tiempo real',
        'Interface completamente responsiva',
        'PWA para instalación como app nativa',
        'Gestión de perfil de usuario',
        'Historial completo de vacunación',
      ],
      isDemoMode: true,
    },
    {
      id: 'vacuna-mobile',
      title: 'VacunaApp - Aplicación Android',
      description:
        'Aplicación nativa Android desarrollada en React Native para gestión personal de vacunas con notificaciones push, modo offline y sincronización automática.',
      tech: [
        'React Native',
        'Firebase',
        'Push Notifications',
        'AsyncStorage',
        'Android Native',
      ],
      type: 'mobile',
      screenshots: [
        'screenshots/mobile-dashboard.jpg',
        'screenshots/mobile-vacunas.jpg',
        'screenshots/mobile-vacunasCat.jpg',
        'screenshots/mobile-vacunasApli.jpg',
        'screenshots/mobile-pacientes.jpg',
        'screenshots/mobile-pacienteVer.jpg',
      ],
      features: [
        'Notificaciones push para recordatorios de vacunas',
        'Modo offline con sincronización automática',
        'Interface nativa Android optimizada',
        'Cámara integrada para fotografías de certificados',
        'Exportación de datos en PDF',
        'Widgets de pantalla de inicio',
        'Sincronización con versión web en tiempo real',
      ],
      storeLinks: {
        // Si está en Play Store agregar link aquí
        // playStore: 'https://play.google.com/store/apps/details?id=com.vacunaapp'
      },
    },
    {
      id: 'portfolio-ecosystem',
      title: 'Portfolio DevOps Ecosystem',
      description:
        'Monorepo Angular 20 con arquitectura de microservicios, testing automatizado TDD, CI/CD y deployment automático. El proyecto actual que estás viendo.',
      tech: [
        'Angular 20',
        'NX Monorepo',
        'TypeScript',
        'SCSS',
        'Jest',
        'GitHub Actions',
      ],
      type: 'fullstack',
      features: [
        'Arquitectura NX monorepo escalable',
        'Desarrollo TDD con Jest (100% coverage)',
        'CI/CD automatizado con GitHub Actions',
        'Componentes standalone Angular 20',
        'SCSS modular con variables y mixins',
        'Responsive design mobile-first',
        'SEO optimizado con SSR',
      ],
    },
  ];

  getTypeLabel(type: string): string {
    const labels = {
      web: 'Aplicación Web',
      mobile: 'App Android',
      fullstack: 'Full Stack',
    };
    return labels[type as keyof typeof labels] || type;
  }

  getScreenshotLabel(index: number): string {
    const labels = [
      'Dashboard',
      'Vacunas',
      'Categorías',
      'Aplicadas',
      'Pacientes',
      'Perfil',
    ];
    return labels[index] || `Pantalla ${index + 1}`;
  }
}
