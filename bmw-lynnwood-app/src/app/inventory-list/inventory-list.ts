import { Component, OnInit } from '@angular/core';

import { APIService } from '../api.service';
import { InventoryCardData } from '../interfaces';
import { InventoryCard } from '../inventory-card/inventory-card';

@Component({
    selector: 'inventory-list',
    imports: [InventoryCard],
    templateUrl: './inventory-list.html',
    styleUrl: './inventory-list.scss'
})
export class InventoryList {

    public vehicleData: InventoryCardData = {
            "imageSource": "images/2026-M4--CX13768.jpg",
            "vin": "WBS33HK04TCX13768",
            "stockNumber": "CX13768",
            "price": 94010,
            "make": "BMW",
            "model": "M4",
            "trim": "Competition xDrive",
            "year": 2026,
            "featureSummaryInfo": {},
            "status": "In Stock",
            "location": "BMW of Lynnwood",
            "color": {
                "exterior": "Alpine White",
                "interior": "Silverstone/Black"
            }
        };

    constructor() { }

    ngOnInit() {

    }
}
