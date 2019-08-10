import { TestBed, inject } from '@angular/core/testing';
import { BnNgTreeService } from './bn-ng-tree.service';



describe('BnNgTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnNgTreeService]
    });
  });

  it('should be created', inject([BnNgTreeService], (service: BnNgTreeService) => {
    expect(service).toBeTruthy();
  }));
});
