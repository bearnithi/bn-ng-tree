## DESCRIPTION

An Angular 6/7/8+ **TREE COMPONENT** with checkbox and search. Just send a nested JSON as input, **bn-ng-tree** component will render the nested JSON as a tree view in your Angular app.

![BN NG Tree Preview](http://bearnithi.com/bn-ng-tree.gif)

[Live Demo](https://bn-ng-tree.bearnithi.com/)

Note: Install font-awesome 4.7 to display icons in tree.

## INSTALLATION

```sh
npm install bn-ng-tree-lib
```

## BN NG TREE - FEATURES

1. [Search](#search-bn-ng-tree).
2. [Themes](#change-tree-theme).
3. [Custom CSS](#custom-css).
4. [Checkbox](#enable-checkbox)

## USAGE

### Import the bn-ng-tree in the module

```javascript
import { BnNgTreeModule } from 'bn-ng-tree-lib';
....
...
imports: [
    ....,
    BnNgTreeModule
]
```

### Add the `bn-ng-tree` selector in the component html

```html
<bn-ng-tree [items]="items" (onChange)="selectedItem($event)"></bn-ng-tree>
```

It accepts `[items]` as input which should be a nested array of objects for the tree. Every object in the items array must have `name` and `children` property.

### Get the Selected Node in the Tree Component

`bn-ng-tree` component outputs the `onChange` event whenever the user clicks the select arrow button of the node. In the `$event` you will get the selected Object of the node in the tree.

#### Show Select Button

You can show / hide the select arrow button using `show-select-btn` input property. By default, It's false.

```html
<bn-ng-tree
  [show-select-btn]="true"
  [items]="items"
  (onChange)="selectedItem($event)"
></bn-ng-tree>
```

### Search Tree Component

The tree component search will be triggered `onChange` and `keypress.enter` events.

You can enable / disable search option by using `show-search` input in bn-ng-tree. It accepts boolean. By default search option is enabled.

#### Enable Search

```html
<bn-ng-tree
  [show-search]="true"
  [items]="items"
  (onChange)="selectedItem($event)"
></bn-ng-tree>
```

#### Disable Search

```html
<bn-ng-tree
  [show-search]="false"
  [items]="items"
  (onChange)="selectedItem($event)"
></bn-ng-tree>
```

### Show Child Nodes Count

You can show the number of child nodes beside the node using `show-counts` input property. By default it's false.

```html
<bn-ng-tree
  [show-search]="true"
  [show-counts]="true"
  [items]="items"
  (onChange)="selectedItem($event)"
></bn-ng-tree>
```

### Change Tree Theme

Bn Ng Tree has built in themes.

1. primary
2. secondary
3. tertiary

```html
<bn-ng-tree
  [theme]="'secondary'"
  [show-search]="false"
  [items]="items"
  (onChange)="selectedItem($event)"
></bn-ng-tree>
```

### Custom CSS

You can add your css class to the `bn-ng-tree` using `style-class` input property. It accepts the class name as string.

```html
<bn-ng-tree
  [theme]="'secondary'"
  [style-class]="'my-tree'"
  [show-search]="false"
  [items]="items"
  (onChange)="selectedItem($event)"
></bn-ng-tree>
```

### Show Checkbox

To show checkbox, add the `[show-checkbox]` to `true` in the **bn-ng-tree**

```html
<bn-ng-tree
  [show-checkbox]="true"
  [theme]="currentTheme"
  [show-search]="false"
  [items]="items"
  (onChange)="selectedItem($event)"
  (onChecked)="checkedItems($event)"
></bn-ng-tree>
```

#### Enable auto checkbox selection in child nodes

On parent node check, all the child nodes will gets checked if you use `[auto-check-child]` property binding.

```html
<bn-ng-tree
  [show-checkbox]="true"
  [auto-check-child]="true"
  [theme]="currentTheme"
  [show-search]="false"
  [items]="items"
  (onChange)="selectedItem($event)"
  (onChecked)="checkedItems($event)"
></bn-ng-tree>
```

#### Disable Checkbox

You can disable all checkbox in the tree using `[disable-checkbox]='true'` property. By default it's `false`

```html
<bn-ng-tree
  [show-checkbox]="true"
  [auto-check-child]="true"
  [theme]="currentTheme"
  [show-search]="false"
  [items]="items"
  [disable-checkbox]="true"
  (onChange)="selectedItem($event)"
  (onChecked)="checkedItems($event)"
></bn-ng-tree>
```


#### Get Checked/Unchecked nodes from Tree

To get the checked and unchecked items from the bn-ng-tree, Use **onChecked** output event which emits an event everytime a user checks/unchecks a node in the bn-ng-tree. It returns an object with `checked` and `unchecked` properties which are array of checked/unchecked items.

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
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BnNgTreeModule } from "bn-ng-tree-lib";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BnNgTreeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### app.component.html

```html
<section class="tree-container">
  <h2>Angular 6 Tree Component</h2>
  <div class="tree-box">
    <bn-ng-tree
      [show-checkbox]="true"
      [show-select-btn]="true"
      [show-counts]="true"
      [show-search]="true"
      [items]="items"
      [auto-check-child]="true"
      (onChange)="selectedItem($event)"
      (onChecked)="checkedItems($event)"
    ></bn-ng-tree>
  </div>

  <div *ngIf="currentItem" class="selected-item">
    <h2>Selected Item</h2>
    <div class="selected-box">
      <h4>Name:</h4>
      {{ currentItem.name }}
    </div>
  </div>
</section>
```

### app.component.ts

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "bn-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "bn";
  items = [
    {
      name: "India",
      children: [
        {
          name: "North India",

          children: [
            {
              name: "Delhi",
              children: [
                {
                  name: "Taj Mahal",
                  children: []
                }
              ]
            },
            {
              name: "Mumbai",
              children: [
                {
                  name: "North mumbai",
                  children: []
                },
                {
                  name: "South Mumbai",
                  children: []
                }
              ]
            }
          ]
        },
        {
          name: "America",
          children: [
            {
              name: "New York",
              children: []
            },
            {
              name: "Mexico",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "Africa",
      children: [
        {
          name: "Tanzania",
          children: [
            {
              name: "Area one",
              children: []
            },
            {
              name: "Area Two",
              children: []
            }
          ]
        },
        {
          name: "South Africa",
          children: [
            {
              name: "Johnesberg",
              children: []
            },
            {
              name: "Area three",
              children: []
            }
          ]
        }
      ]
    },
    {
      name: "Rwanda",
      children: [
        {
          name: "Area four",
          children: [
            {
              name: "Sub Area",
              children: []
            },
            {
              name: "Sub Area two",
              children: []
            }
          ]
        },
        {
          name: "Area five",
          children: [
            {
              name: "Sub Area One",
              children: []
            },
            {
              name: "Sub Area two",
              children: []
            }
          ]
        }
      ]
    }
  ];

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

1.6.3 - Disable All Checkbox.

1.6.2 - Highlight selected node.

1.6.0 - Show Child Counts. Custom CSS. Theme Designs Changed. Checkbox Selection Bug Fixed.

1.5.0 - Checkbox auto child selection. Search feature is case insensitive now.

1.4.1 - Bug Fixes, Documentation Updated.

1.4.0 - Checkbox option for Angular Tree

1.3.0 - Theme option for tree

1.2.2 - Enable / Disable Search Option

1.1.0 - Search Added for the recursive tree.
