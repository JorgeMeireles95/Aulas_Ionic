import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteDatatimePageRoutingModule } from './componente-datatime-routing.module';

import { ComponenteDatatimePage } from './componente-datatime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteDatatimePageRoutingModule
  ],
  declarations: [ComponenteDatatimePage]
})
export class ComponenteDatatimePageModule {}
