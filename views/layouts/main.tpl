{{template "layouts/header.tpl" .}}
{{template "layouts/footer.tpl" .}}
{{template "layouts/treeview.tpl" .}}
{{template "layouts/settingsbar.tpl" .}}

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>BotSolve | Dashboard</title>
    <!-- Tell the browser to be responsive to screen width-->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5-->
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <!-- Font Awesome-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons-->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style-->
    <link rel="stylesheet" href="/css/BotSolve.css">
    <!--
    AdminLTE Skins. Choose a skin from the css/skins
    folder instead of downloading all of them to reduce the load.
    -->
    <link rel="stylesheet" href="/css/skin-black.css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries-->
    <!-- WARNING: Respond.js doesn't work if you view the page via file://-->
    <!--if lt IE 9
    script(src='https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js')
    script(src='https://oss.maxcdn.com/respond/1.4.2/respond.min.js')
    -->
  </head>
  <body class="hold-transition skin-black fixed sidebar-mini">
    {{template "content" .}}
    <div class="wrapper">
      {{template "header" .}}
      {{template "treeview" .}}
      {{template "footer" . }}
      {{template "settingsbar" .}}
    </div>
    <!-- jQuery 2.1.4-->
    <script src="/plugins/jQuery/jQuery-2.1.4.min.js"></script>
    <!-- Bootstrap 3.3.5-->
    <script src="/js/bootstrap.min.js"></script>
    <!-- SlimScroll 1.3.0-->
    <script src="/plugins/slimScroll/jquery.slimscroll.min.js"></script>
    <!-- FastClick-->
    <script src="/plugins/fastclick/fastclick.min.js"></script>
    <!-- AdminLTE App-->
    <script src="/js/app.min.js"></script>
    <!-- sails js-->
    <script src="/js/dependencies/sails.io.js"></script>
    <!-- acumen js-->
    <script src="/js/acumen.js"></script>
    <!-- AdminLTE for demo purposes-->
    <script src="/demo_files/demo.js"></script>
  </body>
</html>