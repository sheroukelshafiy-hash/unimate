import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects = signal([
  { id: 1, name: 'Shorouk Atef',email:'shorouk@gmail.com', role: 'Frontend Developer', skills: 'Angular, TypeScript, Bootstrap', status: 'Available for team' },
  { id: 2, name: 'Menna Mohamed',email:'menna@gmail.com', role: 'Backend Developer', skills: 'Node.js, Express, MongoDB', status: 'Looking for Frontend' },
  { id: 3, name: 'Sarah Khaled',email:'sarah@gmail.com', role: 'UI/UX Designer', skills: 'Figma, Adobe XD', status: 'Available for team' },
  { id: 4, name: 'Fatma Ammar',email:'fatma@gmail.com', role: 'Full Stack Developer', skills: 'React, Node.js, Tailwind', status: 'Looking for team' },
  { id: 5, name: 'Nouran Tarek',email:'nouran@gmail.com', role: 'Frontend Developer', skills: 'Angular, RxJS, SCSS', status: 'Available for team' },
  { id: 6, name: 'Habiba Hassan',email:'habiba@gmail.com', role: 'Mobile Developer', skills: 'Flutter, Dart, Firebase', status: 'Looking for partner' }
]);

  searchText = signal<string>('');
  selectedSort = signal<string>('default');

  filteredProjects = computed(() => {
    const search = this.searchText().toLowerCase();
    const sort = this.selectedSort();

    let result = this.projects().filter(project =>
      project.name.toLowerCase().includes(search) ||
      project.role.toLowerCase().includes(search)
    );
    if (sort === 'title-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'title-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === 'id-newest') {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  });
}



