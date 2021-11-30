import React, { useState } from 'react';
import { API_BASE_URL } from '../../constants/apiConstants';

function NewPost () {
    const [title,setTitle]=useState("");
    const [ content,setContent]=useState("");

    const handleSubmitClick = () => {
        const post = {
            title: title,
            content: content
            
            }
        fetch(`${API_BASE_URL.root}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(post)
        })
        .then(`Post is create`)
        .catch(err=>alert(err))
    }

    return (
        <div className="app" >
        <form style={{display:"justify-content-center"}}>
          <div className="form-input">
            <input 
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={e=>setTitle(e.target.value)}
            />
          </div>
          <div className="form-input">
            <textarea
              placeholder="content"
              name="content"
              cols="30"
              rows="10"
              value={content}
              onChange={e=>setContent(e.target.value)}
            >
              
            </textarea>
          </div>

          <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Submit
                </button>
        </form>
        </div>
    )
}
export default NewPost