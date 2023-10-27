// DEFAULTS TO MUSEUM. SHOULD CHANGE THIS SOON
const getSchoolId = () => {
  const host = window.location.host;
  // Make this work on localhost
  if ( host.includes("localhost") ) {
    const arr = host
    // Regex to select periods and colons
    .split(/[.:]/)

    var i = arr.indexOf("localhost")
    
    return i > 0 ? arr.slice(0, i)[0] : 'museum'
  
  // Make this work online
  } 
  else if ( host.includes("192.168.146.1") ) {
    const arr = host
    .split(/[.:]/)

    var e = arr.indexOf("downside")
    
    return e > 0 ? arr.slice(0, e)[0] : 'museum'
  }

  else if ( host.includes("downside") ) {
    const arr = host
    .split(/[.:]/)

    var j = arr.indexOf("downside")
    
    return j > 0 ? arr.slice(0, j)[0] : 'museum'

  } else {
    return null
  }

}

export default getSchoolId