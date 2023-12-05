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
              <label htmlFor="capsuleImage">Capsule Lock Image</label>
              <input 
              className="form-control" 
              id="capsuleImage" 
              name="capsuleImage" 
              defaultValue={data.capsule.capsuleImage}
              />
              <p>leave blank if no image is found</p>
            </div>
            <div className="form-group">
              <label htmlFor="note">Note to Future Self</label>
              <textarea
                className="form-control tall"
                id="note"
                type="text"
                name="note"
                defaultValue={data.capsule.note}
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
            <div className="radio-buttons">
              <label className="radio-label">
                <input
                  type="radio"
                  name="status"
                  // onClick={()=>handleLock()}
                />
                <span className="btn btn-primary">Lock Capsule</span><br/>
                <p>Check box to lock</p>
              </label>
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
