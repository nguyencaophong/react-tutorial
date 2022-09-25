import { useEffect, useState } from "react";



const tabs = ['posts','comments','albums'];
function Content(){
    const[title,setTitle] = useState('');
    const[posts,setPosts] = useState([]);
    const [type,setType] = useState('posts');
    useEffect(() =>{
        console.log('Type change',type);
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(value => {return value.json()})
        .then(data =>{
            setPosts(data);
        })
    },[type]);

    // useEffect(() => {
    //     const hadleScroll = () => {
    //         if(window.scrollY>=200){
    //             setGoToTop(true);
    //         }
    //         else{
    //             setGoToTop(false);
    //         }
    //     }

    //     window.addEventListener('scroll',hadleScroll)
    // },[])

    return (
        <div>
            {tabs.map(tab => (
                <button key={tab}
                    style={type===tab ?{
                        color: '#fff',
                        backgroundColor:'#333'
                    }:{}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <ul>
                
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}


export default Content;
