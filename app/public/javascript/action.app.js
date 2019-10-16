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
    .then( json => { memberRecordsApp.members.push(json[0]) })
    //.then( json => { waitingApp.patients = json})
    .catch( err => {
      console.error('ACTION ERROR:');
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
        address: '',
        email: '',
        phoneNum: '',
        radioNumber:'',
        startDate:'',
        departmentPosition:''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
