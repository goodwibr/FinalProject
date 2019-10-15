var memberActionApp = new Vue({
  el: '#memberActionApp',
  data: {
    member: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/memberrecords/post.php', {
        method:'POST',
        body: JSON.stringify(this.member),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { waitingApp.patients = json})
      .catch( err => {
        console.error('WORK TRIAGE ERROR:');
        console.error(err);
      })

      this.handleReset();
    },
    handleReset() {
      this.member = {
        memberId: '',
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: '',
        address: '',
        // visitDateUtc
        email: '',
        phoneNum: '',
        radioNumber:'',
        startDate:'',
        departmentPosition:'',
        isActive:''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
