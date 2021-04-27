import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteDatatimePage } from './componente-datatime.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteDatatimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteDatatimePageRoutingModule {}
