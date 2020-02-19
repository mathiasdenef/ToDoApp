import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TodoNewComponent } from './components/todo-new/todo-new.component';
import { FormsModule } from '@angular/forms';
import { ToDoEffects } from '../store/effects/todo.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule
    ],
    declarations: [
        TodoTableComponent,
        TodoCardComponent,
        TodoNewComponent,
    ],
    exports: [
        TodoTableComponent,
        TodoCardComponent,
        TodoNewComponent,
    ],
    providers: []
})
export class TodoModule { }
