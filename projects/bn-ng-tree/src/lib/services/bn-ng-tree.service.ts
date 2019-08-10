import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from "rxjs";
import { CheckType } from '@angular/core/src/view';

interface checkedType {
  checked: Array<any>;
  unchecked: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class BnNgTreeService {
  selectedItem = new BehaviorSubject<any>(false);
  checkedItemsSub = new BehaviorSubject<any>(false);


  callSelectedItem$ = this.selectedItem.asObservable();
  callCheckedItems$ = this.checkedItemsSub.asObservable();

  private checkedItems: checkedType = {
    checked: [],
    unchecked: []
  };

  constructor() { }

  setSelectedItem(item): void {
    this.selectedItem.next(item);
  }


  setInitialCheckedItems(allItems) {
    const setCheckedItems = (items) => {
      items.forEach((item) => {
        if (item.checked) {
          this.checkedItems.checked.push(item);
        } else if (item.checked === false) {
          this.checkedItems.unchecked.push(item);
        }

        if (this.hasChildren(item.children)) {
          setCheckedItems(item.children);
        }
      });
    };

    setCheckedItems(allItems);
  }

  addCheckedItem(item, includeChildren?: boolean): void {

    const checkChildren = (items) => {
      items.forEach((item) => {
        this.findAndAdd(item);
        if (this.hasChildren(item.children)) {
          checkChildren(item.children);
        }
      });
    };

    this.findAndAdd(item);

    if (includeChildren) {
      checkChildren(item.children);
    }

    this.checkedItemsSub.next(true);
  }

  findAndAdd(item) {
    item.checked = true;
    this.checkedItems.checked.push(item);

    const unCheckedItemIndex = this.checkedItems.unchecked.indexOf(item);
    if (unCheckedItemIndex > -1) {
      this.checkedItems.unchecked.splice(unCheckedItemIndex, 1);
    }
  }

  getCheckedItems(): checkedType {
    return this.checkedItems;
  }

  removeCheckedItem(item, includeChildren?: boolean): void {
    const removeCheckedChildren = (items) => {
      items.forEach((childItem) => {
        this.findAndRemove(childItem);

        if (this.hasChildren(childItem.children)) {
          removeCheckedChildren(childItem.children);
        }
      });
    };

    this.findAndRemove(item);
    if (includeChildren) { removeCheckedChildren(item.children); }
    this.checkedItemsSub.next(true);
  }

  findAndRemove(item) {
    const checkedItemIndex = this.checkedItems.checked.indexOf(item);
    if (checkedItemIndex > -1) {
      item.checked = false;
      this.checkedItems.unchecked.push(item);
      this.checkedItems.checked.splice(checkedItemIndex, 1);
    }
  }

  hasChildren(items) {
    if (items) {
      if (items.length > 0) {
        return true;
      }
    }

    return false;
  }


  removeItem(removableNode, allNode): void {
    const removeNode = (items) => {
      items.forEach((item) => {
        const removableNodeIndex = items.indexOf(removableNode);
        if (removableNodeIndex > -1) {
          items.splice(removableNodeIndex, 1);
        }
        if (this.hasChildren(item.children)) {
          removeNode(item.children);
        }
      });
    };

    removeNode(allNode);
  }
}
