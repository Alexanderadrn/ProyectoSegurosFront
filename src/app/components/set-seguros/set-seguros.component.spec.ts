import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSegurosComponent } from './set-seguros.component';

describe('SetSegurosComponent', () => {
  let component: SetSegurosComponent;
  let fixture: ComponentFixture<SetSegurosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetSegurosComponent]
    });
    fixture = TestBed.createComponent(SetSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
