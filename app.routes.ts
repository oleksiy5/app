import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyntaxComponent } from './subpages/syntax/syntax.component';
import { FirstStepsComponent} from './subpages/firststeps/firststeps.component';
import { AspNetMvcComponent } from './subpages/aspnetmvc/aspnetmvc.component';
import { HowLearnComponent } from './subpages/howlearn/howlearn.component';
import { ContactComponent } from './subpages/contact/contact.component';
import { OrderComponent } from './subpages/orderExercise/order.component';
import { TermsComponent } from './subpages/termsuse/terms.component';
import { HighPerformComponent } from './subpages/highperform/highperform.component';
import { OrderHPComponent } from './subpages/highperform/orderHP/orderHP.component';

export const routes: Routes = [
    { path: 'syntax', component: SyntaxComponent },
    {path: 'firststeps',  component: FirstStepsComponent },
    { path: 'aspnetmvc', component: AspNetMvcComponent}, 
    { path: 'howlearn', component: HowLearnComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'order', component:  OrderComponent },
    { path: 'terms', component: TermsComponent },
    { path: '#', component: HowLearnComponent },
    { path: '', component: HowLearnComponent },
    { path: 'highperform', component: HighPerformComponent },
    { path: 'orderhp', component: OrderHPComponent },
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);