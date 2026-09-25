import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {

  projects = [
    {
      id: 1,
      name: 'UniMate',
      owner: 'Ahmed Ali',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Smart Library',
      owner: 'Mona Mohamed',
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Study Hub',
      owner: 'Ali Hassan',
      status: 'Active'
    }
  ];
  deleteProject(id: number) {
  this.projects = this.projects.filter(
    project => project.id !== id
  );
}
newProject = {
  name: '',
  owner: '',
  status: 'Active'
};
addProject() {

  if (
    this.newProject.name.trim() === '' ||
    this.newProject.owner.trim() === ''
  ) {
    alert('Please enter all project data');
    return;
  }

  const project = {
    id: this.projects.length + 1,
    name: this.newProject.name,
    owner: this.newProject.owner,
    status: this.newProject.status
  };

  this.projects.push(project);

  this.newProject = {
    name: '',
    owner: '',
    status: 'Active'
  };

}
editingProjectId: number | null = null;
editProject(project: any) {

  this.newProject = {
    name: project.name,
    owner: project.owner,
    status: project.status
  };

  this.editingProjectId = project.id;

}
updateProject() {

  if (
    this.newProject.name.trim() === '' ||
    this.newProject.owner.trim() === ''
  ) {
    alert('Please enter all project data');
    return;
  }

  const project = this.projects.find(
    project => project.id === this.editingProjectId
  );

  if (project) {
    project.name = this.newProject.name;
    project.owner = this.newProject.owner;
    project.status = this.newProject.status;
  }

  this.editingProjectId = null;

  this.newProject = {
    name: '',
    owner: '',
    status: 'Active'
  };

}
}
