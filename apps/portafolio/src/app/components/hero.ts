import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.hero--visible]': 'isVisible',
  },
})
export class Hero implements AfterViewInit {
  // 📋 Propiedades del componente
  title: string = 'Desarrollador Full Stack';
  subtitle: string =
    'Creando experiencias digitales increíbles con Angular y tecnologías modernas';
  ctaText: string = 'Ver mis proyectos';
  isVisible: boolean = false;

  // ⚡ Métodos del componente
  onCTAClick(): void {
    console.log('CTA clicked!');
    // TODO: Implementar navegación a proyectos
  }

  ngAfterViewInit(): void {
    // Activar animación después del renderizado
    this.isVisible = true;
  }
}
