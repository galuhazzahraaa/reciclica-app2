import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';

@NgModule({
  declarations: [PickupCallCardComponent],
  imports: [CommonModule],
  exports: [PickupCallCardComponent] // Ekspor komponen agar bisa digunakan di modul lain
})
export class PickupCallCardModule {}
