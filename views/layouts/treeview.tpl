{{define "treeview"}}
<aside class="main-sidebar">
  <!-- sidebar: style can be found in sidebar.less-->
  <section class="sidebar">
    <!-- Sidebar user panel-->
    <div class="user-panel">
      <div class="pull-left image"><img src="/img/user2-160x160.jpg" alt="User Image" class="img-circle"/></div>
      <div class="pull-left info">
        <p>Alexander Pierce</p><a href="#"><i class="fa fa-circle text-success"></i> Online</a>
      </div>
    </div>
    <!-- search form-->
    <form action="#" method="get" class="sidebar-form">
      <div class="input-group">
        <input type="text" name="q" placeholder="Search..." class="form-control"/><span class="input-group-btn">
          <button id="search-btn" type="submit" name="search" class="btn btn-flat"><i class="fa fa-search"></i></button></span>
      </div>
    </form>
    <!-- /.search form-->
    <!-- sidebar menu: : style can be found in sidebar.less-->
    <ul class="sidebar-menu">
      <li class="header">MAIN NAVIGATION</li>
      <li class="active treeview"><a href="/"><i class="fa fa-dashboard"></i><span>Dashboard</span></a></li>
      <li class="treeview"><a href="#"><i class="fa fa-laptop"></i><span>Administrative Tools</span><i class="fa fa-angle-left pull-right"></i></a>
        <ul class="treeview-menu">
          <li><a href="/administrator/realtime"><i class="fa fa-circle-o"></i> Real Time Analysis</a></li>
          <li><a href="/administrator/resource"><i class="fa fa-circle-o"></i> Resource Planing</a></li>
          <li><a href="/administrator/swot"><i class="fa fa-circle-o"></i> S.W.O.T Analysis</a></li>
          <li><a href="/administrator/skillset"><i class="fa fa-circle-o"></i> Skills Sets</a></li>
          <li><a href="/administrator/notifications"><i class="fa fa-circle-o"></i> Notifications</a></li>
          <li><a href="/administrator/timeline"><i class="fa fa-circle-o"></i> Timeline</a></li>
        </ul>
      </li>
      <li class="treeview"><a href="#"><i class="fa fa-sitemap"></i><span>Manage</span><i class="fa fa-angle-left pull-right"></i></a>
        <ul class="treeview-menu">
          <li><a href="/manage/users"><i class="fa fa-circle-o"></i> Employees</a></li>
          <li><a href="/manage/clients"><i class="fa fa-circle-o"></i> Clients</a></li>
          <li><a href="/manage/contacts"><i class="fa fa-circle-o"></i> Contacts</a></li>
          <li><a href="/manage/inventory"><i class="fa fa-circle-o"></i> Inventory</a></li>
          <li><a href="/manage/campaign"><i class="fa fa-circle-o"></i> Campaign</a></li>
        </ul>
      </li>
      <li class="treeview"><a href="#"><i class="fa fa-cubes"></i><span>Projects</span><i class="fa fa-angle-left pull-right"></i></a>
        <ul class="treeview-menu">
          <li><a href="/project/ongoing"><i class="fa fa-circle-o"></i> Ongoing<small class="label bg-purple pull-right">new</small></a></li>
          <li><a href="/project/completed"><i class="fa fa-circle-o"></i> Completed</a></li>
        </ul>
      </li>
      <li><a href="/calendar"><i class="fa fa-calendar"></i><span>Calendar</span><small class="label bg-aqua pull-right">3</small></a></li>
      <li><a href="/mailbox"><i class="fa fa-envelope"></i><span>Mailbox</span><small class="label bg-teal pull-right">12</small></a></li>
      <li><a href="/chat"><i class="fa fa-comments-o"></i><span>Chat</span><small class="label label-default pull-right">25</small></a></li>
      <li><a href="/preferences"><i class="fa fa-gears"></i><span>Preferences</span></a></li>
      <li><a href="documentation/index.html"><i class="fa fa-book"></i><span>Documentation</span></a></li>
      <li class="header">MODULES</li>
      <li><a href="#"><i class="fa fa-circle-o text-red"></i><span>Bulk Message</span></a></li>
      <li><a href="#"><i class="fa fa-circle-o text-yellow"></i><span>Tickets</span></a></li>
      <li><a href="#"><i class="fa fa-circle-o text-aqua"></i><span>Information</span></a></li>
    </ul>
  </section>
  <!-- /.sidebar-->
</aside>
{{end}}