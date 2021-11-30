import React from 'react';


export function BlogPost() {
  const initialState = {
    title: '',
    content: '',
    posts: [],
    message: undefined
}

  console.log(initialState)
  return (
    <div id="blogPost-component">
      <table className="table">
        <thead className="table-blue">
          <tr>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {initialState.posts.map(post => {
            return (
              <tr key={post.id}>
                <td>
                  {post.title}
                </td>
                <td>
                  {post.content}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button
                    type="submit"
                    className="btn btn-primary"
                    
                >
                    Create new post
                </button>
    </div>
  )
        }


        



