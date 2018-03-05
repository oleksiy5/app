import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyntaxComponent } from './subpages/syntax/syntax.component';
import { AspNetMvcComponent } from './subpages/aspnetmvc/aspnetmvc.component';
//import { AspNetMvcComponent } from './subpages/aspnetmvc/aspnetmvc.component';

export const routes: Routes = [
    { path: 'syntax', component: SyntaxComponent },
    { path: 'aspnetmvc', component: AspNetMvcComponent}
  //  { path: 'aspnetmvc', component: AspNetMvcComponent }
  ];

  // Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);