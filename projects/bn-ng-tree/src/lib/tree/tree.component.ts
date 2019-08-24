import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BnNgTreeService } from '../services/bn-ng-tree.service';

@Component({
  selector: 'bn-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() items: Array<any> = [];
  @Input() theme: string;
  @Input() isCheckbox = false;
  @Input() checkChildren = false;
  @Input() showSelectBtn: boolean;
  @Input() uniqueID: any;
  @Input() showNodeCounts: boolean;
  @Input() disableCheckbox: boolean;

  constructor(private treeService: BnNgTreeService) { }

  ngOnInit() {

  }

  expandNode(item, e) {
    if (item.expanded) {
      item.expanded = !item.expanded;
      return;
    }

    if (this.hasChildNodes(item)) {
      item.expanded = true;
    } else {
      item.expanded = false;
    }

  }

  selectNode(item, e) {
    e.stopPropagation();
    this.treeService.setSelectedItem(item);
  }

  getSelectedNode() {
    return this.treeService.getSelectedItem();
  }

  onCheck(item) {
    if (item.checked) {
      this.treeService.addCheckedItem(item, this.checkChildren);
    } else if (item.checked === false) {
      this.treeService.removeCheckedItem(item, this.checkChildren);
    }
  }

  hasChildNodes(item) {
    if (item.children) {
      if (item.children.length > 0) {
        return true;
      } else {
        return false;
      }
    }

    return false;
  }

  setUUID(node) {
    if (!node.bnTreeUUID) {
      node.bnTreeUUID = this.treeService.generateUUID();
    }

    return node.bnTreeUUID;

  }

}
