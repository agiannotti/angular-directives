import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/fontawesome-free/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faCoffee = faCoffee;
  faAddressCard = faAddressCard;
  viewMode = 'map';
  courses;
  canSave = true;

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  // change detection can empower responsive data movement
  onChange(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
      { id: 4, name: 'course4' },
      { id: 5, name: 'course5' },
      { id: 6, name: 'course6' },
      { id: 7, name: 'course7' },
      { id: 8, name: 'course8' },
      { id: 9, name: 'course9' },
    ];
  }

  // utilizing trackBy can allow you to only render necessary elements to the DOM tree
  // Trackby Id in many instances will speed up runtime, check dev tools and look for purple highlights
  // for instances of angular reloading the DOM tree on click

  // utilize trackBy for large lists with complex markup

  trackCourse(index, course) {
    course ? course.id : undefined;
  }

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith',
    },
  };
}
