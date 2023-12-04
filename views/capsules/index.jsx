const React = require("react")
const Default = require("../default")
import axios from 'axios'

function index(data) {
  //generates HTML elements for each capsule in the data.capsules array, creating a visual list of capsules with their titles, images, date, place.
  
  let capsulesFormatted = data.capsules.map((capsule) => {
    return (
      <div
        key={capsule.name}
        className="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2"
      >
        <a href={`/capsules/${capsule.id}`}>
          <img src={capsule.capsuleImage} alt='Image not available' />
        </a>
        <h2>
          <a href={`/capsules/${capsule.id}`}>{capsule.name}</a>
        </h2>
      </div>
    )
  })
  
  return (
    <Default title="Capsules">
      <body className="capsules">
        <main>
          <h1>Capsules</h1>
          <div className="row show-row">
            <h2>Open Capsules</h2>
            {capsulesFormatted}
            <h2>Locked Capsules</h2>
          </div>
          <a href="/capsules/new">
            <button className="btn btn-primary">Add a New capsule</button>
          </a>
        </main>
      </body>
      <style jsx="true">{`
        .btn-primary {
          margin-top: 1em;
          margin-bottom: 3em;
        }
      `}</style>
    </Default>
  )
}

module.exports = index
