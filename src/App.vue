<template>
  <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button">
            <i class="fas fa-bars"></i>
          </a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="/pad" class="nav-link" target="PadDashFormation">PadDashFormation</a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Navbar Search -->
        <li class="nav-item">
          <a class="nav-link" data-widget="navbar-search" href="#" role="button">
            <i class="fas fa-search"></i>
          </a>
          <div class="navbar-search-block">
            <form class="form-inline">
              <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                <div class="input-group-append">
                  <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                  <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>


        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
            <i class="fas fa-th-large"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="/" class="brand-link">
        <img src="static/logo.png" alt="PadMst Logo" class="brand-image img-circle elevation-3" style="opacity: 0.8" />
        <span class="brand-text font-weight-light">PadMst(Vue Ver.)</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!--Monster-->
            <li class="nav-item">
              <a href="#/monster" class="nav-link active">
                <i class="nav-icon fas fa-dragon"></i>
                <p>Monster</p>
              </a>
            </li>
            <!---->
            <li class="nav-item">
              <a href="#/awakenskill" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Awaken Skill</p>
              </a>
            </li>
            <!--Team-->
            <li class="nav-item">
              <a href="#/team" class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>Team</p>
              </a>
            </li>
            <!---->
            <li class="nav-item">
              <a href="#/leaderskill" class="nav-link">
                <i class="nav-icon fas fa-hand-rock"></i>
                <p>Leader Skill</p>
              </a>
            </li>
            <!---->
            <li class="nav-item">
              <a href="#/skill" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Skill</p>
              </a>
            </li>
            <!---->
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Account</p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <div id="app">
        <router-view />
      </div>
    </div>
    <!-- /.content-wrapper -->

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
      <div class="p-3">
        <h5>Title</h5>
        <p>Sidebar content</p>
      </div>
    </aside>
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="float-right d-none d-sm-inline">AdminLTE v3.1.0</div>
      <!-- Default to the left -->
      <strong
        >Copyright &copy; 2014-2021
        <a href="https://adminlte.io">AdminLTE.io</a>.</strong
      >
      All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
  },
};
</script>

<style>
</style>
