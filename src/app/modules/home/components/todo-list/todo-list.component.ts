import { Component } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';
import { withDisabledInitialNavigation } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList> = [
    {task: "Nova task 1", checked: true},
    {task: "Nova task 2", checked: false},
  ];

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Deseja deletar tudo?");
    if(confirm) {
      this.taskList = [];
    }
  }

}