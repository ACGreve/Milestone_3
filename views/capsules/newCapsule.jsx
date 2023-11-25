const React = require("react")
const Def = require("../default")

function new_form() {
  return (
    <Def title="Add a New Capsule">
      <body className="new">
        <main>
          <h1>Add a New Capsule</h1>
          <form method="POST" action="/capsules">
            <div className="form-group">
              <label htmlFor="title">Capsule title</label>
              <input
                className="form-control"
                id="title"
                name="title"
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
              className="btn btn-primary"
              type="submit"
              value="Add Capsule"
            />
          </form>
        </main>
      </body>
    </Def>
  )
}

module.exports = new_form
