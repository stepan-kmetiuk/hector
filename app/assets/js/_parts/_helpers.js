
function generateUniqueId() {
  var prefix = 'dc-';
  var timestamp = Date.now().toString(36); // Convert the current timestamp to base36
  var random = Math.random().toString(36).substring(2, 10); // Generate a random string (excluding '0.')

  return prefix + timestamp + random;
}
