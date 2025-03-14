import { Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { redirectToIfAuth } from '@dataclouder/app-auth';
import { RouteNames } from './core/enums';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent),
        canActivate: [redirectToIfAuth('page/home')],
      },
      {
        path: 'privacy-policy',
        loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
      },
      {
        path: 'terms',
        loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent),
      },
      {
        path: 'intro',
        loadComponent: () => import('./intro/intro.page').then(m => m.IntroPage),
      },
    ],
  },

  {
    path: 'auth',
    children: [
      {
        path: '',
        redirectTo: RouteNames.Signup,
        pathMatch: 'full',
      },
      {
        path: RouteNames.Signin,
        loadComponent: () => import('./login/login.page').then(m => m.LoginComponent),
        canActivate: [redirectToIfAuth('page/home')],
      },

      {
        path: RouteNames.Signup,
        loadComponent: () => import('./login/signup.component').then(m => m.AppSignupComponent),
        canActivate: [redirectToIfAuth('page/home')],
      },
    ],
  },

  {
    path: 'page/stack',
    canActivate: [AuthGuardService],

    loadComponent: () => import('./ionic-layout/stack-ionic/stack-ionic.component').then(m => m.StackIonicComponent),
    children: [
      {
        path: 'conversation-form',
        loadComponent: () => import('./pages/agents/conversation-form/conversation-form.page').then(m => m.ConversationFormPage),
      },
      {
        path: 'conversation-form/:id',
        loadComponent: () => import('./pages/agents/conversation-form/conversation-form.page').then(m => m.ConversationFormPage),
      },

      {
        path: 'chat',
        loadComponent: () => import('./pages/agents/conversation-card-chat/conversation-card-chat.component').then(m => m.ConversationCardChatComponent),
      },
      {
        path: 'chat/:id',
        loadComponent: () => import('./pages/agents/conversation-card-chat/conversation-card-chat.component').then(m => m.ConversationCardChatComponent),
      },

      {
        path: 'conversation-details',
        loadComponent: () => import('./pages/agents/conversation-details/conversation-details.component').then(m => m.ConversationDetailsPage),
      },

      {
        path: 'conversation-details/:id',
        loadComponent: () => import('./pages/agents/conversation-details/conversation-details.component').then(m => m.ConversationDetailsPage),
      },

      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
      },
    ],
  },

  {
    path: 'page',
    canActivate: [AuthGuardService],
    loadComponent: () => import('./ionic-layout/ionic-layout.component').then(m => m.IonicLayoutComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'tasks',
        loadComponent: () => import('./pages/tasks/tasks.page').then(m => m.TasksPage),
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/tasks/task-list/task-list.component').then(m => m.TaskListComponent),
          },
          {
            path: 'jobs',
            loadComponent: () => import('./pages/tasks/jobs/job-list.component').then(m => m.JobListComponent),
          },
          {
            path: 'jobs/:id',
            loadComponent: () => import('./pages/tasks/jobs/job-list.component').then(m => m.JobListComponent),
          },
          {
            path: 'edit',
            loadComponent: () => import('./pages/tasks/task-form/task-form.component').then(m => m.TaskFormComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () => import('./pages/tasks/task-form/task-form.component').then(m => m.TaskFormComponent),
          },
        ],
      },
      {
        path: 'explore',
        loadComponent: () => import('./pages/explore/explore.page').then(m => m.ExplorePage),
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/explore/lesson-list/lesson-list.component').then(m => m.LessonListComponent),
          },
          {
            path: 'list',
            loadComponent: () => import('./pages/explore/lesson-list/lesson-list.component').then(m => m.LessonListComponent),
          },
          {
            path: 'edit',
            loadComponent: () => import('./pages/explore/explore-edit/explore-edit.component').then(m => m.ExploreEditComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () => import('./pages/explore/explore-edit/explore-edit.component').then(m => m.ExploreEditComponent),
          },
        ],
      },
      {
        path: 'sources',
        loadComponent: () => import('./pages/sources/sources.component').then(m => m.SourcesComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/sources/source-list/source-list.component').then(m => m.SourceListComponent),
          },
          {
            path: 'edit',
            loadComponent: () => import('./pages/sources/source-form/source-form.component').then(m => m.SourceFormComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () => import('./pages/sources/source-form/source-form.component').then(m => m.SourceFormComponent),
          },
          {
            path: 'details/:id',
            loadComponent: () => import('./pages/sources/source-detail/source-detail.component').then(m => m.SourceDetailComponent),
          },
        ],
      },

      {
        path: 'generics',
        loadComponent: () => import('./pages/generics/generics.component').then(m => m.GenericsComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/generics/generic-list/generic-list.component').then(m => m.GenericListComponent),
          },
          {
            path: 'edit',
            loadComponent: () => import('./pages/generics/generic-form/generic-form.component').then(m => m.GenericFormComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () => import('./pages/generics/generic-form/generic-form.component').then(m => m.GenericFormComponent),
          },
          {
            path: 'details/:id',
            loadComponent: () => import('./pages/generics/generic-detail/generic-detail.component').then(m => m.GenericDetailComponent),
          },
        ],
      },
      {
        path: 'video-analizer',
        loadComponent: () => import('./pages/video-analizer/video-router').then(m => m.VideoRouterComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/video-analizer/video-analizer').then(m => m.VideoAnalizerComponent),
          },
          {
            path: 'tiktoks',
            loadComponent: () => import('./pages/video-analizer/tiktoks/tiktok-list').then(m => m.TiktokListComponent),
          },
          {
            path: 'tiktoks/:id',
            loadComponent: () => import('./pages/video-analizer/tiktoks-user/tiktoks-user').then(m => m.TiktoksUserComponent),
          },
          {
            path: 'tiktoks/:user/analysis/:id',
            loadComponent: () => import('./pages/video-analizer/tiktok-analysis/tiktok-analysis').then(m => m.TiktokAnalysisComponent),
          },
        ],
      },
      {
        path: 'video-generator',
        loadComponent: () => import('./pages/video-generator/videoGenerators.component').then(m => m.VideoGeneratorsComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/video-generator/videoGenerator-list/videoGenerator-list.component').then(m => m.VideoGeneratorListComponent),
          },
          {
            path: 'edit',
            loadComponent: () => import('./pages/video-generator/videoGenerator-form/videoGenerator-form.component').then(m => m.VideoGeneratorFormComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () => import('./pages/video-generator/videoGenerator-form/videoGenerator-form.component').then(m => m.VideoGeneratorFormComponent),
          },
          {
            path: 'details/:id',
            loadComponent: () => import('./pages/video-generator/videoGenerator-form/videoGenerator-form.component').then(m => m.VideoGeneratorFormComponent),
          },
        ],
      },
      {
        path: 'tools',
        loadComponent: () => import('./pages/tools/tools').then(m => m.ToolsComponent),
      },

      {
        path: 'test',
        loadComponent: () => import('./pages/test/test.component').then(m => m.TestComponent),
      },
      {
        path: 'chat',
        loadComponent: () => import('./pages/agents/conversation-card-list/agent.component').then(m => m.ChatComponentPage),
      },
    ],
  },

  {
    path: 'not-found',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
