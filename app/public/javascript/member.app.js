var memberRecordsApp = new Vue({
  el: '#memberRecordsApp',
  data: {
    members: [],
    recordMember: {}
  },
  methods: {
    fetchMembers() {
      fetch('api/memberrecords/')
      //fetch('dummy.php')
      .then(response => response.json())
      .then(json => { memberRecordsApp.members = json })
    },

    handleSubmit(event) {
      fetch('api/memberrecords/post.php', {
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
    },

    /*deleteMember(memberId){
      fetch('api/memberrecords/index.php?guid='+memberId, {
      method:'POST',
      body: JSON.stringify(this.member),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
  }
)},
    updateMember() {
        fetch('api/memberrecords/updateMember.php', {
          method:'POST',
          body: JSON.stringify(this.member),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        }
        //fetch('api/memberrecords/?guid='+memberId)
        .then( response => response.json() )
        .then( json => { memberRecordsApp.members.push(json[0]) })
        .catch( err => {
          console.error('RECORD POST ERROR:');
          console.error(err);
        })
        //this.handleReset();
      )},*/

    handleReset() {
      this.recordMember = {
        firstName: '',
        lastName: '',
        radioNumber:'',
        departmentPosition:'',
        phoneNum: '',
        email: '',
        address: '',
        startDate:'',
        dob: ''
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
    handleRowClick(member) {
      viewMemberApp.member = member;
      }
    },
  // end methods
  created() {
    this.handleReset();
    this.fetchMembers();
  }
});
