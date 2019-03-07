module.exports = function(message) {
  switch(message) {
    case 'email must be unique':
      return {status: 403, error: 'email must be unique'}
    default:
      return {status: 500, error: null}
  }
}
