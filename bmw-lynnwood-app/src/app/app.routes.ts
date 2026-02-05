import { Routes } from '@angular/router';
// import { AppComponent } from './app'
import { AboutUs } from './about-us/about-us';
import { ElectricInventory } from './electric-inventory/electric-inventory';
import { Home } from './home/home';
import { InventoryList } from './inventory-list/inventory-list';
import { NewInventory } from './new-inventory/new-inventory';
import { PreOwnedInventory } from './pre-owned-inventory/pre-owned-inventory';
import { ServiceParts } from './service-parts/service-parts';
import { SpecialsFinance } from './specials-finance/specials-finance';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'about-us', component: AboutUs, title: 'About Us'},
    { path: 'electric-inventory', component: ElectricInventory, title: 'Electric Inventory'},
    { path: 'home', component: Home, title: 'Home'},
    { path: 'inventory-list', component: InventoryList, title: 'Inventory List'},
    { path: 'new-inventory', component: NewInventory, title: 'New Inventory'},
    { path: 'pre-owned-inventory', component: PreOwnedInventory, title: 'Pre Owned Inventory'},
    { path: 'service-parts', component: ServiceParts, title: 'Service & Parts'},
    { path: 'specials-finance', component: SpecialsFinance, title: 'Specials Finance'}

];
