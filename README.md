# socket.io-mean
Guide: How to work with Socket.io + Mean Stack

## socket.io

### in express app
```
npm install socket.io
```

in `/bin/www`

```javascript

var io = require('socket.io')(server);
require('../socket/base')(io);
```

### in angular

```
npm install socket.io-client
```

in `app.component.ts`

```typescript
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

```
Create angular service using  `ng g s socket`

in `app/socket.service.ts`
```typescript

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


```
