
function shortBody() {
  if (this.body) {
    return this.body.substring(0, 450) + "...";
  } {
    return "";
  }
}

exports.shortBody = shortBody
