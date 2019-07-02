import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContextMenuComponent } from './card-context-menu.component';

describe('CardContextMenuComponent', () => {
  let component: CardContextMenuComponent;
  let fixture: ComponentFixture<CardContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
