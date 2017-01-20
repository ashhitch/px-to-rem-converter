/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PxRemComponent } from './px-rem.component';

describe('PxRemComponent', () => {
  let component: PxRemComponent;
  let fixture: ComponentFixture<PxRemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxRemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
