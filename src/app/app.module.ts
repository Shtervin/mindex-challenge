import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import {BackendlessMockService} from './backendless-mock.service';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeService} from './employee.service';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmployeeReportsInfoComponent } from './employee-reports-info/employee-reports-info.component';
import { EmployeeReportsListInfoComponent } from './employee-reports-list-info/employee-reports-list-info.component';
import { DeletePopUpComponent } from './delete-pop-up/delete-pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CompensationPopUpComponent } from './compensation-pop-up/compensation-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeReportsInfoComponent,
    EmployeeReportsListInfoComponent,
    DeletePopUpComponent,
    CompensationPopUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BackendlessMockService, {
      apiBase: 'api/',
      delay: 250,
      passThruUnknownUrl: true,
      post204: false,
      put204: false
    }),
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
