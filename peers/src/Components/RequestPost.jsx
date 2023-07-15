import React from "react";

function RequestPost() {
  const handleAccept = () => {
    // handle accept logic
  };

  const handleDelete = () => {
    // handle delete logic
  };
  const posts = [
    { src: "https://i.pinimg.com/736x/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg", name: "Tony Stark" },
    { src: "url2", name: "Name 2" },
    { src: "url3", name: "Name 3" },
  ];

  const Post = ({ src, name }) => {
    return (
      <div className="flex flex-col  gap-1 w-full h-30 p-2 bg-purple-900 rounded-xl justify-between">
        <div className="flex items-center justify-start gap-8 p-2">
          <div>
            <img
              src={src}
              alt=""
              className="w-12 h-12 rounded-full bg-white"
            />
          </div>

          <div>{name}</div>
        </div>

        <div className="flex h-12 gap-2 p-1 justify-between ">
          <button
            className="border-2 p-1 w-[50%] bg-green-300 rounded-xl"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="border-2 p-1 w-[50%] bg-red-300 rounded-xl"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* <div className="flex flex-col gap-1">
        <Post src="url1" name="Name 1" />
        <Post src="url2" name="Name 2" />
        <Post src="url3" name="Name 3" />
      </div> */}
       <div className="flex flex-col gap-1">
        {posts.map((post, index) => (
          <Post key={index} src={post.src} name={post.name} />
        ))}
      </div>
    </>
  );
}


export default RequestPost;