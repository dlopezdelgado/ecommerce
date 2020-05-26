import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderContentComponent } from './components/loader-content/loader-content.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [LoaderContentComponent, LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderContentComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
