var viewCertApp = new Vue({
  el: '#viewCertApp',
  data: {
    cert: {},
    guid: {}
  },
  methods: {
    getGuid(){
      var params = (new URL(document.location)).searchParams;
      this.guid = params.get("certId");
    },
    fetchCert() {
    fetch('api/certificatesrecords/index.php?guid='+this.guid)
    .then( response => response.json() )
    .then( json => { this.cert = json[0]})
  },
    handleUpdate() {
      fetch('api/certificatesrecords/post.php', {
        method:'POST',
        body: JSON.stringify(this.cert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

    this.closeUpdateForm();
      },

    closeUpdateForm() {
    document.getElementById('viewCertApp').style.display ="none" ;
      }
    },
    created(){
      this.getGuid();
      this.fetchCert();
    }

});
