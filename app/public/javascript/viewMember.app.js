var viewMemberApp = new Vue({
  el: '#viewMemberApp',
  data: {
    member: {},
    guid: {}
  },
  methods: {
    getGuid(){
      var params = (new URL(document.location)).searchParams;
      this.guid = params.get("memberId");
    },
    fetchMember() {
    fetch('api/memberrecords/index.php?guid='+this.guid)
    .then( response => response.json() )
    .then( json => { this.member = json[0]})
  },
    handleUpdate() {
      fetch('api/memberrecords/post.php', {
        method:'POST',
        body: JSON.stringify(this.member),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

    this.closeUpdateForm();
      },

    closeUpdateForm() {
    document.getElementById('viewMemberApp').style.display ="none" ;
      }
    },
    created(){
      this.getGuid();
      this.fetchMember();
    }

});
