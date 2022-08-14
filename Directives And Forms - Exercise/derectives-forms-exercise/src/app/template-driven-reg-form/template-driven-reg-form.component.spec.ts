import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenRegFormComponent } from './template-driven-reg-form.component';

describe('TemplateDrivenRegFormComponent', () => {
  let component: TemplateDrivenRegFormComponent;
  let fixture: ComponentFixture<TemplateDrivenRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenRegFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
