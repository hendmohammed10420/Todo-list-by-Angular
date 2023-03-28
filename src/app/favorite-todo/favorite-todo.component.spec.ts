import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTodoComponent } from './favorite-todo.component';

describe('FavoriteTodoComponent', () => {
  let component: FavoriteTodoComponent;
  let fixture: ComponentFixture<FavoriteTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
