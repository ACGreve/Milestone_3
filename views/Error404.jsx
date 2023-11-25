const React = require("react")
const Default = require("./default")

function Error404() {
  return (
    <Default title="No capsules here...">
      <body className="error404">
        <h1>Oops, sorry, we can't find this page!</h1>
        <br />
        <a href="/capsules">
          <button className="btn btn-primary">Back to the Time Capsules</button>
        </a>
      </body>
    </Default>
  )
}

module.exports = Error404
