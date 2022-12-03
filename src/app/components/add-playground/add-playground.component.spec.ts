import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaygroundComponent } from './add-playground.component';

describe('AddPlaygroundComponent', () => {
  let component: AddPlaygroundComponent;
  let fixture: ComponentFixture<AddPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
