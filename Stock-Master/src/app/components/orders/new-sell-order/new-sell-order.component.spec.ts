import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSellOrderComponent } from './new-sell-order.component';

describe('NewSellOrderComponent', () => {
  let component: NewSellOrderComponent;
  let fixture: ComponentFixture<NewSellOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSellOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSellOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
