import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PlaygroundsComponent } from './components/playgrounds/playgrounds.component';

const routes: Routes = [
  { path:"" , component:LayoutComponent,children:[
    { path:"home" , component:HomeComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
    { path:"list" , component:PlaygroundsComponent},
  ]},
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
