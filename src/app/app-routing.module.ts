import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { NotesComponent } from './notes/notes.component';
import { LiveClassComponent } from './live-class/live-class.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'timeline', component : TimelineComponent},
  { path: 'liveclass', component : LiveClassComponent},
  { path: 'notes', component : NotesComponent},
  { path: '',   redirectTo: '/timeline', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
