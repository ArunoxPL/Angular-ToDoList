import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: object[];
  todoTitle: string;
  idForTodo: number;

  //here we declare our classes
  constructor() { }

  ngOnInit(): void {  //constructor
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        'id': 1,
        'title': 'Finish Angular Screencast',
        'complited': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'Take over the world',
        'complited': false,
        'editing': false,
      },
      {
        'id': 3,
        'title': 'One mor thing',
        'complited': false,
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
      complited: false,
      editing: false
    })

    this.todoTitle = '';
    this.idForTodo++;
  }
}
