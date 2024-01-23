import React, { Component } from "react";
import "./css/posts-box.css";
const postsBox = () => {
  return (
    <div className="Posts">
      <h2>Recent Posts</h2>
      <div>
        <h4>Takota McConner Says:</h4>
        <p>3 days ago</p>
        <h5>Did nothing today, just laid around and ate food #bestdayever</h5>
      </div>
    </div>
  );
};

export default postsBox;
