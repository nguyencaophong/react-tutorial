import { useEffect, useState } from "react";



// const tabs = ['posts','comments','albums'];
function Content(){
    const[title,setTitle] = useState('');
    const[posts,setPosts] = useState([]);
    // const [type,setType] = useState('posts');

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => {return value.json()})
        .then(data =>{
            setPosts(data);
        })
    },[])

    return (
        <div>
            {/* {tabs.map(tab =>(
                <button key={tab} onClick={() => setType(tab)}>{tab}</button>
            ))} */}

            <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

        </div>
    )
}


export default Content;
