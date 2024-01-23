import React, { Component } from "react";
import "./css/posts-box.css";
const postsBox = () => {
  return (
    <div className="Posts">
      <div className="Header">
        <p>Recent Posts</p>
      </div>
      <ul>
        <div>
          <h5>Takota McConner Says:</h5>
          <small>3 days ago</small>
          <h6>Did nothing today, just laid around and ate food #bestdayever</h6>
          <input type="text" placeholder="comment..." />
        </div>
        <div>
          <h6>Takota McConner Says:</h6>
          <small>4 days ago</small>
          <h6>Didn't do much today, just layed around and ate food #yolo</h6>
          <input type="text" placeholder="comment..." />
        </div>
        <div>
          <h6>Takota McConner Says:</h6>
          <small>7 days ago</small>
          <h6>
            Nothing accomplished today, just layed around and ate food
            #livingmybestlife
          </h6>
          <input type="text" placeholder="comment..." />
        </div>
        <div>
          <h6>Takota McConner Says:</h6>
          <small>8 days ago</small>
          <h6>Slept all day and ate a few meals #killingthegame</h6>
          <input type="text" placeholder="comment..." />
        </div>
        <div>
          <h6>Takota McConner Says:</h6>
          <small>12 days ago</small>
          <h6>
            Was taken to the vet - considering puking in my owners shoes.
            Opinions?
          </h6>
          <input type="text" placeholder="comment..." />
        </div>
      </ul>
    </div>
  );
};

export default postsBox;
