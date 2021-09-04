import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICard, IItem, ItemsService, DecimalPipe } from '@app/shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {
  subscribers: Array<Subscription> = [];
  mappedCards!: Array<ICard>;
  isLoading: boolean = false;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.subscribers.push(this.itemsService.selectedCountryChanged.subscribe(() => this.loadItems()));
  }

  loadItems(): void {
    this.isLoading = true;
    this.subscribers.push(this.itemsService.getCountryItems().subscribe(
      list => {
        this.fillCards(list);
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
      }
    ));
  }

  fillCards(items: Array<IItem>) {
    const pipe: DecimalPipe = new DecimalPipe();
    this.mappedCards = items.map(item => ({
      image: item.icon,
      title: item.name,
      secondTitle: `${pipe.transform(item.price, this.itemsService.selectedCountry.decimal)} ${this.itemsService.selectedCountry.currency}`
    }));
  }

  ngOnDestroy() {
    this.subscribers.forEach(subscriber => subscriber.unsubscribe());
  }

}
