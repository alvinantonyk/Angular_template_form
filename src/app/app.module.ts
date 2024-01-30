import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations : [AppComponent],
    imports:[BrowserModule,FormsModule,CommonModule,ReactiveFormsModule],
    bootstrap:[AppComponent]

})
export class AppModule{}