import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private storagekey = 'tasks';

  private tasks: {title: string; completed: boolean}[] = [];

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
    }

    toggleTasks() {
        this.save();
    }
  
}
