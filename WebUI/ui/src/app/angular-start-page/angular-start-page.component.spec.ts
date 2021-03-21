import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStartPageComponent } from './angular-start-page.component';

describe('AngularStartPageComponent', () => {
  let component: AngularStartPageComponent;
  let fixture: ComponentFixture<AngularStartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularStartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
