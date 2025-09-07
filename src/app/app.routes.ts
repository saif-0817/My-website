import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
import { ServicesPage } from './pages/services/services.page';
import { AboutPage } from './pages/about/about.page';
import { BlogsPage } from './pages/blogs/blogs.page';
import { ContactPage } from './pages/contact/contact.page';
import { ServiceDetailsComponent } from './pages/services/page/service-details/service-details.component';
import { BlogPostComponent } from './pages/blogs/pages/blog-post/blog-post.component';



export const routes: Routes = [
    {
        path: '', component: CommonLayoutComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            {
                path: 'home', component: HomePage, title:'home'
            },
            {
                path: 'services', component: ServicesPage,title:'services'
            },
             {
                path: 'services/:srv', component: ServiceDetailsComponent, title:'service-details' ,
            },
            {
                path: 'about', component: AboutPage, title:'about'
            },
            {
                path: 'blogs', component: BlogsPage, title:'blogs'
            },
             {
                path: 'post/:blog', component: BlogPostComponent, title:'post',
                 
            },
            {
                path: 'contact', component: ContactPage, title:'contact'
            }
        ]

    }
];
