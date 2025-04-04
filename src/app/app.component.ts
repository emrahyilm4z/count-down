import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'count-down';
}
