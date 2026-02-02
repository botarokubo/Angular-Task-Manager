import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService, Task } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  tasks: Task[] = [];
  newTask = '';
  filter: 'all' | 'active' | 'completed' = 'all';

  constructor(private taskService: TasksService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (!this.newTask.trim()) return;
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  };

  update() {
    this.taskService.toggleTasks();
  };

  delete(index: number) {
    this.taskService.deleteTask(index);
  };

  clearCompleted() {
    this.taskService.clearCompleted();
  };

  get filteredTasks(){
    if (this.filter === 'active') return this.tasks.filter(t => !t.completed);
    if (this.filter === 'completed') return this.tasks.filter(t => t.completed);
    return this.tasks;
  }

  get totalCount(): number {
    return this.tasks.length;
  }

  get activeCount(): number {
    return this.tasks.filter(t => !t.completed).length;
  }

  get completedCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }
}

