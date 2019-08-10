import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnNgTreeComponent } from './bn-ng-tree.component';

describe('BnNgTreeComponent', () => {
  let component: BnNgTreeComponent;
  let fixture: ComponentFixture<BnNgTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnNgTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnNgTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
