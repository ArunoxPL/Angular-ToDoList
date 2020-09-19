import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/Todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  beforeEditCache: string;

  //here we declare our classes
  constructor() { }

  ngOnInit(): void {  //constructor
    this.beforeEditCache = '';
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        'id': 1,
        'title': 'Finish Angular Screencast',
        'completed': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'Take over the world',
        'completed': false,
        'editing': false,
      },
      {
        'id': 3,
        'title': 'One mor thing',
        'completed': false,
        'editing': false,
      },
    ];
  }

  addTodo(): void {
    if(this.todoTitle.trim().length == 0)
    {
      return;
    }
    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false
    })

    this.todoTitle = '';
    this.idForTodo++;
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (todo.title.trim().length == 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id != id);
  }
}



