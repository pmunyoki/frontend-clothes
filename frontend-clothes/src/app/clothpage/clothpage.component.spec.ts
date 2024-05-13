import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothpageComponent } from './clothpage.component';

describe('ClothpageComponent', () => {
  let component: ClothpageComponent;
  let fixture: ComponentFixture<ClothpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
