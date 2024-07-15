import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { AppRoutingModule } from '../app/app.routes';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { MessagesModule } from 'primeng/messages';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    DropdownModule,
    PaginatorModule,
    MessagesModule,
    MenubarModule,
    CalendarModule,
    InputTextareaModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    DropdownModule,
    PaginatorModule,
    MessagesModule,
    MenubarModule,
    CalendarModule,
    InputTextareaModule
  ]
})
export class SharedModule { }
