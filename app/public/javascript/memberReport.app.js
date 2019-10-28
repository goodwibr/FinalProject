var memberReportApp = new Vue({
  el: '#memberReportApp',
  data: {
    reports: {}
  },
  methods: {
    fetchReport() {
    fetch('api/memberreport/index.php')
    .then( response => response.json() )
    .then( json => { memberReportApp.reports = json})
  }
},
created(){
  this.fetchReport();
}
});
