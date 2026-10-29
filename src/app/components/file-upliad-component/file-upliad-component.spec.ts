import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUpliadComponent } from './file-upliad-component';

describe('FileUpliadComponent', () => {
  let component: FileUpliadComponent;
  let fixture: ComponentFixture<FileUpliadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileUpliadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUpliadComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
