import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  targetDate: string = '';
  private timerInterval: any;
  imagePath = 'assets/images/yasin.JPG';

  ngOnInit() {
    const augustFirst = new Date(new Date().getFullYear(), 7, 9); // 7 is August (0-indexed)
    this.targetDate = augustFirst.toISOString().split('T')[0];
    this.startTimer();

    setInterval(() => {
      const drop = document.createElement('div');
      drop.className = 'yasin-drop';
      
      drop.style.left = Math.random() * window.innerWidth + 'px';
      
      drop.style.animationDuration = Math.random() * 2 + 1 + 's';
      
      document.body.appendChild(drop);
      
      setTimeout(() => {
        drop.remove();
      }, parseFloat(drop.style.animationDuration) * 1000);
    }, 200);
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    document.querySelectorAll('.yasin-drop').forEach(drop => drop.remove());
  }

  startTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(this.targetDate).getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(this.timerInterval);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }

  onDateChange() {
    this.startTimer();
  }
}
