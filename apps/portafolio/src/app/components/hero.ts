import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  template: `
    <!-- Puertas Francesas Realistas -->
    <div class="door-overlay">
      <!-- Puerta Izquierda -->
      <div class="door-panel door-panel--left">
        <div class="corner-ornament--top-left"></div>
        <div class="corner-ornament--top-right"></div>
        <div class="corner-ornament--bottom-left"></div>
        <div class="corner-ornament--bottom-right"></div>

        <!-- Paneles de cristal -->
        <div class="glass-panel glass-panel--top"></div>
        <div class="glass-panel glass-panel--bottom"></div>

        <!-- Manija elegante -->
        <div class="french-door-handle french-door-handle--left"></div>

        <!-- Bisagras -->
        <div class="french-door-hinge french-door-hinge--top"></div>
        <div class="french-door-hinge french-door-hinge--bottom"></div>
      </div>

      <!-- Puerta Derecha -->
      <div class="door-panel door-panel--right">
        <div class="glass-panel glass-panel--top"></div>
        <div class="glass-panel glass-panel--bottom"></div>
        <div class="french-door-handle french-door-handle--right"></div>
        <div class="french-door-hinge french-door-hinge--top"></div>
        <div class="french-door-hinge french-door-hinge--bottom"></div>
      </div>

      <!-- Efectos de iluminación -->
      <div class="warm-light"></div>
      <div class="light-ray light-ray--1"></div>
      <div class="light-ray light-ray--2"></div>
      <div class="light-ray light-ray--3"></div>
    </div>

    <section class="hero">
      <div class="hero__background">
        <div class="art-deco-pattern"></div>
        <div class="metal-frame metal-frame--top"></div>
        <div class="metal-frame metal-frame--bottom"></div>
        <div class="vertical-lines"></div>

        <!-- HUMO ORGÁNICO CSS -->
        <div class="organic-smoke-container">
          <!-- Múltiples capas de humo -->
          <div class="smoke-blob smoke-blob--1"></div>
          <div class="smoke-blob smoke-blob--2"></div>
          <div class="smoke-blob smoke-blob--3"></div>
          <div class="smoke-blob smoke-blob--4"></div>
          <div class="smoke-blob smoke-blob--5"></div>
          <div class="smoke-blob smoke-blob--6"></div>
          <div class="smoke-blob smoke-blob--7"></div>
          <div class="smoke-blob smoke-blob--8"></div>
          <div class="smoke-blob smoke-blob--9"></div>
          <div class="smoke-blob smoke-blob--10"></div>
          <div class="smoke-blob smoke-blob--11"></div>
          <div class="smoke-blob smoke-blob--12"></div>
          <div class="smoke-blob smoke-blob--13"></div>
          <div class="smoke-blob smoke-blob--14"></div>
          <div class="smoke-blob smoke-blob--15"></div>
          <div class="smoke-blob smoke-blob--16"></div>
          <div class="smoke-blob smoke-blob--17"></div>
          <div class="smoke-blob smoke-blob--18"></div>
          <div class="smoke-blob smoke-blob--19"></div>
          <div class="smoke-blob smoke-blob--20"></div>
        </div>
      </div>

      <div class="hero__container">
        <div class="hero__content">
          <div class="hero__main">
            <div class="speakeasy-header">
              <div class="establishment-info">
                <span class="establishment-name">PORTFOLIO</span>
                <span class="establishment-year">EST. 2024</span>
              </div>
              <div class="ornament-divider">
                <div class="ornament-line"></div>
                <div class="ornament-diamond"></div>
                <div class="ornament-line"></div>
              </div>
            </div>

            <h1 class="hero__name">
              <span class="name-title">DON</span>
              <span class="name-first">MARCO</span>
              <span class="name-last">VEDIVIERE</span>
            </h1>

            <div class="hero__title">
              <div class="title-ornament title-ornament--left"></div>
              <span class="title-text">MASTER OF CODE</span>
              <div class="title-ornament title-ornament--right"></div>
            </div>

            <div class="hero__subtitle">
              Full Stack Developer especializado en arquitecturas enterprise,
              React Native y ecosistemas DevOps de alta disponibilidad.
            </div>

            <div class="credentials-section">
              <div class="credential-item">
                <div class="credential-icon">⚡</div>
                <span class="credential-text">5+ Proyectos Enterprise</span>
              </div>
              <div class="credential-item">
                <div class="credential-icon">🎯</div>
                <span class="credential-text">100% Testing Coverage</span>
              </div>
              <div class="credential-item">
                <div class="credential-icon">🏆</div>
                <span class="credential-text">Clean Architecture Advocate</span>
              </div>
            </div>

            <div class="hero__actions">
              <button class="btn btn--gold" (click)="scrollToProjects()">
                <span class="btn-text">EXPLORE PORTFOLIO</span>
                <div class="btn-ornament"></div>
              </button>
              <button class="btn btn--outline" (click)="openContact()">
                <span class="btn-text">MAKE CONTACT</span>
              </button>
            </div>
          </div>

          <div class="hero__sidebar">
            <div class="technology-showcase">
              <div class="showcase-header">
                <h3 class="showcase-title">ARSENAL TECNOLÓGICO</h3>
                <div class="showcase-border"></div>
              </div>

              <div class="tech-carousel">
                <div class="carousel-track">
                  <div class="tech-card tech-card--primary">
                    <div class="tech-emblem">
                      <span class="tech-symbol">A</span>
                    </div>
                    <div class="tech-details">
                      <h4 class="tech-name">ANGULAR 20</h4>
                      <p class="tech-desc">Enterprise Framework</p>
                    </div>
                  </div>

                  <div class="tech-card">
                    <div class="tech-emblem">
                      <span class="tech-symbol">RN</span>
                    </div>
                    <div class="tech-details">
                      <h4 class="tech-name">REACT NATIVE</h4>
                      <p class="tech-desc">Mobile Solutions</p>
                    </div>
                  </div>

                  <div class="tech-card">
                    <div class="tech-emblem">
                      <span class="tech-symbol">DO</span>
                    </div>
                    <div class="tech-details">
                      <h4 class="tech-name">DEVOPS</h4>
                      <p class="tech-desc">Cloud Architecture</p>
                    </div>
                  </div>

                  <div class="tech-card">
                    <div class="tech-emblem">
                      <span class="tech-symbol">TS</span>
                    </div>
                    <div class="tech-details">
                      <h4 class="tech-name">TYPESCRIPT</h4>
                      <p class="tech-desc">Type Safety</p>
                    </div>
                  </div>

                  <div class="tech-card">
                    <div class="tech-emblem">
                      <span class="tech-symbol">NX</span>
                    </div>
                    <div class="tech-details">
                      <h4 class="tech-name">NX MONOREPO</h4>
                      <p class="tech-desc">Enterprise Tooling</p>
                    </div>
                  </div>

                  <div class="tech-card">
                    <div class="tech-emblem">
                      <span class="tech-symbol">AW</span>
                    </div>
                    <div class="tech-details">
                      <h4 class="tech-name">AWS CLOUD</h4>
                      <p class="tech-desc">Infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="reputation-seal">
                <div class="seal-inner">
                  <div class="seal-text">CERTIFIED</div>
                  <div class="seal-subtext">DEVELOPER</div>
                </div>
              </div>
            </div>

            <div class="quote-section">
              <div class="quote-marks">"</div>
              <p class="quote-text">
                La excelencia en código no es un acto, sino un hábito que se
                forja en cada línea escrita.
              </p>
              <div class="quote-attribution">
                <div class="attribution-line"></div>
                <span class="attribution-text">Marco Vediviere</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.scss',
})
export class Hero {
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
}
