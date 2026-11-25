import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Home } from './core/home/home';
import { Footer } from './core/footer/footer';
import { ConferenceList } from './core/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projet1');
}
