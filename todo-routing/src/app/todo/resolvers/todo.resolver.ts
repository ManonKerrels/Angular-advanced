import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Todo} from '../../core/todo';
import {TodoService} from '../../shared/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<Todo[]> {

  constructor(private service: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> {
    return this.service.getAll();
  }
}
