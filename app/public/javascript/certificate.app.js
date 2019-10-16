var certificateRecordsApp = new Vue({
  el: '#certificateRecordsApp',
  data: {
    members: [],
  },
  methods: {
    fetchMembers() {
      fetch('api/memberrecords/')
      //fetch('dummy.php')
      .then(response => response.json())
      .then(json => { memberRecordsApp.members = json })
    }
  }, // end methods
  created() {
    this.fetchMembers();
  }
});
