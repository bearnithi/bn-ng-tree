import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  private searchedItems;

  transform(value: any, key?: any): any {
    if (key !== undefined) {
      this.searchedItems = [];
      const searchResult = this.searchRecursive(value, key);
      console.log(searchResult);
      return searchResult;
    }
   return value;
  }

  searchRecursive(value, key) {
    for (let i = 0; i < value.length; i++) {
      const currentItem = value[i];
      if (currentItem.name.toLowerCase().includes(key.toLowerCase())) {
        this.searchedItems.push(currentItem);
      } else if (this.hasChildren(currentItem.children)) {
          this.searchRecursive(currentItem.children, key);
      }
    }

    return this.searchedItems;
  }

  hasChildren(items: Array<any>) {
    if (items) {
      if (items.length > 0) {
        return true;
      }
    }

    return false;
  }

}
