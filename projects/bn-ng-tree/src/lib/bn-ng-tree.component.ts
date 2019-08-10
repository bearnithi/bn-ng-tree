import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BnNgTreeService } from './services/bn-ng-tree.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';


@Component({
  selector: 'bn-ng-tree',
  templateUrl: './bn-ng-tree.component.html',
  styleUrls: ['./bn-ng-tree.component.css']
})
export class BnNgTreeComponent implements OnInit, OnDestroy {
  @Input() items;
  @Input() theme: string = "default";
  @Input() isSearch: boolean = true;
  @Input() isCheckbox: boolean = false;
  @Input() checkChildren: boolean = false;

  @Output() onChange = new EventEmitter();
  @Output() onChecked = new EventEmitter();


  selectedItemSubscription: Subscription;
  checkedItemSubscription: Subscription;
  public searchkey;


  constructor(private treeService: BnNgTreeService) { }

  ngOnInit() {

    if (this.isCheckbox) {
      this.treeService.setInitialCheckedItems(this.items);
    }

    this.treeService.callSelectedItem$.subscribe((item) => {
      if (item) {
        this.onChange.emit(item);
      }
    });

    this.treeService.callCheckedItems$.subscribe((item) => {
      if (item) {
        this.onChecked.emit(this.treeService.getCheckedItems());
      }
    });

  }

  ngOnDestroy(): void {
    this.selectedItemSubscription.unsubscribe();
    this.checkedItemSubscription.unsubscribe();
  }

  search(key: string) {
    this.searchkey = key;
  }

}
