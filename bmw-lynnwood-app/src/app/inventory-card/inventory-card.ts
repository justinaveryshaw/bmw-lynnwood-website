import { Component, Input, OnInit } from '@angular/core';

import { InventoryCardData } from '../interfaces';

@Component({
    selector: 'inventory-card',
    imports: [],
    templateUrl: './inventory-card.html',
    styleUrl: './inventory-card.scss',
})
export class InventoryCard {
    // @Input() vehicleData!: InventoryCardData;
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
        }


    constructor() {}

    ngOnInit() {
        
    }
}
