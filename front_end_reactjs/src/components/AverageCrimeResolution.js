
import React, { Component } from 'react'
//import { sign } from 'jsonwebtoken'

class Metabase extends Component {
	render() {
var jwt = require("jsonwebtoken");

var METABASE_SITE_URL = "http://localhost:3000";
var METABASE_SECRET_KEY = "3fb768a76b046b3091599e98d844e3e50575dccace433393a6cfb852a3bdf131";

var payload = {
  resource: { question: 7 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};
var token = jwt.sign(payload, METABASE_SECRET_KEY);

var iframeUrl = METABASE_SITE_URL + "/embed/question/" + token + "#bordered=true&titled=true";
		return <iframe src={iframeUrl} title='Metabase' style={{ border: 'none', width: 800, height: 600 }} />
	}
}

export default Metabase