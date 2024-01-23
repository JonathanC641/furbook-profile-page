import React, { Component } from "react";
import "./css/posts-box.css";
const postsBox = () => {
  return (
    <div className="Posts">
      <div className="Header">
        <div>Recent Posts</div>
      </div>
      <div>
        <h5>Takota McConner Says:</h5>
        <p>3 days ago</p>
        <h5>Did nothing today, just laid around and ate food #bestdayever</h5>
        <input type="text" placeholder="comment..." />
      </div>
      <div>
        <h5>Takota McConner Says:</h5>
        <p>4 days ago</p>
        <h5>Didn't do much today, just layed around and ate food #yolo</h5>
        <input type="text" placeholder="comment..." />
      </div>
      <div>
        <h5>Takota McConner Says:</h5>
        <p>7 days ago</p>
        <h5>
          Nothing accomplished today, just layed around and ate food
          #livingmybestlife
        </h5>
        <input type="text" placeholder="comment..." />
      </div>
      <div>
        <h5>Takota McConner Says:</h5>
        <p>8 days ago</p>
        <h5>Slept all day and ate a few meals #killingthegame</h5>
        <input type="text" placeholder="comment..." />
      </div>
      <div>
        <h5>Takota McConner Says:</h5>
        <p>12 days ago</p>
        <h5>
          Was taken to the vet - considering puking in my owners shoes.
          Opinions?
        </h5>
        <input type="text" placeholder="comment..." />
      </div>
    </div>
  );
};

export default postsBox;
