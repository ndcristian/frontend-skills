import { Component, OnInit } from '@angular/core';
import { WsService } from '../ws.service';

@Component({
  selector: 'app-ws',
  templateUrl: './ws.component.html',
  styleUrls: ['./ws.component.scss'],
})
export class WsComponent implements OnInit {
  constructor(private websocketService: WsService) {}

  ngOnInit(): void {
    this.websocketService.subscribe('/topic/context', (payload: any): any => {
      this.checkWebsocket(payload);
    });
  }
  checkWebsocket(message: any) {
    console.log('Websocket message ON....', JSON.parse(message));
  }
}
