import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPolizasComponent } from './set-polizas.component';

describe('SetPolizasComponent', () => {
  let component: SetPolizasComponent;
  let fixture: ComponentFixture<SetPolizasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetPolizasComponent]
    });
    fixture = TestBed.createComponent(SetPolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
