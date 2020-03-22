import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../../module/custom-material/custom-material.module';
import {PageTitleModule} from '../page-title/page-title.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LookuopEeventsTableComponent, EditClientDetailsDialogComponent } from './lookup-events-table/events-table.component';
import { LookupGoalEventsComponent } from './lookup-events/lookup-goal-events.component';
import { CreateGoalEventComponent } from './create-goal-event/create-goal-event.component';

@NgModule({
  declarations: [LookupGoalEventsComponent, LookuopEeventsTableComponent, EditClientDetailsDialogComponent, CreateGoalEventComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    PageTitleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [EditClientDetailsDialogComponent]
})
export class ClientModule { }
