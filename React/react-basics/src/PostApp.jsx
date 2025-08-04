import { useState } from "react";

export default function PostApp() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post) => (
    <PostComponent
      image={post.image}
      name={post.name}
      subTitle={post.subTitle}
      postTime={post.postTime}
      postText={post.postText}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Sakibul Alam",
        image:
          "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        subTitle: "12876 followers",
        postTime: "12m ago",
        postText:
          "Excited to share my latest augmented reality project! 🚀 Check out the demo above.",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addPost} style={{ margin: 20 }}>
        Add Post
      </button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: 800,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          {postComponents}
        </div>
      </div>
    </div>
  );
}

const style = {
  width: "100%",
  maxWidth: 600,
  backgroundColor: "white",
  borderRadius: 10,
  border: "1px solid gray",
  padding: 20,
};

function PostComponent(props) {
  const { image, name, subTitle, postTime, postText } = props;
  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={image}
          alt={`${name}'s profile`}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div style={{ fontSize: 13 }}>
          <b>{name}</b>
          <div>{subTitle}</div>
          {postTime && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "gray",
                gap: 4,
              }}
            >
              <div>{postTime}</div>
              <img
                alt="globe icon"
                src="https://media.istockphoto.com/id/1471152163/vector/planet-earth-globe-world-silhouette-black-and-white-icon-vector.jpg?s=612x612&w=0&k=20&c=FKt5bfJAgyFDESZUu7vZPw6-cbhaa6vmyn6Vtc-D7AM="
                style={{ width: 12, height: 12 }}
              />
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 15, marginTop: 10 }}>
        <p>{postText}</p>
      </div>
    </div>
  );
}
