import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';
map
Socket

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket:Socket) { }

  public sendMessage(message:string){
      this.socket.emit('message',message)
  }
  public listMessage(){
      return this.socket.fromEvent('received').pipe(map((data)=>data));
  }
}
