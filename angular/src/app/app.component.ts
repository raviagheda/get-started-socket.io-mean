import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  constructor( private socketService: SocketService ){}

  ngOnInit(){
    this.socketService.connectSocket();
  }
}
