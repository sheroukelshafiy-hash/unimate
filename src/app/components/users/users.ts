import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {

  users = [
    {
      id: 1,
      name: 'Ahmed Ali',
      email: 'ahmed@gmail.com',
      role: 'Student'
    },
    {
      id: 2,
      name: 'Mona Mohamed',
      email: 'mona@gmail.com',
      role: 'Student'
    },
    {
      id: 3,
      name: 'Ali Hassan',
      email: 'ali@gmail.com',
      role: 'Student'
    }
  ];
  newUser = {
  name: '',
  email: '',
  role: 'Student'
};
editingUserId: number | null = null;
editUser(user: any) {

  this.newUser = {
    name: user.name,
    email: user.email,
    role: user.role
  };

  this.editingUserId = user.id;

}
updateUser() {

  if (
    this.newUser.name.trim() === '' ||
    this.newUser.email.trim() === ''
  ) {
    alert('Please enter all user data');
    return;
  }

  const user = this.users.find(
    user => user.id === this.editingUserId
  );

  if (user) {
    user.name = this.newUser.name;
    user.email = this.newUser.email;
    user.role = this.newUser.role;
  }

  this.editingUserId = null;

  this.newUser = {
    name: '',
    email: '',
    role: 'Student'
  };

}
addUser() {
  if(!this.newUser.name || !this.newUser.email){
    alert("please enter your data")
    return;
  }

  const user = {
    id: this.users.length + 1,
    name: this.newUser.name,
    email: this.newUser.email,
    role: this.newUser.role
  };

  this.users.push(user);

  this.newUser = {
    name: '',
    email: '',
    role: 'Student'
  };

}
  deleteUser(id:number){
    this.users=this.users.filter(user=> user.id !=id)
  }

}
