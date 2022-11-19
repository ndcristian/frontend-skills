import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client'

@Injectable({
  providedIn: 'root'
})
export class WsService {

  socket = new SockJS('http://localhost:8080/socket');
  stompClient = Stomp.over(this.socket);

  subscribe(topic: string, callback: any): void {
    const connected: boolean = this.stompClient.connected;

    if (connected) {
      this.subscribeToTopic(topic, callback);
      return;
    }

    this.stompClient.connect({}, () => {
      this.subscribeToTopic(topic, callback);
    });
  }

  private subscribeToTopic(topic: string, callback: any): void {
    this.stompClient.subscribe(topic, (message) => {
      callback(message.body);
    });
  }
}
