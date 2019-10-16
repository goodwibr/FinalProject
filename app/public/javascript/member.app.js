var memberRecordsApp = new Vue({
  el: '#memberRecordsApp',
  data: {
    members: [],
    recordMember: {},
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
    handleRowClick(member) {
      memberActionApp.member = member;
    }
  }, // end methods
  created() {
    //this.handleReset();
    this.fetchMembers();
  }
});
