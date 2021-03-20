import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    selectSearchInput,
    selectSignedIn,
    setBlogData,
} from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './blog.css';
import BlogCard from './BlogCard';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

//12cd48a5c0979d1df564856e09ebdcce
const Blog = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(selectSearchInput);
    const signIn = useSelector(selectSignedIn);
    const blogUrl = `https://gnews.io/api/v4/search?q=${searchValue}&token=12cd48a5c0979d1df564856e09ebdcce`;
    console.log(blogUrl);
    const [Blogs, setBlogs] = useState();
    const [loading, setloading] = useState(true);
    useEffect(() => {
        axios
            .get(blogUrl)
            .then((response) => {
                dispatch(setBlogData(response.data))
                setBlogs(response.data)
                setloading(false)
            })

    }, [searchValue])
    return (
        signIn ?
            <div class='container'>
                <div class="grid-container">
                    {
                        Blogs ? Blogs.articles.map(blog => (
                            <BlogCard blog={blog}></BlogCard>
                        )) : <div>Loading</div>
                    }
                </div>
            </div> : ""
    )
}

export default Blog
