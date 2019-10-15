var memberRecordsApp = new Vue({
  el: '#memberRecordsApp',
  data: {
    members: [],
  },
  methods: {
    fetchMembers() {
      fetch('api/memberrecords/')
      //fetch('dummy.php')
      .then(response => response.json())
      .then(json => { memberRecordsApp.members = json })
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
