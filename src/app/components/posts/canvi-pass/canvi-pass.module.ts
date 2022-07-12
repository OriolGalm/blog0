import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanviPassRoutingModule } from './canvi-pass-routing.module';
import { CanviPassComponent } from './canvi-pass.component';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CanviPassComponent],
  imports: [
    CommonModule,
    CanviPassRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CanviPassModule { }
