import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';

@Component({ selector: 'app-other-component', template: '' })
export class OtherComponent {}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QuillModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
