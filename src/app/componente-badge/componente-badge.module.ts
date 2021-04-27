import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteBadgePageRoutingModule } from './componente-badge-routing.module';

import { ComponenteBadgePage } from './componente-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteBadgePageRoutingModule
  ],
  declarations: [ComponenteBadgePage]
})
export class ComponenteBadgePageModule {}
