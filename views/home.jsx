const React = require("react")
const Default = require("./default")

function Home() {
  return (
    <Default title="Welcome Page">
      <body className="home">
        <h1>Time Capsules</h1>
        <h2>Memories</h2>
        <a href="/capsules">
          <button className="btn-primary">Capsule Collection</button>
        </a>
      </body>
    </Default>
  )
}

module.exports = Home
