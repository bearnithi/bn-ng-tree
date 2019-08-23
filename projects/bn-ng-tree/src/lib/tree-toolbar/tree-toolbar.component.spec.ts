import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeToolbarComponent } from './tree-toolbar.component';

describe('TreeToolbarComponent', () => {
  let component: TreeToolbarComponent;
  let fixture: ComponentFixture<TreeToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
