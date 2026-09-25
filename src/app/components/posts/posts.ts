import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule ],
  selector: 'app-posts',
  styleUrl: './posts.css',
  templateUrl: './posts.html',
})
export class Posts {

  posts = [
    {
      id: 1,
      title: 'How to learn Angular?',
      author: 'Ahmed Ali',
      status: 'Published'
    },
    {
      id: 2,
      title: 'Best resources for programming',
      author: 'Mona Mohamed',
      status: 'Pending'
    },
    {
      id: 3,
      title: 'Project ideas for students',
      author: 'Ali Hassan',
      status: 'Published'
    }
  ];

  newPost = {
  title: '',
  author: '',
  status: 'Pending'
};
addPost() {

  if (
    this.newPost.title.trim() === '' ||
    this.newPost.author.trim() === ''
  ) {
    alert('Please enter all post data');
    return;
  }

  const post = {
    id: this.posts.length + 1,
    title: this.newPost.title,
    author: this.newPost.author,
    status: this.newPost.status
  };

  this.posts.push(post);

  this.newPost = {
    title: '',
    author: '',
    status: 'Pending'
  };

}
  deletePost(id: number) {

  this.posts = this.posts.filter(
    post => post.id !== id
  );
}
editingPostId: number | null = null;

editPost(post: any) {

  this.newPost = {
    title: post.title,
    author: post.author,
    status: post.status
  };

  this.editingPostId = post.id;

}
updatePost() {

  if (
    this.newPost.title.trim() === '' ||
    this.newPost.author.trim() === ''
  ) {
    alert('Please enter all post data');
    return;
  }

  const post = this.posts.find(
    post => post.id === this.editingPostId
  );

  if (post) {
    post.title = this.newPost.title;
    post.author = this.newPost.author;
    post.status = this.newPost.status;
  }

  this.editingPostId = null;

  this.newPost = {
    title: '',
    author: '',
    status: 'Pending'
  };

}

}
