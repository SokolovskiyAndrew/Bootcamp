import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterWithIconComponent } from './counter-with-icon.component';

@NgModule({
  declarations: [CounterWithIconComponent],
  imports: [CommonModule],
  exports: [CounterWithIconComponent]
})
export class CounterWithIconModule {}
