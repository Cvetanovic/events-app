import React from "react";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="error-content">
        <h2 className="error-title">Ooops!</h2>
        <span className="error-text blink">
          The Page You Requested Could Not Be Found
        </span>
        <div className="error-image">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d005cb5d-e45b-4439-9e6f-3e01d3ed3f3d/da3638j-4f356b74-e725-46e7-9c77-9f6ecdce0062.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwMDVjYjVkLWU0NWItNDQzOS05ZTZmLTNlMDFkM2VkM2YzZFwvZGEzNjM4ai00ZjM1NmI3NC1lNzI1LTQ2ZTctOWM3Ny05ZjZlY2RjZTAwNjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mp0f0WUe9hcVYRbffwagwGBdTjROAHxj4uaCChd_Jz8"
            alt="error-img"
          />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
