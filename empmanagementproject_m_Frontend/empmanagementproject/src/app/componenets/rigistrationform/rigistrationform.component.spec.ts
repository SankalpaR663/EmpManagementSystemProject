import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigistrationformComponent } from './rigistrationform.component';

describe('RigistrationformComponent', () => {
  let component: RigistrationformComponent;
  let fixture: ComponentFixture<RigistrationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigistrationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigistrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
