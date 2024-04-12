import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
ChatService

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  public message: string = '';
  public messages: any = [];
  public currentuser:any = '';
  public moderador:string = '';
 
  constructor(private chatservice:  ChatService){

  }
  ngOnInit(): void {
    this.currentuser = localStorage.getItem('user');
    this.listMessage();
  }

  public sendMessage(){
    this.chatservice.sendMessage(this.currentuser+": "+this.message);
    this.messages.push(this.currentuser+": "+this.message);
    this.message = '';
  }
  public listMessage(){
    this.chatservice.listMessage().subscribe((data:any) => {
      console.log(data);
      this.messages.push(data.data);
    })
  }
}
