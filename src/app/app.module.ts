import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserIPComponent } from "./components/user-ip/user-ip.component";

@NgModule({
    declarations: [
        AppComponent,
        UserIPComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        UserIPComponent,
    ]
})
export class AppModule { }
