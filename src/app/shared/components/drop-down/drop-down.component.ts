import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IDropDown } from '@app/shared';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() list: Array<IDropDown> = [];
  @Output() change: EventEmitter<IDropDown> = new EventEmitter<IDropDown>();

  open: boolean = false;
  selectedItem!: IDropDown;

  ngOnInit() {
    this.selectedItem = this.list?.length ? this.list[0] : {};
    this.change.emit(this.selectedItem);
  }

  toggle(): void {
    this.open = !this.open;
  }

  selectItem(item: IDropDown): void {
    this.selectedItem = item;
    this.change.emit(item);
    this.toggle();
  }
}
