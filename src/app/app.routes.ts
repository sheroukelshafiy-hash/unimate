import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { Profile } from './components/auth/profile/profile';
import { Landing } from './components/auth/landing/landing';
import { AiChatComponent } from './components/ai-chat/ai-chat';
import { ForgotPassword } from './components/auth/forgot-password/forgot-password';


export const routes: Routes = [
  { path: '', component: Landing },
  {path: 'landing', component: Landing},
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'profile', component: Profile },
  { path: 'ai-assistant', component: AiChatComponent },
  { path: '**', redirectTo: 'ai-assistant' }
];