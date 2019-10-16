var certRecordsApp = new Vue({
  el: '#certRecordsApp',
  data: {
    certs: [],
    recordCert: {},
  },
  methods: {
    fetchCerts() {
      fetch('api/certificatesrecords/')
      //fetch('dummy.php')
      .then(response => response.json())
      .then(json => { certRecordsApp.certs = json })
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
    handleReset() {
      this.recordCert = {
        certName: '',
        certAgency: '',
        certExpirationPeriod:''
      }
    },
    handleRowClick(cert) {
      certActionApp.cert = cert;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchCerts();
  }
});
