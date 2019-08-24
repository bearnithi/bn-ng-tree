import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BnNgTreeService } from './services/bn-ng-tree.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'bn-ng-tree',
  templateUrl: './bn-ng-tree.component.html',
  styleUrls: ['./bn-ng-tree.component.scss']
})
export class BnNgTreeComponent implements OnInit, OnDestroy {
  @Input() items: Array<any> = [];
  @Input() theme = 'default';
  @Input('unique-id') uniqueID: any;
  @Input('style-class') styleClass: string;
  @Input('auto-check-child') checkChildren = false;
  @Input('disable-checkbox') disableCheckbox: boolean;
  @Input('show-counts') showCounts = false;
  @Input('show-select-btn') showSelectBtn = false;
  @Input('show-search') isSearch = true;
  @Input('show-checkbox') isCheckbox = false;


  @Output() onChange = new EventEmitter();
  @Output() onChecked = new EventEmitter();


  private selectedItemSubscription: Subscription;
  private checkedItemSubscription: Subscription;
  public searchkey;


  constructor(private treeService: BnNgTreeService) { }

  ngOnInit() {

    if (this.isCheckbox) {
      this.treeService.setInitialCheckedItems(this.items);
    }

    this.selectedItemSubscription = this.treeService.callSelectedItem$.subscribe((item) => {
      if (item) {
        this.onChange.emit(item);
      }
    });

    this.checkedItemSubscription = this.treeService.callCheckedItems$.subscribe((item) => {
      if (item) {
        this.onChecked.emit(this.treeService.getCheckedItems());
      }
    });

  }

  ngOnDestroy(): void {
    if (this.selectedItemSubscription && this.checkedItemSubscription) {
      this.selectedItemSubscription.unsubscribe();
      this.checkedItemSubscription.unsubscribe();
    }
  }

  search(key: string) {
    this.searchkey = key;
  }

  clearChecked() {
    this.treeService.clearChecked();
  }

}
