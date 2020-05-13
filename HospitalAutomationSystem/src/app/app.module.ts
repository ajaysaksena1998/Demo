import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './Components/logout/logout.component';
import { HttpInterceptorJwtService } from './Services/Interceptors/http-interceptor-jwt.service';
import { AddingDoctorsComponent } from './Components/adding-doctors/adding-doctors.component';
import { AddStockHoldersComponent } from './Components/add-stock-holders/add-stock-holders.component';
import { AddReceptionistsComponent } from './Components/add-receptionists/add-receptionists.component';
import { ReceptionComponent } from './Components/reception/reception.component';
import { ExaminePatientsComponent } from './Components/examine-patients/examine-patients.component';
import { PastHistoryComponent } from './Components/past-history/past-history.component';
import { ErrorComponent } from './Components/error/error.component';
import { PrescribeMedicinesComponent } from './Components/prescribe-medicines/prescribe-medicines.component';
import { ProvideMedicinesComponent } from './Components/provide-medicines/provide-medicines.component';
import { AddStockComponent } from './Components/add-stock/add-stock.component';
import { MedicineListComponent } from './Components/medicine-list/medicine-list.component';
import { ClickHereToProvideMedicinesComponent } from './Components/click-here-to-provide-medicines/click-here-to-provide-medicines.component';
import { ExpiredMedicinesComponent } from './Components/expired-medicines/expired-medicines.component';
import { PatientDetailsComponent } from './Components/patient-details/patient-details.component';
import { DisplayPatientDetailsComponent } from './Components/display-patient-details/display-patient-details.component';
import { LowStockMedicinesComponent } from './Components/low-stock-medicines/low-stock-medicines.component';
import { RemoveStaffComponent } from './Components/remove-staff/remove-staff.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';

import { ModalModule } from './_modal';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    LogoutComponent,
    AddingDoctorsComponent,
    AddStockHoldersComponent,
    AddReceptionistsComponent,
    ReceptionComponent,
    ExaminePatientsComponent,
    PastHistoryComponent,
    ErrorComponent,
    PrescribeMedicinesComponent,
    ProvideMedicinesComponent,
    AddStockComponent,
    MedicineListComponent,
    ClickHereToProvideMedicinesComponent,
    ExpiredMedicinesComponent,
    PatientDetailsComponent,
    DisplayPatientDetailsComponent,
    LowStockMedicinesComponent,
    RemoveStaffComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorJwtService, multi: true} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
