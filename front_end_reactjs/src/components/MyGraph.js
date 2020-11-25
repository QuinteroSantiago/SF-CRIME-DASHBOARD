
import React, { Component } from 'react'
import { sign } from 'jsonwebtoken'

class Metabase extends Component {
  render() {
    // you will need to install via 'npm install jsonwebtoken' or in your package.json

    var jwt = require("jsonwebtoken");

    var METABASE_SITE_URL = "http://localhost:3000";
    var METABASE_SECRET_KEY = "f95872e4e0ad42b2d9cac64fe718e33e7cb7ebe854671e291aafab77ae118e26";

    var payload = {
      resource: { question: 33 },
      params: {},
      exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
    };
    var token = jwt.sign(payload, METABASE_SECRET_KEY);

    var iframeUrl = METABASE_SITE_URL + "/embed/question/" + token + "#bordered=true&titled=true";
    return <iframe src={iframeUrl} title='Metabase' style={{ border: 'none', width: 800, height: 600 }} />
  }
}

export default Metabase