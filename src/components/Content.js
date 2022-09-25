import { useEffect, useState } from "react";



const tabs = ['posts','comments','albums'];
function Content(){
    const[title,setTitle] = useState('');
    const[posts,setPosts] = useState([]);
    const [type,setType] = useState('posts');
    const [goToTop,setGoToTop] =useState(false);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(value => {return value.json()})
        .then(data =>{
            setPosts(data);
        })
    },[type]);

    useEffect(() => {
        const hadleScroll = () => {
            // ** Trường hợp này setGotoTop(true) sẽ không set lại nhiều lần
            // ** vì js có chế độ strickMode (so sánh ===) 
            // ** không khác nhau thì component sẽ không re-render lại
            window.scrollY>=200 ? setGoToTop(true) : setGoToTop(false);
        }

        window.addEventListener('scroll',hadleScroll)
        
        // ** Cleanup function
        return () =>{
            window.removeEventListener('scroll',hadleScroll)
        }
    },[])
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
            
            {goToTop && (
                <button style={{
                    position:'fixed',
                    right:20,
                    bottom:20
                }}
                >Go to Top</button>
            )}
        </div>
    )
}


export default Content;
