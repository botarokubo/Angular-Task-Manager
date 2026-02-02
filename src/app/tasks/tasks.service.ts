import { Injectable } from '@angular/core';

export type Task = { title: string; completed: boolean };

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private storagekey = 'tasks';
  private tasks: Task[] = [];

  constructor() {
    const saved = localStorage.getItem(this.storagekey);
    this.tasks = saved? JSON.parse(saved) : [];
    }

    private save() {
        localStorage.setItem(this.storagekey, JSON.stringify(this.tasks));
    }

    getTasks() {
        return this.tasks;
    }

    addTask(title:string) {
        this.tasks.push({
            title,
            completed: false
        });
        this.save();
    }

    toggleTasks() {
        this.save();
    }

    deleteTask(index: number) {
        this.tasks.splice(index, 1);
        this.save();
    }

    clearCompleted() {
        this.tasks = this.tasks.filter(t => !t.completed);
        this.save();
    }
}
