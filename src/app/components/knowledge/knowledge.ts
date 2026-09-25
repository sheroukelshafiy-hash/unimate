import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-knowledge',
  styleUrl: './knowledge.css',
  templateUrl: './knowledge.html',
})
export class Knowledge {

   sources = [
    {
      id: 1,
      name: 'Angular Course',
      type: 'PDF',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Database Notes',
      type: 'PDF',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Math Resources',
      type: 'Link',
      status: 'Pending'
    }
  ];

  deleteSource(id: number) {

  this.sources = this.sources.filter(
    source => source.id !== id
  );

}

newSource = {
  name: '',
  type: 'PDF',
  status: 'Pending'
};

addSource() {

  if (this.newSource.name.trim() === '') {
    alert('Please enter source name');
    return;
  }

  const source = {
    id: this.sources.length + 1,
    name: this.newSource.name,
    type: this.newSource.type,
    status: this.newSource.status
  };

  this.sources.push(source);

  this.newSource = {
    name: '',
    type: 'PDF',
    status: 'Pending'
  };

}
editingSourceId: number | null = null;

editSource(source: any) {

  this.newSource = {
    name: source.name,
    type: source.type,
    status: source.status
  };

  this.editingSourceId = source.id;

}

updateSource() {

  if (this.newSource.name.trim() === '') {
    alert('Please enter source name');
    return;
  }

  const source = this.sources.find(
    source => source.id === this.editingSourceId
  );

  if (source) {
    source.name = this.newSource.name;
    source.type = this.newSource.type;
    source.status = this.newSource.status;
  }

  this.editingSourceId = null;

  this.newSource = {
    name: '',
    type: 'PDF',
    status: 'Pending'
  };

}
}
