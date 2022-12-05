import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../core/todo';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.url);
  }

  delete(todo: Todo) {
    const url = `${environment.url}/${todo.id}`;
    return this.http.delete<void>(url);
  }

  save(todo: Todo) {
    return this.http.post<Todo[]>(environment.url, todo, this.httpOptions);
  }
}
