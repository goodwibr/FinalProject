var viewCertDetailsApp = new Vue({
  el: '#viewCertDetailsApp',
  data: {
    detail: {},
    cert:{}
  },
  methods: {
    fetchDetail() {
    fetch('api/certdetail/?guid='+this.cert.certId)
    .then( response => response.json() )
    .then( json => { viewCertDetailsApp.detail = json})
    //this.handleReset();
  }
}
});
