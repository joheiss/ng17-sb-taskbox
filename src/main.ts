import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { environment } from './environments/environment.prod';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { TasksState } from './app/state/task.state';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(NgxsModule.forRoot([TasksState], { developmentMode: !environment.production })),
    importProvidersFrom(NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    })),
    importProvidersFrom(NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }))
  ]
})
  .catch((err) => console.error(err));
