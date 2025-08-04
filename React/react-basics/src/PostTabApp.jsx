///dependency array example

import { useEffect, useState } from "react";

export default function PostTabApp() {
  const [currentPost, setCurrentPost] = useState(1);
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/" + currentPost).then(
      async (res) => {
        const data = await res.json();
        setPostData(data);
        setLoading(false);
      }
    );
  }, [currentPost]);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => setCurrentPost(num)}
          style={{ color: currentPost == num ? "red" : "black", margin: 5 }}
        >
          Post #{num}
        </button>
      ))}

      {postData && (
        <div style={{ marginTop: 20 }}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h3>{postData.title}</h3>
              <p>{postData.body}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
