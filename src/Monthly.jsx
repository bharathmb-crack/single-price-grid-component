import React from "react";
import "./Monthly.css";

const Monthly = () => {
  return (
    <div className="monthly">
      <div className="button_subscription">
        <h3>Monthly Subscription</h3>
        <span>
          <h1>$23</h1> <p>per month</p>
        </span>
        <p>Full access for less than $1 a day</p>
        <button>sign Up</button>
      </div>
      <div className="content">
        <h3>Why us</h3>
        <p>
          Tutorial by industry experts peer & expert code review Coding
          exercises Access to our GitHub repso community forum Flashcard decks
          New videos every weeek
        </p>
      </div>
    </div>
  );
};

export default Monthly;
