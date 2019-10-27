var addMemberApp = new Vue({
  el: '#addMemberApp',
  data: {
    members: [],
    recordMember: {}
  },
  methods: {

    handleSubmit(event) {
      fetch('api/memberrecords/add.php', {
        method:'POST',
        body: JSON.stringify(this.recordMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

    },

    closeAddForm() {
    document.getElementById('addMemberApp').style.display ="none" ;
  }
},
  });
