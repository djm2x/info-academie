import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from 'src/app/models/models';
import { SessionService } from 'src/app/shared';
import Echo from 'laravel-echo';
import {PusherConnector} from 'laravel-echo/dist/connector';


import Pusher from 'pusher-js';
(window as any).Pusher = Pusher;

@Injectable({
  providedIn: 'root'
})
export class ChatHubService {
  newMessage = new Subject<Message>();
  // updateNotifFromChatComponent = new Subject <number>();
  // notificationReceived = new Subject<any>();

  private echo: Echo;

  constructor(@Inject('HUB_URL') protected hubUrl: string, private session: SessionService
    , @Inject('BASE_URL') protected baseUrl: string) { }


  public createConnection() {
    this.echo = new Echo({
      broadcaster: 'pusher',
      authEndpoint: `${this.baseUrl}/api/broadcasting/auth`,
      auth: {
        Accept: 'application/json',
        headers: { Authorization: `Bearer ${this.session.token}` }
      },
      key: '454c',
      wsHost: this.hubUrl.replace('https://', '').replace('http://', '').replace(':8000', ''),
      wsPort: 6001,
      forceTLS: false,
      encrypted: false,
      cluster: 'mt1',
      enabledTransports: ['ws'/*, 'wss'*/],
      disableStats: true,
    });

    // this.echo.connect();

    // console.warn(this.echo)

    return this;
  }

  public startConnection(): void {

    const connector: PusherConnector = this.echo.connector;
    // this.echo.private(`App.User.${this.session.user.id}`).listen('MessageEvent', r => {
    //   console.log(r);
    // });
    connector.connect();

    // connector.privateChannel(`private.${this.session.user.id}`).listen('MessageEvent', r => {
    //   console.warn('fanaly its works  echo.channel');
    // });

    connector.channel(`users.${this.session.user.id}`).listen('MessageEvent', r => {
      console.warn('fanaly its works  channel(`users');
    });

    // connector.presenceChannel(`private.${this.session.user.id}`).here( r => {
    //   console.warn('fanaly its works  echo.channel');
    // });

    // // console.warn(connector)

    // this.echo.listen(`private.${this.session.user.id}`, 'MessageEvent' , r => {
    //   console.warn('fanaly its works  echo.listen');
    // });

    // // this.echo.private(`private.${this.session.user.id}`).listen('MessageEvent', r => {
    // //   console.log(r);
    // // });

    // this.echo.channel(`private.${this.session.user.id}`).listen('MessageEvent', r => {
    //   console.warn('fanaly its works  echo.channel');
    // });

    this.echo.channel(`users.${this.session.user.id}`).listen('MessageEvent', r => {
      this.newMessage.next(r.message);
    });
  }

  public stopConnection() {
    this.echo.disconnect();
  }

}
