import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
