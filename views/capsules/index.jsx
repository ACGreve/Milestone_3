const React = require("react")
const Default = require("../default")

function Index({}) {
  return (
    <html>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <Default>
        <h2>Open Capsules</h2>
        <h2>Locked Capsules</h2>
      </Default>
    </html>
  )
}

module.exports = Index
