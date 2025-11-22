import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearntypescriptComponent } from './learntypescript.component';

describe('LearntypescriptComponent', () => {
  let component: LearntypescriptComponent;
  let fixture: ComponentFixture<LearntypescriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearntypescriptComponent]
    });
    fixture = TestBed.createComponent(LearntypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
