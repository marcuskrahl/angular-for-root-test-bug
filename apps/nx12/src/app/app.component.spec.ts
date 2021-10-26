import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { AppModule, OtherComponent } from './app.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
    TestBed.overrideModule(AppModule, {
      remove: {
        declarations: [OtherComponent],
      },
    });

    await TestBed.compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nx12'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nx12');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome to nx12!'
    );
  });
});
