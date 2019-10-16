var certActionApp = new Vue({
  el: '#certActionApp',
  data: {
    cert: {}
  },
  methods: {
    handleSubmit() {
    fetch('api/certificatesrecords/post.php', {
      method:'POST',
      body: JSON.stringify(this.cert),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => { certRecordsApp.certs.push(json[0]) })
    //.then( json => { waitingApp.patients = json})
    .catch( err => {
      console.error('WORK TRIAGE ERROR:');
      console.error(err);
    })

    this.handleReset();
  },
    handleReset() {
      this.cert = {
        certId: '',
        certName: '',
        certAgency: '',
        certExpirationPeriod: ''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
