import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategotyComponent } from './single-categoty.component';

describe('SingleCategotyComponent', () => {
  let component: SingleCategotyComponent;
  let fixture: ComponentFixture<SingleCategotyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCategotyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCategotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
