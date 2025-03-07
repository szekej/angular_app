import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataDisplayComponent } from './data-display.component';


describe('DataDisplayComponent', () => {
  let component: DataDisplayComponent;
  let fixture: ComponentFixture<DataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
