import React from 'react';
import { Link } from 'react-router-dom';

export default function PostsList({ posts }) {
  return posts.map(p => (
    <Link key={p.text} to={`/posts/${p.id}`}>
      <div>{p.title}</div>
    </Link>
  ))
}