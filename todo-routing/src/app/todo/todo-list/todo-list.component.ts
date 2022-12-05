import {Component, OnInit} from '@angular/core';
import {map, Observable, of} from 'rxjs';
import {Todo} from '../../core/todo';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../../shared/todo.service';

@Component({
  selector   : 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls  : ['./todo-list.component.css']
})
export class TodoListComponent
  implements OnInit {

  todos$: Observable<Todo[]> = of([]);

  constructor(private route: ActivatedRoute,
              private service: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.todos$ =
      this.route.data.pipe(
        map(data => data['todo'])
      );
  }

  onDelete(todo: Todo) {
    this.service.delete(todo).subscribe(
      () => this.router.navigate(['.', { relativeTo : this.route } ])
    );
  }
}
