import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

const MODULOS = [
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatToolbarModule,
  MatInputModule,
  MatTooltipModule,

]

@NgModule({
  declarations: [],
  imports: [MODULOS],
  exports: [MODULOS]
})
export class MaterialModule { }
