## DESCRIPTION

A simple and stylish **TREE COMPONENT** for Angular 6+. Just send a nested JSON as input, **bn-ng-tree** component will render it as a tree component.

![BN NG Tree Preview](http://bearnithi.com/bn-ng-tree.gif)

[Live Demo](https://bn-ng-tree-angular.stackblitz.io/)

## INSTALLATION
```sh
npm install bn-ng-tree-lib
```

## BN NG TREE - FEATURES
1. [Search](#search-bn-ng-tree).
2. [Themes](#change-tree-theme).
3. [Checkbox](#enable-checkbox)

## USAGE
### Import the bn-ng-tree in the module

```sh
import { BnNgTreeModule } from 'bn-ng-tree-lib';
....
...
imports: [
    ....,
    BnNgTreeModule
]
```
### Add the `bn-ng-tree` selector in the component html

```sh
<bn-ng-tree [items]="items" (onChange)="selectedItem($event)"></bn-ng-tree>
```
It accepts `[items]` as input which should be a nested array of objects for the tree. Every object in the items array must have `name` and `children` property.

### Get the Selected Node in the Tree Component 
`bn-ng-tree` component outputs the `onChange` event. In the `$event` you will get the selected Object of the node in the tree.    

### Search Tree Component
The tree component search will be triggered `onChange` and `keypress.enter` events.

You can enable / disable search option by using `isSearch` input in bn-ng-tree. It accepts boolean. By default search option is enabled.

#### Enable Search
```sh
<bn-ng-tree [isSearch]="true" [items]="items" (onChange)="selectedItem($event)"></bn-ng-tree>
```
#### Disable Search
```sh
<bn-ng-tree [isSearch]="false" [items]="items" (onChange)="selectedItem($event)"></bn-ng-tree>
```

### Change Tree Theme
Bn Ng Tree has built in themes.

1. default
2. greenish
3. dark
4. light
5. sun

```html
<bn-ng-tree [theme]="'dark'" [isSearch]="false" [items]="items" (onChange)="selectedItem($event)"></bn-ng-tree>
```

### Enable Checkbox 
To enable checkbox, add the `[isCheckbox]` to `true` in the **bn-ng-tree**

```html
<bn-ng-tree [isCheckbox]="true" [theme]="currentTheme" [isSearch]="false" [items]="items"
     (onChange)="selectedItem($event)" (onChecked)="checkedItems($event)"></bn-ng-tree>
```

#### Enable auto checkbox selection in child nodes
On parent node check, all the child nodes will gets checked if you use `[checkChildren]` property binding.

```html
<bn-ng-tree [isCheckbox]="true" [checkChildren]="true" [theme]="currentTheme" [isSearch]="false" [items]="items"
     (onChange)="selectedItem($event)" (onChecked)="checkedItems($event)"></bn-ng-tree>
```


#### Get Checked/Unchecked nodes from Tree

To get the checked and unchecked items from the bn-ng-tree, Use **onChecked** output which emits an event everytime a user checks/unchecks a node in the bn-ng-tree. It returns an object with `checked` and `unchecked` properties which are array of checked/unchecked items.

```javascript
checkedItems(checkedItems) {
  console.log(this.checkedItems.checked);
  console.log(this.checkedItems.unchecked);
}

// console output sample

// CHECKED ITEMS
[
   {
      "name":"Tanzania",
      "children":[
         {
            "name":"Area one",
            "children":[

            ],
            "checked":true
         },
         {
            "name":"Area Two",
            "children":[

            ],
            "checked":true
         }
      ],
      "expanded":true,
      "checked":true
   },
   {
      "name":"Area one",
      "children":[

      ],
      "checked":true
   },
   {
      "name":"Area Two",
      "children":[

      ],
      "checked":true
   }
]

// UNCHECKED ITEMS

[
   {
      "name":"South Africa",
      "children":[
         {
            "name":"Johnesberg",
            "children":[

            ],
            "checked":false
         },
         {
            "name":"Area three",
            "children":[

            ],
            "checked":false
         }
      ],
      "expanded":true,
      "checked":false
   },
   {
      "name":"Johnesberg",
      "children":[

      ],
      "checked":false
   },
   {
      "name":"Area three",
      "children":[

      ],
      "checked":false
   }
]



```

## Sample Code

### app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BnNgTreeModule } from 'bn-ng-tree-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BnNgTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


### app.component.html
```html
<section class="tree-container">
  <h2>Angular 6 Tree Component</h2>
  <div class="tree-box">
  <bn-ng-tree [isCheckbox]="true" [isSearch]="true" [items]="items" [checkChildren]="true"
     (onChange)="selectedItem($event)" (onChecked)="checkedItems($event)"></bn-ng-tree>
  </div>

  <div *ngIf="currentItem" class="selected-item">
    <h2>Selected Item</h2>
    <div class="selected-box">
      <h4>Name: </h4>
      {{ currentItem.name }}
    </div>
    
  </div>
  
</section>

```

### app.component.ts
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'bn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bn';
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
    console.log(items.checked);
    console.log(items.unchecked);
  }
}

```

## VERSIONING

1.5.0 - Checkbox auto child selection. Search feature is case insensitive now.

1.4.1 - Bug Fixes, Documentation Updated.

1.4.0 - Checkbox option for Angular Tree

1.3.0 - Theme option for tree

1.2.2 - Enable / Disable Search Option

1.1.0 - Search Added for the recursive tree.
