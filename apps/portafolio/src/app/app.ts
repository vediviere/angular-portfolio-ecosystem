import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './components/header';
import { Hero } from './components/hero';

@Component({
  imports: [RouterModule, Hero, Header],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portafolio';
}
