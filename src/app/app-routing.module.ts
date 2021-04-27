import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then( m => m.LayoutPageModule)
  },
  {
    path: 'layout-header-footer',
    loadChildren: () => import('./layout-header-footer/layout-header-footer.module').then( m => m.LayoutHeaderFooterPageModule)
  },
  {
    path: 'layout-menu',
    loadChildren: () => import('./layout-menu/layout-menu.module').then( m => m.LayoutMenuPageModule)
  },
  {
    path: 'layout-tabs',
    loadChildren: () => import('./layout-tabs/layout-tabs.module').then( m => m.LayoutTabsPageModule)
  },
  {
    path: 'componente-badge',
    loadChildren: () => import('./componente-badge/componente-badge.module').then( m => m.ComponenteBadgePageModule)
  },
  {
    path: 'componente-button',
    loadChildren: () => import('./componente-button/componente-button.module').then( m => m.ComponenteButtonPageModule)
  },
  {
    path: 'componente-card',
    loadChildren: () => import('./componente-card/componente-card.module').then( m => m.ComponenteCardPageModule)
  },
  {
    path: 'componente-fab',
    loadChildren: () => import('./componente-fab/componente-fab.module').then( m => m.ComponenteFabPageModule)
  },
  {
    path: 'componente-input',
    loadChildren: () => import('./componente-input/componente-input.module').then( m => m.ComponenteInputPageModule)
  },
  {
    path: 'componente-datatime',
    loadChildren: () => import('./componente-datatime/componente-datatime.module').then( m => m.ComponenteDatatimePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
