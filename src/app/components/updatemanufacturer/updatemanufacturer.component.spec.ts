import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemanufacturerComponent } from './updatemanufacturer.component';

describe('UpdatemanufacturerComponent', () => {
  let component: UpdatemanufacturerComponent;
  let fixture: ComponentFixture<UpdatemanufacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemanufacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemanufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
