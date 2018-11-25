import { NgModule } from '@angular/core';
// For using ngFor in underneath components
import { CommonModule } from '@angular/common'
// Child components
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';

@NgModule({
    declarations: [
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class RentalModule {

}