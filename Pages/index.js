var link = require('./components/linkComp')

const  home = () => {
    return (
      `<h1 style='color:blue'>Welcome to my simple frontend framework</h1>
      ${link(1)} <br>
      ${link(2)} <br>
      ${link(3)} <br>
      ${link(4)} <br>
      `
    )
  }
  
module.exports = home
  