import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './ENcomponents/main-page/main-page.component';
import { WorksPageComponent } from './ENcomponents/works-page/works-page.component';
import { AboutPageComponent } from './ENcomponents/about-page/about-page.component';
import { ContactPageComponent } from './ENcomponents/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'works', component: WorksPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'contact', component: ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
