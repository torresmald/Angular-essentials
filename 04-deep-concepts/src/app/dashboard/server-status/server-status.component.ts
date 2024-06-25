import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  public currentStatus: 'online' | 'offline' | 'uknown' = 'online';
  private interval?: NodeJS.Timeout

  ngOnInit(): void {
    this.interval = setInterval(() =>{
      const random = Math.random()
      if(random < 0.5){
        this.currentStatus = 'online'
      } else if(random < 0.9){
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'uknown'
      }
    }, 5000)
  }

  ngOnDestroy(): void {    
    clearInterval(this.interval)
    
  }
}
