import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoResolver} from './resolvers/todo.resolver';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      todo: TodoResolver
    }
  },
]


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
