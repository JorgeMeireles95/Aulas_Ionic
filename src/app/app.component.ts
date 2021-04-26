import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home ', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Layout', url: '/layout', icon: 'paper-plane' },
    { title: 'Instalação', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Componente', url: '/folder/Archived', icon: 'archive' },
    //  anulada ->   { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    //   anulada ->  { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // anulada ->  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
