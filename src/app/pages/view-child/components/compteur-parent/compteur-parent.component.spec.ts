import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurParentComponent } from './compteur-parent.component';

describe('CompteurParentComponent', () => {
  let component: CompteurParentComponent;
  let fixture: ComponentFixture<CompteurParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteurParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteurParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
