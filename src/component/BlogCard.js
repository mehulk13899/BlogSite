import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './BlogCard.css'
const BlogCard = ({ blog }) => {
    console.log(blog);
    return (
        <div>
            <div class="card m-5" style={{ width: '18rem', overflow: 'hidden' }}>
                <div class="image-top-container">
                    <img class="card-img-top" src={blog.image} alt="Card image cap" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{blog.title}</h5>
                    <p class="card-text">{blog.description}</p>
                    <a href={blog.url} class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>


    )
}

export default BlogCard
