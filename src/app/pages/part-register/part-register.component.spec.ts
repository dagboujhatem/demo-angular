import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartRegisterComponent } from './part-register.component';

describe('PartRegisterComponent', () => {
  let component: PartRegisterComponent;
  let fixture: ComponentFixture<PartRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
