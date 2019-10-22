var viewCertApp = new Vue({
  el: '#viewCertApp',
  data: {
    cert: {},
    certId: 0
  },
  methods: {
    fetchCert() {
    fetch('api/certificatesrecords/index.php?guid='+this.certId)
    .then( response => response.json() )
    .then( json => { viewCertApp.cert = json})
  }
},

handleSubmit(event) {
  fetch('api/certificatesrecords/post.php', {
    method:'POST',
    body: JSON.stringify(this.recordCert),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then( response => response.json() )
  .then( json => { certRecordsApp.certs.push(json[0]) })
  .catch( err => {
    console.error('RECORD POST ERROR:');
    console.error(err);
  })
  this.handleReset();
},
  created() {

    this.fetchCert();
  }
});
