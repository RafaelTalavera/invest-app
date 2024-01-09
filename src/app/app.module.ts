import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { WorkPlaceComponent } from './work-place/work-place.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './work-place/form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { WorkerComponent } from './worker/worker.component';
import { OrganizationalComponent } from './organizational/organizational.component';
import { WorkEquipmentComponent } from './work-equipment/work-equipment.component';
import { FormEventComponent } from './events/form-event.component';



const routes: Routes = [
 
  { path: 'work-place', component: WorkPlaceComponent },
  { path: 'form', component: FormComponent},
  { path: 'events', component: EventsComponent},
  { path: 'worker', component: WorkerComponent},
  { path: 'organizational', component: OrganizationalComponent},
  { path: 'workEquiment', component: WorkEquipmentComponent},
  { path: 'formEvent', component: FormEventComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    WorkPlaceComponent,
    FormComponent,
    EventsComponent,
    OrganizationalComponent,
    WorkEquipmentComponent,
    WorkerComponent,
    FormEventComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
