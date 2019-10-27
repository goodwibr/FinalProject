var addCertApp = new Vue({
  el: '#addCertApp',
  data: {
    certs: [],
    recordCert: {}
  },
  methods: {

    handleSubmit(event) {
      fetch('api/certificatesrecords/add.php', {
        method:'POST',
        body: JSON.stringify(this.recordCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

    },

    closeAddForm() {
    document.getElementById('addCertApp').style.display ="none" ;
  }
},
  });
