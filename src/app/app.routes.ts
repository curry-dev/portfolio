import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TechComponent } from './components/tech/tech.component';
import { ArtComponent } from './components/art/art.component';
import { AboutComponent } from './components/about/about.component';
import { WegalabsComponent } from './components/wegalabs/wegalabs.component';
import { SalahkaarComponent } from './components/salahkaar/salahkaar.component';
import { WorkupComponent } from './components/workup/workup.component';
import { MarshallComponent } from './components/marshall/marshall.component';
import { CurryninjaComponent } from './components/curryninja/curryninja.component';
import { SmartxrComponent } from './components/smartxr/smartxr.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'tech', 
        component: TechComponent
    },
    {
        path: 'art', 
        component: ArtComponent
    },
    {
        path: 'about', 
        component: AboutComponent
    },
    {
        path: 'wegalabs', 
        component: WegalabsComponent
    },
    {
        path: 'salahkaar', 
        component: SalahkaarComponent
    },
    {
        path: 'workup', 
        component: WorkupComponent
    },
    {
        path: 'marshall', 
        component: MarshallComponent
    },
    {
        path: 'curryninja', 
        component: CurryninjaComponent
    },
    {
        path: 'smartxr', 
        component: SmartxrComponent
    }
];

export default routes;