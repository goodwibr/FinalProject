var certReportApp = new Vue({
  el: '#certReportApp',
  data: {
    reports: {}
  },
  methods: {
    fetchReport() {
    fetch('api/certificatereport/index.php')
    .then( response => response.json() )
    .then( json => { certReportApp.reports = json})
  }
},
created(){
  this.fetchReport();
}
});
