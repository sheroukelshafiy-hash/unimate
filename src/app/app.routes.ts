import { Routes } from "@angular/router";
import { Login } from "./components/auth/login/login";
import { Register } from "./components/auth/register/register";
import { Landing } from "./components/auth/landing/landing";
import { Unaauthorized } from "./components/unaauthorized/unaauthorized";
import { AiChatComponent } from "./components/ai-chat/ai-chat";
import { ProjectSearch } from "./project-search/project-search";
import { Dashboard } from "./components/dashboard/dashboard";
import { Knowledge } from "./components/knowledge/knowledge";
import { Posts } from "./components/posts/posts";
import { Projects } from "./components/projects/projects";
import { Users } from "./components/users/users";
import { authGuard } from "./guards/auth-guard";
import { ForgotPassword } from "./components/auth/forgot-password/forgot-password";
import { NotFound } from "./components/not-found/not-found";
import { Profile } from "./components/auth/profile/profile";
export const routes:Routes=[
  {path:'',redirectTo:'landing',pathMatch:'full'},
  {path:'login',component:Login},
  {path:'register',component:Register},
  {path:'forgot-password',component:ForgotPassword},
  {path:'landing',component:Landing},
  {path:'unauthorized',component:Unaauthorized},
  {path:'ai-chat',component:AiChatComponent},
  {path:'profile',component:Profile},
  {path:'search',component:ProjectSearch},
  {path:'dashboard',component:Dashboard,canActivate:[authGuard]},
  {path:'knowledge',component:Knowledge,canActivate:[authGuard]},
  {path:'posts',component:Posts,canActivate:[authGuard]},
  {path:'projects',component:Projects,canActivate:[authGuard]},
  {path:'users',component:Users,canActivate:[authGuard]},
  {path:'**',component:NotFound}
]
