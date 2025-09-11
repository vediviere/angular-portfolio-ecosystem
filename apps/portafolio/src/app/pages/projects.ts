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
            *ngFor="let project of projects; let projectIndex = index"
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

            <!-- Phone Mockup con Scroll Funcional -->
            <div
              *ngIf="project.type === 'mobile' && project.screenshots"
              class="project-card__mobile"
            >
              <div
                class="phone-mockup"
                [class.has-scroll]="isLongScreenshot(projectIndex)"
              >
                <div class="phone-frame">
                  <div class="phone-notch"></div>
                  <div class="phone-screen">
                    <div
                      class="phone-screen-container"
                      [id]="'phone-container-' + projectIndex"
                    >
                      <img
                        [src]="getCurrentScreenshot(projectIndex)"
                        [alt]="getCurrentScreenLabel(projectIndex)"
                        class="phone-screenshot"
                        [ngClass]="getScreenshotClass(projectIndex)"
                        (load)="onImageLoad($event, projectIndex)"
                      />
                    </div>
                    <div class="phone-home-indicator"></div>
                  </div>
                </div>

                <div class="phone-controls">
                  <button
                    class="phone-control"
                    (click)="previousScreen(projectIndex)"
                    [disabled]="getCurrentIndex(projectIndex) === 0"
                  >
                    ◀
                  </button>

                  <div class="phone-indicator">
                    <div class="current-screen">
                      {{ getCurrentScreenLabel(projectIndex) }}
                    </div>

                    <div class="screen-dots">
                      <span
                        *ngFor="
                          let screenshot of project.screenshots;
                          let i = index
                        "
                        class="dot"
                        [class.dot--active]="
                          i === getCurrentIndex(projectIndex)
                        "
                        (click)="goToScreen(projectIndex, i)"
                      ></span>
                    </div>

                    <div class="screen-counter">
                      {{ getCurrentIndex(projectIndex) + 1 }} /
                      {{ project.screenshots.length }}
                    </div>
                  </div>

                  <button
                    class="phone-control"
                    (click)="nextScreen(projectIndex)"
                    [disabled]="
                      getCurrentIndex(projectIndex) ===
                      project.screenshots.length - 1
                    "
                  >
                    ▶
                  </button>
                </div>

                <div class="app-info">
                  <p class="app-tech">
                    <strong>{{ getAppTechLabel(project.id) }}</strong>
                  </p>
                </div>
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
  private currentScreenshots: { [projectIndex: number]: number } = {};
  private imageHeights: { [key: string]: number } = {}; // Almacenar alturas de imágenes

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
      demoUrl: 'https://vacuna-app-3510b.web.app?demo=true',
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
      storeLinks: {},
    },
    {
      id: 'joyeria-oro-mobile',
      title: 'VJoyeriapp - Ventas de Oro',
      description:
        'Aplicación móvil e-commerce especializada en joyería de oro con catálogo interactivo, carrito de compras, zoom de alta calidad en productos y sistema de favoritos.',
      tech: [
        'Flutter',
        'Dart',
        'Firebase',
        'Stripe Payment',
        'Image Optimization',
        'Push Notifications',
      ],
      type: 'mobile',
      screenshots: [
        'screenshots/oro (1).jpg',
        'screenshots/oro (2).jpg',
        'screenshots/oro (3).jpg',
        'screenshots/oro (4).jpg',
        'screenshots/oro (5).jpg',
        'screenshots/oro (6).jpg',
        'screenshots/oro (7).jpg',
        'screenshots/oro (8).jpg',
        'screenshots/oro (9).jpg',
        'screenshots/oro (10).jpg',
        'screenshots/oro (11).jpg',
      ],
      features: [
        'Catálogo de productos con filtros avanzados (precio, quilates, tipo)',
        'Zoom de alta calidad para inspeccionar detalles de las joyas',
        'Sistema de favoritos y listas de deseos',
        'Carrito de compras con cálculo de envío en tiempo real',
        'Integración con Stripe para pagos seguros',
        'Notificaciones de ofertas y nuevos productos',
        'Galería de imágenes 360° para anillos y aretes',
        'Sistema de reseñas y calificaciones de productos',
        'Calculadora de tallas para anillos',
        'Chat en vivo con asesores de venta',
      ],
      storeLinks: {},
    },
    {
      id: 'sistema-usuarios',
      title: 'Sistema de Registro de Usuarios',
      description:
        'Aplicación web para registro y gestión de nuevos usuarios con React y Firebase. Sistema enfocado únicamente en el proceso de alta de usuarios con validaciones completas.',
      tech: [
        'React',
        'Firebase Authentication',
        'Firestore',
        'JavaScript',
        'Firebase Hosting',
        'Validación de Formularios',
      ],
      type: 'web',
      demoUrl: 'https://sistemaregistrosusuarios.web.app',
      features: [
        'Formulario de registro con validaciones en tiempo real',
        'Verificación de email automática',
        'Validación de contraseñas seguras',
        'Almacenamiento de perfiles en Firestore',
        'Prevención de registros duplicados',
        'Interface responsiva optimizada',
        'Feedback visual de estado del registro',
        'Deploy en Firebase Hosting',
      ],
      isDemoMode: true,
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
      mobile: 'App Mobile',
      fullstack: 'Full Stack',
    };
    return labels[type as keyof typeof labels] || type;
  }

  getAppTechLabel(projectId: string): string {
    const techLabels = {
      'vacuna-mobile': 'React Native + Firebase + Push Notifications',
      'joyeria-oro-mobile': 'Flutter + Dart + Stripe + Firebase',
    };
    return (
      techLabels[projectId as keyof typeof techLabels] || 'Mobile Development'
    );
  }

  getCurrentIndex(projectIndex: number): number {
    return this.currentScreenshots[projectIndex] || 0;
  }

  getCurrentScreenshot(projectIndex: number): string {
    const project = this.projects[projectIndex];
    if (!project.screenshots) return '';
    const currentIndex = this.getCurrentIndex(projectIndex);
    return project.screenshots[currentIndex];
  }

  getCurrentScreenLabel(projectIndex: number): string {
    const project = this.projects[projectIndex];
    const currentIndex = this.getCurrentIndex(projectIndex);

    // Labels específicos por proyecto
    const screenLabels = {
      'vacuna-mobile': [
        'Dashboard Principal',
        'Lista de Vacunas',
        'Categorías de Vacunas',
        'Vacunas Aplicadas',
        'Gestión de Pacientes',
        'Perfil de Paciente',
      ],
      'joyeria-oro-mobile': [
        'Pantalla Principal',
        'Catálogo Anillos',
        'Detalle Producto',
        'Carrito Compras',
        'Lista Favoritos',
        'Perfil Usuario',
        'Categorías Oro',
        'Búsqueda Avanzada',
        'Historial Compras',
        'Configuraciones',
        'Ofertas Especiales',
      ],
    };

    const labels = screenLabels[project.id as keyof typeof screenLabels];
    return labels ? labels[currentIndex] : `Pantalla ${currentIndex + 1}`;
  }

  previousScreen(projectIndex: number): void {
    const currentIndex = this.getCurrentIndex(projectIndex);
    if (currentIndex > 0) {
      this.currentScreenshots[projectIndex] = currentIndex - 1;
    }
  }

  nextScreen(projectIndex: number): void {
    const project = this.projects[projectIndex];
    const currentIndex = this.getCurrentIndex(projectIndex);
    if (project.screenshots && currentIndex < project.screenshots.length - 1) {
      this.currentScreenshots[projectIndex] = currentIndex + 1;
    }
  }

  goToScreen(projectIndex: number, screenIndex: number): void {
    this.currentScreenshots[projectIndex] = screenIndex;

    // Scroll automático al top cuando cambia la imagen
    setTimeout(() => {
      this.scrollToTop(projectIndex);
    }, 100);
  }

  // Método para hacer scroll al inicio de la imagen
  private scrollToTop(projectIndex: number): void {
    const container = document.getElementById(
      `phone-container-${projectIndex}`
    ) as HTMLElement;

    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  // Detectar si la imagen es larga para aplicar clases especiales
  getScreenshotClass(projectIndex: number): string {
    // Por defecto, todas las imágenes mobile necesitan clase long para scroll
    return 'phone-screenshot--long';
  }

  // Detectar si el screenshot actual necesita scroll
  isLongScreenshot(projectIndex: number): boolean {
    // Todas las imágenes mobile tendrán controles de scroll disponibles
    return true;
  }

  // Manejar carga de imagen para detectar altura
  onImageLoad(event: Event, projectIndex: number): void {
    const img = event.target as HTMLImageElement;
    const project = this.projects[projectIndex];
    const currentIndex = this.getCurrentIndex(projectIndex);
    const imageKey = `${project.id}-${currentIndex}`;

    // Almacenar la altura real de la imagen
    this.imageHeights[imageKey] = img.naturalHeight;

    console.log(`Imagen cargada: ${imageKey}, altura: ${img.naturalHeight}px`); // Debug
  }

  // Métodos para scroll manual
  scrollDown(projectIndex: number): void {
    const container = document.getElementById(
      `phone-container-${projectIndex}`
    ) as HTMLElement;

    if (container) {
      container.scrollBy({
        top: 200, // Scroll fijo de 200px
        behavior: 'smooth',
      });
    }
  }

  scrollUp(projectIndex: number): void {
    const container = document.getElementById(
      `phone-container-${projectIndex}`
    ) as HTMLElement;

    if (container) {
      container.scrollBy({
        top: -200, // Scroll fijo de 200px hacia arriba
        behavior: 'smooth',
      });
    }
  }
}
