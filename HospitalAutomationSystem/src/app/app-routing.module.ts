import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { RouteGuardService } from './Services/Guard/route-guard.service';
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


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "login"
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'welcome',
    component: WelcomeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path:'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    path:'addDoc',
    component: AddingDoctorsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path:'addStockHolders',
    component: AddStockHoldersComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'addReceptionists',
    component: AddReceptionistsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'reception',
    component: ReceptionComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'examine',
    component: ExaminePatientsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'getPastHistory/:sap',
    component: PastHistoryComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'prescribeMed/:sap',
    component: PrescribeMedicinesComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'provideMedicine',
    component: ProvideMedicinesComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'addstock',
    component: AddStockComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'medicineList',
    component: MedicineListComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'ClickHere',
    component: ClickHereToProvideMedicinesComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'expiredMedicines',
    component: ExpiredMedicinesComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'patientDetails',
    component: PatientDetailsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'displayPatient/:sapid',
    component: DisplayPatientDetailsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'lowStockMedicines',
    component: LowStockMedicinesComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'removeStaff',
    component: RemoveStaffComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
    canActivate: [RouteGuardService]
  },
  {
    path:'**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
