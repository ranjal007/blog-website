import React,{useEffect,useState} from 'react'
import Cards from './Cards'
import { Link, useHistory, useParams } from 'react-router-dom';

export default function BlogPage() {
    const axios = require('axios');
    const history = useHistory()
    const [blogs,setBlogs] = useState([])
    const getAllBlogs = () => {
        axios.get('https://webicoun-backend-hajkn.run-ap-south1.goorm.io/blogcat')
            .then(function (response) {
                // handle success
                setBlogs(response.data.blogs);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            
    }

    useEffect(() => {
       getAllBlogs()
       
    }, [])

    function getMyBlog(blogId) {
        history.push(`/blog/${blogId}`)
    }
    
    return (
        <div style={{
             display: 'flex',justifyContent:'space-around',marginTop:'10%',
      }}>
            {blogs.map((each,index)=>
                    <Cards keys={index} data={each} onClick={() => getMyBlog(each._id)}/>
            )}
            
        </div>
    )
}
