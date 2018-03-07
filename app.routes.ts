import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyntaxComponent } from './subpages/syntax/syntax.component';
import { AspNetMvcComponent } from './subpages/aspnetmvc/aspnetmvc.component';
import { HowLearnComponent } from './subpages/howlearn/howlearn.component';

export const routes: Routes = [
    { path: 'syntax', component: SyntaxComponent },
    { path: 'aspnetmvc', component: AspNetMvcComponent}, 
    { path: 'howlearn', component: HowLearnComponent }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);