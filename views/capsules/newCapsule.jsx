const React = require("react");
const Def = require("../default");

function NewForm() {
  const handleRadioChange = (status) => {
    console.log(`Setting status to ${status}`);
    document.getElementById("status").value = status;
  };

  return (
    <Def title="Add a New Capsule">
      <body className="new">
        <main>
          <h1>Add a New Capsule</h1>
          <form method="POST" action="/capsules">
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
              <label htmlFor="date">Encapsulation Date</label>
              <input className="form-control" id="date" name="date" />
            </div>
            <div className="form-group">
              <label htmlFor="place">Place</label>
              <input className="form-control" id="place" name="place" />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input className="form-control" id="image" name="image" />
              <p>leave blank if no image is found</p>
            </div>
            <input
              type="hidden"
              id="status"
              name="status"
              value="" // Initially empty
            />
            <div className="radio-buttons">
              <label className="radio-label">
                <input
                  type="radio"
                  name="statusRadio"
                  onChange={() => handleRadioChange("draft")}
                />
                <span className="btn btn-primary">Save as Draft</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="statusRadio"
                  onChange={() => handleRadioChange("locked")}
                />
                <span className="btn btn-primary">Lock Capsule</span>
              </label>
            </div>
            <p>Once the capsule is locked, no modification can be done.</p>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </form>
        </main>
      </body>
    </Def>
  );
}

module.exports = NewForm;
