var memberRecordsApp = new Vue({
  el: '#memberRecordsApp',
  data: {
    members: [],
  },
  methods: {
    fetchMembers() {
      //fetch('api/memberrecords/index.php')
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { memberRecordsApp.members = json })
    }
  }, // end methods
  created() {
    this.fetchMembers();
  }
});
