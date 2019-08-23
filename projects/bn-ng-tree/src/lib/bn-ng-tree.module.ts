import { NgModule } from '@angular/core';
import { BnNgTreeComponent } from './bn-ng-tree.component';
import { CommonModule } from '@angular/common';
import { BnNgTreeService } from './services/bn-ng-tree.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { TreeComponent } from './tree/tree.component';
import { TreeToolbarComponent } from './tree-toolbar/tree-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    BnNgTreeService
  ],
  declarations: [BnNgTreeComponent, SearchBoxComponent, SearchPipe, TreeComponent, TreeToolbarComponent],
  exports: [BnNgTreeComponent]
})
export class BnNgTreeModule { }
