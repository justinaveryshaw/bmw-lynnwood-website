import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';
import { firstValueFrom, Observable } from 'rxjs';


import { APIService } from '../api.service';
import { FilterCategory } from '../interfaces';

@Component({
    selector: 'inventory-filter-menu',
    imports: [
        CommonModule,
        FormsModule,
        AccordionGroup,
        AccordionTrigger,
        AccordionPanel,
        AccordionContent
    ],
    templateUrl: './inventory-filter-menu.html',
    styleUrl: './inventory-filter-menu.scss'
})

export class InventoryFilterMenu {
    public isLoading = false;
    public contentLoaded = false;
    public categories: FilterCategory[] = [];

    constructor(private api: APIService) { }

    async ngOnInit() {
        let menuData;
        this.isLoading = true;
        try {
            menuData = await firstValueFrom(this.api.getMenuList());
            this.categories = menuData.categories;
            this.contentLoaded = true;
            console.debug("categories: ", this.categories);
            this.isLoading = false;

        } catch (error) {
            // this.isLoading = false;
        }
        console.debug('menu data: ', menuData);
    }

    public trackByIndex(index: number, item: any) {
        return index;
    }

}
