var certRecordsApp = new Vue({
  el: '#certRecordsApp',
  data: {
    certs: [],
    recordCert: {}
  },
  methods: {
    fetchCerts() {
      fetch('api/certificatesrecords/')
      //fetch('dummy.php')
      .then(response => response.json())
      .then(json => { certRecordsApp.certs = json })
    },

  /*  handleSubmit(event) {
      fetch('api/memberrecords/add.php', {
        method:'POST',
        body: JSON.stringify(this.recordMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { memberRecordsApp.members.push(json[0]) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      })
      this.handleReset();
    },*/

    handleDelete(cId) {
      fetch('api/certificatesrecords/delete.php', {
        method:'POST',
        body: JSON.stringify({"certId":cId}),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

        .then( function(response) {
          certRecordsApp.certs = certRecordsApp.certs.filter(
          function(el) {return el.certId != cId}
        );
      })

        .catch( err => {
          console.error('RECORD DELETE ERROR:');
          console.error(err);
        });
        this.handleReset();
      },

    handleReset() {
      this.recordCert = {
        certName: '',
        certAgency: '',
        certExpirationPeriod:''
      }
      /*this.member = {
        firstName: '',
        lastName: '',
        radioNumber:'',
        departmentPosition:'',
        phoneNum: '',
        email: '',
        address: '',
        startDate:'',
        dob: '',
        memberId:''
      }*/

    },
    seeDetails(cert){
      viewCertDetailsApp.cert=cert;
      viewCertDetailsApp.fetchDetail();
    },


    openAddForm(cert) {
    document.getElementById('addCertApp').style.display = 'block';
    addCertApp.cert=cert;
    },

    openUpdateForm(cert) {
    document.getElementById('viewCertApp').style.display = 'block';
    //viewMemberApp.memberId = member.memberId;
    viewCertApp.cert=cert;
    //viewMemberApp.fetchMember();
    },

    handleRowClick(cert) {
      this.seeDetails(cert);
    }
    },
  // end methods
  created() {
    this.handleReset();
    this.fetchCerts();
  }
});
