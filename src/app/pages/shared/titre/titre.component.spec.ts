import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TITREComponent } from './titre.component';

describe('TITREComponent', () => {
  let component: TITREComponent;
  let fixture: ComponentFixture<TITREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TITREComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TITREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
