import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteBadgePage } from './componente-badge.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteBadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteBadgePageRoutingModule {}
