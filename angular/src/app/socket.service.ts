import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket;
  socket_endpoint = 'http://localhost:3000';

  constructor() { }
  
  connectSocket(){
    this.socket = io(this.socket_endpoint);
  }
}
