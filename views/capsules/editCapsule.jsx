const React = require("react")
const Def = require("../default.jsx")

function edit_form(data) {
  return (
    <Def title={`Edit ${data.capsule.name}`}>
      <body className="edit">
        <main>
          <h1>Edit a Capsule </h1>
          <form method="POST" action={`/capsules/${data.capsule.id}?_method=PUT`}>
            <div className="form-group">
              <label htmlFor="name">Capsule Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                defaultValue={data.capsule.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date </label>
              <input
                className="form-control"
                id="date"
                type="text"
                name="date"
                defaultValue={data.capsule.date}
              />
            </div>
            <div className="form-group">
              <label htmlFor="place">Place</label>
              <input
                className="form-control"
                id="place"
                type="text"
                name="place"
                defaultValue={data.capsule.place}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image </label>
              <input
                className="form-control"
                id="image"
                type="text"
                name="image"
                defaultValue={data.capsule.image}
              />
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value="✎ Submit Updates"
            />
          </form>
        </main>
      </body>
    </Def>
  )
}

module.exports = edit_form
