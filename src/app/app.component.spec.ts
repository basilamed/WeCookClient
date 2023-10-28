import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  template: `<div></div>`
})
class MockNavBarComponent { }

@Component({
  selector: 'app-footer',
  template: `<div></div>`
})
class MockFooterComponent { }

@Component({
  selector: 'app-navigation',
  template: `<div></div>`
})
class MockNavigationComponent { }

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, MockNavBarComponent, MockFooterComponent, MockNavigationComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'projekat'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('projekat');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent);
  }); 

  it('should have app-navbar', () => {
    const navComponent = fixture.debugElement.query(By.directive(MockNavBarComponent));
    expect(navComponent).toBeTruthy();
   }); 

  it('should have app-footer', () => {
    const footerComponent = fixture.debugElement.query(By.directive(MockFooterComponent));
    expect(footerComponent).toBeTruthy();
  });

  it('should have app-navigation', () => {
    const navigationComponent = fixture.debugElement.query(By.directive(MockNavigationComponent));
    expect(navigationComponent).toBeTruthy();
  });
});
