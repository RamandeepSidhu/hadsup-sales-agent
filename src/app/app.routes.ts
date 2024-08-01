import { Routes } from '@angular/router';
import { AdvertiserListComponent } from './sales-agent/advertiser-list/advertiser-list.component';
import { AddAdvertiserComponent } from './sales-agent/advertiser-list/add-advertiser/add-advertiser.component';
import { SaleAgentOverviewComponent } from './sales-agent/sale-agent-overview/sale-agent-overview.component';

export const routes: Routes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'overview', component: SaleAgentOverviewComponent },
    { path: 'advertiser', component: AdvertiserListComponent },
    { path: 'add-advertiser', component: AddAdvertiserComponent },
];
