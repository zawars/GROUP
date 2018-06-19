import { UtilityService } from './services/utility.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
// import { SpreadsheetComponentComponent } from './components/spreadsheet-component/spreadsheet-component.component';
import { ApiService } from './services/api-service.service';

@NgModule({
    declarations: [
        AppComponent,
        // SpreadsheetComponentComponent
    ],
    imports: [
        BrowserModule,
        SpreadSheetsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [UtilityService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
