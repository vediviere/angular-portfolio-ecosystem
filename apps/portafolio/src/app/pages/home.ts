import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../components/hero';

@Component({
  selector: 'app-home',
  imports: [Hero],
  template: '<app-hero></app-hero>',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
