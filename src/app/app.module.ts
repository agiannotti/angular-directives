import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxBootstrapIconsModule, ColorTheme } from 'ngx-bootstrap-icons';
import { alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';

const icons = {
  alarm,
  alarmFill,
  alignBottom,
};

@NgModule({
  declarations: [AppComponent, InputFormatDirective],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgxBootstrapIconsModule.pick(icons, {
      width: '3em',
      height: '3em',
      theme: ColorTheme.Danger,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
