import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from 'src/app/models/models';
import { SessionService } from 'src/app/shared';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
(window as any).Pusher = Pusher;

@Injectable({
  providedIn: 'root'
})
export class ChatHubService {
  messageReceived = new Subject<Message>();
  updateNotifFromChatComponent = new Subject <number>();
  notificationReceived = new Subject<any>();

  private hubConnection: Echo;

  constructor(@Inject('HUB_URL') protected url: string, private session: SessionService) { }


  public createConnection() {

    this.hubConnection = new Echo({
      broadcaster: 'pusher',
      authEndpoint : `http://${this.url}:8000/api/accounts/broadcasting`,
      auth: {
        headers: { Authorization: `Bearer ${this.session.token}` }
      },
      key: '454c',
      wsHost: this.url,
      wsPort: 6001,
      forceTLS: false,
      // cluster: 'mt1',
      enabledTransports: ['ws', 'wss'],
      disableStats: true,
    });

    return this;
  }

  public startConnection(): void {
    this.hubConnection.private(`App.User.${this.session.user.id}`).notification( r => {
      console.log(r);
    });
    this.hubConnection.channel('myhub2').listen('MessageEvent', r => {
      console.log(r);
      console.log('Hub connection started');

    //   this.hubConnection.on('receiveMessage', res => this.messageReceived.next(res));

    //   this.hubConnection.on('notification', res => this.notificationReceived.next(res));

    //   this.hubConnection.on('innerException', res => {
    //     console.warn('##################################################################');
    //     console.warn(res);
    //     console.warn('##################################################################');
    //   });
    });
    // this.hubConnection.start().then(async (r) => {
    //   console.log('Hub connection started');

    //   this.hubConnection.on('receiveMessage', res => this.messageReceived.next(res));

    //   this.hubConnection.on('notification', res => this.notificationReceived.next(res));

    //   this.hubConnection.on('innerException', res => {
    //     console.warn('##################################################################');
    //     console.warn(res);
    //     console.warn('##################################################################');
    //   });

    // }).catch(e => {
    //   console.warn('Error while establishing connection signalr : ', e);
    // });
  }

  public stopConnection() {
    this.hubConnection.disconnect();
  }

}
