import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable()
export class MessagesService {
  messageChangedEvent = new EventEmitter<Message[]>();

messages: Message[] = [];

  constructor() {
    this.messages = MOCKMESSAGES;
  }
  getMessages() :Message[]{
    return this.messages.slice();
  } ;

  addMessage(message: Message) {
    this.messages.push(message);
    this.messageChangedEvent.emit(this.messages.slice());
  }

  getMessage(id:string ):Message {
    for( let message of this.messages){
      if (message.id == id){
        return message;
      }//end if
    }//end for
    return null;
  }
}
