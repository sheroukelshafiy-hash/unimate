import { Routes } from '@angular/router';
import { AiChatComponent } from './components/ai-chat/ai-chat';

export const routes: Routes = [
  { path: '', redirectTo: 'ai-assistant', pathMatch: 'full' },
  { path: 'ai-assistant', component: AiChatComponent },
  { path: '**', redirectTo: 'ai-assistant' }
];