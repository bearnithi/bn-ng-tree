import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular';

   items = [{
    name: "India",
    children: [{
      name: "North India",

      children: [{
        name: "Delhi",
        children: [{
          name: "Taj Mahal",
          children: []
        }]
      }, {
        name: "Mumbai",
        children: [{
          name: "North mumbai",
          children: []
        }, {
          name: "South Mumbai",
          children: []
        }]
      }]
    }, {
      name: "America",
      children: [{
        name: "New York",
        children: []
      }, {
        name: "Mexico",
        children: []
      }]
    }]
  },
  {
    name: "Africa",
    children: [{
      name: "Tanzania",
      children: [{
        name: "Area one",
        children: []
      }, {
        name: "Area Two",
        children: []
      }]
    }, {
      name: "South Africa",
      children: [{
        name: "Johnesberg",
        children: []
      }, {
        name: "Area three",
        children: []
      }]
    }]
  }, {
    name: "Rwanda",
    children: [{
      name: "Area four",
      children: [{
        name: "Sub Area",
        children: []
      }, {
        name: "Sub Area two",
        children: []
      }]
    }, {
      name: "Area five",
      children: [{
        name: "Sub Area One",
        children: []
      }, {
        name: "Sub Area two",
        children: []
      }]
    }]
  }];

  currentItem;

  selectedItem(item) {
    this.currentItem = item;
  }

  checkedItems(items) {
    console.log(JSON.stringify(items.checked));
    console.log(JSON.stringify(items.unchecked));
  }
}
