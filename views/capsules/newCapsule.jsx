import React, { useState, useEffect } from "react";
const Def = require("../default");

function NewForm() {
  const [status, setStatus] = useState('');


  const handleSubmit = (e) => {
    console.log("Form submitted")
    e.preventDefault();
  }
  
  const handleDraft = () => {
    setStatus("draft");
    console.log({status})
    console.log('hi')
  };

  const handleLock = () => {
    setStatus("locked");
    console.log("Status set to locked:", status);
    console.log('bye')
  };

  return (
    <Def title="Add a New Capsule">
      <body className="new">
        <main>
          <h1>Add a New Capsule</h1>
          <form method="POST" action="/capsules" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Capsule Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="capsuleImage">Capsule Lock Image</label>
              <input className="form-control" id="capsuleImage" name="capsuleImage" />
              <p>leave blank if no image is found</p>
            </div>
            {/* <div className="form-group">
              <label htmlFor="date">Encapsulation Date</label>
              <input className="form-control" id="date" name="date" />
            </div> */}
            <div className="form-group">
              <label htmlFor="note">Note to Future Self</label>
              <textarea
                className="form-control tall"
                id="note"
                name="note"
                placeholder="Enter your note..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input type="file" className="form-control" id="image" name="image" accept="image/png, image/jpg"/>
              <p>To add multiple images hold CTRL when selecting.</p>
              <p>leave blank if no image is found</p>
            </div>
            <div className="radio-buttons">
              {/* <label className="radio-label">
                <input
                  type="radio"
                  name="status"
                  // onClick={handleDraft}
                  checked={status === "draft"} // Ensures button is checked when status is "draft"
                />
                <span className="btn btn-primary">Save as Draft</span>
              </label> */}
              <label className="radio-label">
                <input
                  type="radio"
                  name="status"
                  onClick={()=>handleLock()}
                  // checked={status === "locked"} // Ensures button is checked when status is "locked"
                />
                <span className="btn btn-primary">Lock Capsule</span><br/>
                <p>Check box to lock</p>
              </label>
            </div>
            <p>Once the capsule is locked, no modifications can be done. Capsule will unlock in 2 years</p>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </form>
        </main>
      </body>
    </Def>
  );
}

module.exports = NewForm;