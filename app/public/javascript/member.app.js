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

  /*  handleSubmit(event) {
      fetch('api/memberrecords/add.php', {
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
    },*/

    handleDelete(mId) {
      fetch('api/memberrecords/delete.php', {
        method:'POST',
        body: JSON.stringify({"memberId":mId}),
        headers: {
          "Content-Type": "application/json; charset=utf-8"

        }
      })

        .then( function(response) {
          memberRecordsApp.members = memberRecordsApp.members.filter(
          function(el) {return el.memberId != mId}
        );
      })

        .catch( err => {
          console.error('RECORD DELETE ERROR:');
          console.error(err);
        });
        this.handleReset();
      },

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
        dob: '',
        isActive:''
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
    seeDetails(member){
      viewDetailsApp.member=member;
      viewDetailsApp.fetchDetail();
    },


    openAddForm(member) {
    document.getElementById('addMemberApp').style.display = 'block';
    addMemberApp.member=member;
    },

    openUpdateForm(member) {
    document.getElementById('viewMemberApp').style.display = 'block';
    //viewMemberApp.memberId = member.memberId;
    viewMemberApp.member=member;
    //viewMemberApp.fetchMember();
    },

    handleRowClick(member) {
      this.seeDetails(member);
    }
    },
  // end methods
  created() {
    this.handleReset();
    this.fetchMembers();
  }
});
