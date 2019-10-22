var viewMemberApp = new Vue({
  el: '#viewMemberApp',
  data: {
    member: {},
    memberId: 0
  },
  methods: {
    fetchMember() {
    fetch('api/memberrecords/index.php?guid='+this.memberId)
    .then( response => response.json() )
    .then( json => { viewMemberApp.member = json})
  }
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
  created() {

    this.fetchMember();
  }
});
