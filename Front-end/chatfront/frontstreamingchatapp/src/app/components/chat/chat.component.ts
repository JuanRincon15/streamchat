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
  public user:string = '';
  public messengers:any =[];
  public messages: any = [];
  public currentuser:any = '';
  public moderador:any = '';
 
  constructor(private chatservice:  ChatService){

  }
  ngOnInit(): void {
    this.currentuser = localStorage.getItem('user');
    this.moderador =localStorage.getItem('rol')
    this.listMessage();
  }

  public sendMessage(){
    this.chatservice.sendMessage(this.currentuser+":"+this.message+':'+this.moderador);
    this.messages.push({user:"tu",message:this.message,rol:this.moderador});
    this.message = '';
  }
  public listMessage(){
    this.chatservice.listMessage().subscribe((data:any) => {
      console.log(data);
      //this.moderador = data.mensajero;
      this.messages.push({user:data.mensajero,message:data.data,rol:data.rol});
    })
  }
}
