import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchDashboardsComponent } from './research-dashboards/research-dashboards.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotographyPortfolioComponent } from './photography-portfolio/photography-portfolio.component';
import { TechServicesComponent } from './tech-services/tech-services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'research-dashboards', component: ResearchDashboardsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'photography-portfolio', component: PhotographyPortfolioComponent },
  { path: 'tech-services', component: TechServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // Wildcard route to redirect to home
];