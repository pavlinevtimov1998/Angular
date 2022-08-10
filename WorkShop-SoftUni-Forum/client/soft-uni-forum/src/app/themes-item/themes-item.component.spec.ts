import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesItemComponent } from './themes-item.component';

describe('ThemesItemComponent', () => {
  let component: ThemesItemComponent;
  let fixture: ComponentFixture<ThemesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
