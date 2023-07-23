import React, { useState } from "react";
import { images } from "../../constants";
import "./Blog.css";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello, World!",
      content: "This is my first blog post.",
    },
    {
      id: 2,
      title: "React Hooks",
      content: "Using hooks in React makes state management easier.",
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, { ...newPost, id: Date.now() }]);
      setNewPost({
        title: "",
        content: "",
      });
    }
  };

  return (
    <div className="app__blog app__bg flex__center section__padding" id="blog">
      <div className="app__blog-content flex__center">
        <div className="app__blog-content_post">
          <h1 className="headtext__cormorant">{t("blog.heading")}</h1>
          <div className="app__blog-content">
            {posts.map((post) => (
              <div key={post.id} className="post">
                <h2 className="p__cormorant">{post.title}</h2>
                <p className="p__opensans">{post.content}</p>
              </div>
            ))}
          </div>
          <div className="app__blog-content_forum flex__center">
            <h2 className="p__cormorant">{t("blog.subheading")}</h2>
            <br />
            <form className="app__blog-content_form">
              <label className="p__opensans">
                {t("blog.username")}
                <br />
                <input
                  type="text"
                  name="title"
                  value={newPost.title}
                  onChange={handleInputChange}
                />
              </label>
              <label className="p__opensans">
                {t("content")}
                <br />
                <textarea
                  name="content"
                  value={newPost.content}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button
                type="button"
                className="custom__button"
                onClick={handleAddPost}
              >
                {t("blog.add")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
