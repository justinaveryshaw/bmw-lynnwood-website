import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryFilterMenu } from '../inventory-filter-menu/inventory-filter-menu';
import { InventoryList } from '../inventory-list/inventory-list';


@Component({
  selector: 'app-new-inventory',
  imports: [InventoryFilterMenu, InventoryList],
  templateUrl: './new-inventory.html',
  styleUrl: './new-inventory.scss'
})
export class NewInventory {


}
