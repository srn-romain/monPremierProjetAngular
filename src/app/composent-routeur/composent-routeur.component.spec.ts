import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposentRouteurComponent } from './composent-routeur.component';

describe('ComposentRouteurComponent', () => {
  let component: ComposentRouteurComponent;
  let fixture: ComponentFixture<ComposentRouteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposentRouteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComposentRouteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
