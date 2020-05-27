import { FormService } from './form.service';
import { TestBed, inject } from '@angular/core/testing';


describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService]
    });
  });

  it('should be created', inject([FormService], (service: FormService) => {
    expect(service).toBeTruthy();
  }));
});