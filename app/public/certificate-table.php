<!DOCTYPE html>
<!--html structure derived from package from
 * Vali Admin
 * Author: Pratik Borsadiya
and edited to fit our project-->

<html lang="en">
  <head>
    <title>OCFR Admin</title>
    <!-- Main CSS-->
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <!-- Font-icon css-->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body class="app sidebar-mini rtl">
    <!-- Navbar-->
    <header class="app-header"><a class="app-header__logo" href="index.html">OCFR</a>
      <!-- Sidebar toggle button--><a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>

    </header>
    <!-- Sidebar menu-->
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image">
        <div>
          <p class="app-sidebar__user-name"> Felicia Smoake</p>
          <p class="app-sidebar__user-designation"> Coordinator</p>
        </div>
      </div>
      <ul class="app-menu">
        <li><a class="app-menu__item active" href="index.html"><i class="app-menu__icon fa fa-dashboard"></i><span class="app-menu__label">Home</span></a></li>
          <ul class="treeview-menu">
          </ul>
        </li>
        <li class="treeview"><a class="app-menu__item" href="members-table.html"><i class="app-menu__icon fa fa-th-list"></i><span class="app-menu__label">Members</span><i class="treeview-indicator fa fa-angle-right"></i></a>
          <ul class="treeview-menu">
          </ul>
        </li>
        <li class="treeview"><a class="app-menu__item" href="certificate-table.html"><i class="app-menu__icon fa fa-th-list"></i><span class="app-menu__label">Certificates</span><i class="treeview-indicator fa fa-angle-right"></i></a>
          <ul class="treeview-menu">
          </ul>
        </li>
        <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-th-list"></i><span class="app-menu__label">Reports</span><i class="treeview-indicator fa fa-angle-right"></i></a>
          <ul class="treeview-menu">
            <li><a class="treeview-item" href="table-basic.html"><i class="icon fa fa-circle-o"></i> Expired Certificates</a></li>
            <li><a class="treeview-item" href="table-data-table.html"><i class="icon fa fa-circle-o"></i> Member Report</a></li>
          </ul>
        </li>
      </ul>
    </aside>
    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> Oconee County Fire Rescue</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        </ul>
      </div>
    <div class="container">
      <div class="row">
        <div id="certApp">
        <div class="col-md-9">
          <div class="tile">
            <h3 class="tile-title">Certificates</h3>
            <div class="table-hover">
              <table class="table">
                <thead>
                    <tr>
                      <th>Certificate ID</th>
                      <th>Certificate Name</th>
                      <th>Certificate Agency</th>
                      <th>Expiration Period</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="cert in certs">
                      <td>{{cert.certId}}</td>
                      <td>{{cert.certName}}</td>
                      <td>{{cert.certAgency}}</td>
                      <td>{{cert.certExpirationPeriod}}</td>
                      <td>
                          <button class="btn btn-success" type="button" @click="showEditModal = true; selectCert(cert);">Edit</button>
                          <button class="btn btn-danger" type="button">Delete</button>
                      </td>
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </div>
        <!--<div class="col-md-9">
          <div class="tile">
            <h4 class="tile-title">Certificate Detail</h4>
          </div>
        </div>
        <div class="col-md-9">
          <div class="tile">
            <h3 class="tile-title">Add Record</h3>
              <form class="form-horizontal" @submit.prevent="handleSubmit">
                <div class="form-group row">
                  <label class="control-label col-md-3">Certificate Name</label>
                  <div class="col-md-8">
                    <input class="form-control" type="text" placeholder="Enter Certificate name" v-model="recordCert.certName">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="control-label col-md-3">Certificate Agency</label>
                  <div class="col-md-8">
                    <input class="form-control" type="text" placeholder="Enter Agency" v-model="recordCert.certAgency">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="control-label col-md-3">Expiration Period</label>
                  <div class="col-md-8">
                    <input class="form-control" type="text" placeholder="Enter Expiration Period" v-model="recordCert.certExpirationPeriod">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-8">
                    <button type="submit" class="btn btn-primary">Update</button>
                  </div>
                </div>
              </form>

          </div>
        </div>-->>

        <?php include('modal.php'); ?>

      </div>
    </div>
  </div>
      <!--<div class="col-md-9" id="certActionApp">
        <div class="tile">
          <h3 class="tile-title">Update Record</h3>
          <div class="tile-body">
            <form class="form-horizontal" @submit.prevent="handleSubmit">
              <div class="form-group row">
                <label class="control-label col-md-3">Certificate Name</label>
                <div class="col-md-8">
                  <input class="form-control" type="text" placeholder="Enter Certificate name" v-model="cert.certName">
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-3">Certificate Agency</label>
                <div class="col-md-8">
                  <input class="form-control" type="text" placeholder="Enter Agency" v-model="cert.certAgency">
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-3">Expiration Period</label>
                <div class="col-md-8">
                  <input class="form-control" type="text" placeholder="Enter Expiration Period" v-model="cert.certExpirationPeriod">
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-8">
                  <button class="btn btn-primary" type="submit">Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>-->

    </main>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <!--  <script src="javascript/certs.app.js"></script>
    <script src="javascript/certAction.app.js"></script>-->
    <script src="javascript/jquery-3.2.1.min.js"></script>
    <script src="javascript/popper.min.js"></script>
    <script src="javascript/bootstrap.min.js"></script>
    <script src="javascript/main.js"></script>

    <script src="javascript/cert.app.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>



  </body>
</html>
