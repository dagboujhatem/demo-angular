import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurChildComponent } from './compteur-child.component';

describe('CompteurChildComponent', () => {
  let component: CompteurChildComponent;
  let fixture: ComponentFixture<CompteurChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteurChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteurChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
