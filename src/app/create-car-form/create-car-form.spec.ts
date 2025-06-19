import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarForm } from './create-car-form';

describe('CreateCarForm', () => {
  let component: CreateCarForm;
  let fixture: ComponentFixture<CreateCarForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCarForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCarForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
