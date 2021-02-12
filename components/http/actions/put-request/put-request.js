const axios = require('axios')
const http = require('../../http.app.js')

module.exports = {  
  key: "http-put-request",
  name: "PUT Request",
  type: "action",
  version: "0.0.1",
  props: {
    http,
    url: { propDefinition: [http, "url"] },
    body: { propDefinition: [http, "body"] },
    params: { propDefinition: [http, "params"] },
    headers: { propDefinition: [http, "headers"] },
    auth: { propDefinition: [http, "auth"] },
    responseType: { propDefinition: [http, "responseType"] },
  },
  methods: {},
  async run() {
    const config = {
      url: this.url,
      method: "PUT",
      data: this.body,
      params: this.query,
      headers: this.headers,
      responseType: this.responseType,
    }
    if (this.auth) config.auth = this.auth
    return await axios(config)
  },
}