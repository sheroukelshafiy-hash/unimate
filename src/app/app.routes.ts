import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { Profile } from './components/auth/profile/profile';
import { Landing } from './components/auth/landing/landing';
import { AiChatComponent } from './components/ai-chat/ai-chat';
import { ForgotPassword } from './components/auth/forgot-password/forgot-password';
import { Unaauthorized } from './components/unaauthorized/unaauthorized';
import { ProjectSearch } from './project-search/project-search';
import { NotFound } from './components/not-found/not-found';


export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'landing', component: Landing },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'profile', component: Profile },
  { path: 'ai-assistant', component: AiChatComponent },
  { path: '', redirectTo: 'ai-assistant', pathMatch: 'full' },
  { path: 'students', component: ProjectSearch },
  { path: 'unauthorized', component: Unaauthorized },
  { path: '**', component: NotFound }
];
