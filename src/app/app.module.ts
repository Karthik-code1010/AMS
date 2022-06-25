


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddApplicationDetailsComponent } from './add-application-details/add-application-details.component';


import { FormlyFieldCustomInput } from 'src/formly/formly-field-custom-input';


import { AccountsComponent } from './modules/pages/accounts/accounts.component';
import { AccountDialogComponent } from './modules/pages/account-dialog/account-dialog.component';
import { CreateAccountComponent } from './modules/pages/create-account/create-account.component';
import { CreateAccountDetailsComponent } from './modules/pages/create-account-details/create-account-details.component';
import { CreateAccountThemeComponent } from './modules/pages/create-account-theme/create-account-theme.component';
import { ColumnDialog } from './modules/pages/column-dialog/column-dialog';

import { FormlyFieldCustomSelect } from 'src/formly/formly-field-custom-select';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './meterial/meterial.module';

import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';


import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';


import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';
import { FormlyFieldCustomDatePicker } from 'src/formly/formly-field-custom-datepicker';
import { FormlyFieldCustomFile } from 'src/formly/formly-field-custom-file';

import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    FormlyFieldCustomFile ,
    FormlyFieldCustomDatePicker,
    FormlyFieldCustomSelect,
    ColumnDialog,
    AppComponent,
    AddApplicationDetailsComponent,
    FormlyFieldCustomInput,

    AccountsComponent,
    AccountDialogComponent,
    CreateAccountComponent,
    CreateAccountDetailsComponent,
    CreateAccountThemeComponent,


   
   
  ],
  imports: [
    MaterialFileInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ToastrModule.forRoot(), 
    
    FlexLayoutModule,
    MatFormFieldModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MeterialModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ 
      extras: { lazyRender: true },
     
      types: [
     
      { name: 'inno-input', component: FormlyFieldCustomInput}, //
      { name: 'inno-select', component: FormlyFieldCustomSelect}, 
      { name: 'inno-date', component: FormlyFieldCustomDatePicker}, 
      { name: 'inno-file', component:  FormlyFieldCustomFile }, 
      
    ],
      wrappers: [
       
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ], 
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
