import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  tasks: { title: string; completed: boolean }[] = [
    { title: 'Test Task', completed: false}
  ];

  addTask() {
    this.tasks.push({
      title: 'Task' + (this.tasks.length + 1),
      completed: false
    });
  }
}
