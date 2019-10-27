var viewDetailsApp = new Vue({
  el: '#viewDetailsApp',
  data: {
    detail: {},
    member:{}
  },
  methods: {
    fetchDetail() {
    fetch('api/memberdetail/?guid='+this.member.memberId)
    .then( response => response.json() )
    .then( json => { viewDetailsApp.detail = json})
    //this.handleReset();
  }
}
});
