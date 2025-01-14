import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataForEditComponent } from './get-data-for-edit.component';

describe('GetDataForEditComponent', () => {
  let component: GetDataForEditComponent;
  let fixture: ComponentFixture<GetDataForEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDataForEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDataForEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
