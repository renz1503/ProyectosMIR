import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
 const [posts, setPosts] = useState([]);
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(false);

 useEffect(() => {
    setLoading(true); 
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts',
      timeout: 1000,
    })
    .then(({data}) => setPosts(data))
    .catch((error) => setError(true))
    .finally(() => {
      setLoading(false);
    })
  }, [])

  if(loading) return <p className="message">Cargando...</p>
  if(error) return <p className="message">Parece que algo salió mal...</p>

  return (
    <div className="App">
      {posts.map(post => {
        return (
          <article key={post.id}>
            <p className="titleText">{post.title.toUpperCase()}</p>
            <p className="textBody">{post.body}</p>
          </article>
        )}
      )}
    </div>
  );
}

export default App;
