import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  tasks: { title: string; completed: boolean }[] = [];
  newTask = '';

  constructor(private taskService: TasksService) {
    this.tasks = this.taskService.getTasks(); // ✅ now works
  }

  addTask() {
    if (!this.newTask.trim()) return;

    this.taskService.addTask(this.newTask);
    this.newTask = '';
  };

  update() {
    this.taskService.toggleTasks();
  }
}

