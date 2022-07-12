import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { MaterialModule } from '../../material.module';
import { TableComponent } from 'src/app/shared/table/table.component';

@NgModule({
  declarations: [CrudComponent, TableComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MaterialModule
  ]
})
export class CrudModule { }
