import { Routes } from '@angular/router';
import { AiChatComponent } from './components/ai-chat/ai-chat';
import { NotFound } from './components/not-found/not-found';
import { Unaauthorized } from './components/unaauthorized/unaauthorized';
import { ProjectSearch } from './project-search/project-search';

export const routes: Routes = [
  { path: 'ai-assistant', component: AiChatComponent },
  { path: '', redirectTo: 'ai-assistant', pathMatch: 'full' },
  {path:'students',component:ProjectSearch},
  {path:'unauthorized',component:Unaauthorized},
  { path: '**',component:NotFound}
];
