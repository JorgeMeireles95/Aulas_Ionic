import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteButtonPageRoutingModule } from './componente-button-routing.module';

import { ComponenteButtonPage } from './componente-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteButtonPageRoutingModule
  ],
  declarations: [ComponenteButtonPage]
})
export class ComponenteButtonPageModule {}
