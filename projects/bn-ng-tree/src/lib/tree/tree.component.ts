import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BnNgTreeService } from '../services/bn-ng-tree.service';

@Component({
  selector: 'bn-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() items: any;
  @Input() theme: string;
  @Input() isCheckbox: boolean = false;
  @Input() checkChildren: boolean = false;

  constructor(private treeService: BnNgTreeService) { }

  ngOnInit() {

  }

  onexpand(item, e) {

    if (item.expanded) {
      item.expanded = !item.expanded;
      return;
    } else {
      if (item.children) {
        if (item.children.length > 0) {
          item.expanded = true;
        } else {
          item.expanded = false;
        }
      }
    }
  }

  go(item, e) {
    e.stopPropagation();
    this.treeService.setSelectedItem(item);
  }

  onCheck(item) {
    if (item.checked) {
      this.treeService.addCheckedItem(item, this.checkChildren);
    } else if(item.checked === false) {
      this.treeService.removeCheckedItem(item, this.checkChildren);
    }
  }

  isChildExists(item) {
    if (item.children) {
      if (item.children.length > 0) {
        return true;
      } else {
        return false;
      }
    }

    return false;
  }

}
