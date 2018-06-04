import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatMenuModule, MatListItem, MatListModule, MatButtonToggleModule, MatButtonModule, MatGridListModule} from '@angular/material';
import { FilterComponent } from './filter/filter.component';
import { OperatorComponent } from './operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    OperatorComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }