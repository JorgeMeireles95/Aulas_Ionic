import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteButtonPage } from './componente-button.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteButtonPageRoutingModule {}
