import { Component, OnInit } from '@angular/core';


import{NavController } from '@ionic/angular';// faz a navegão do botao header e footer




@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(private navCtrl: NavController) { } //classe privada  do layout page


  ngOnInit() {
  }


abrirPagina(nomeDaPagina: string){
  this.navCtrl.navigateForward(nomeDaPagina);



}
}
