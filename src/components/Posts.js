import React from "react";

function Posts() {
  return (
    <>
      <form>
        <input id="postTitle" />
        <select id="postAuthor">
          <option>User 1</option>
          <option>User 2</option>
          <option>User 3</option>
        </select>
        <textarea id="postContent"></textarea>
        <button type="submit">Save Post</button>
      </form>


      <div className="posts-list">
        <div className="post">
          <a href="/posts/1" className="button">
            View
          </a>

          <button>👍</button>
          <button>❤️</button>
          <button>🚀</button>
          <button>👀</button>
          <button>0</button>
        </div>
      </div>
    </>
  );
}

export default Posts;
