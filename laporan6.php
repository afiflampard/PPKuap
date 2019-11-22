<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page Title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />  
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>  
    <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile1.4.5.min.js"></script> 
    <!-- <link rel="stylesheet" type="text/css" href="jquery.mobile/jquery.mobile-1.4.5.css"/>
    <script src="jquery.mobile/demos/js/jquery.js" type="text/javascript"></script>
    <script src="jquery.mobile/demos/js/jquery.mobile-1.4.5" type="text/javascript"></script> -->
</head>
<body>
<div data-role="page" id="page-one" class="ui-body-b">
    <div data-role="header">
    <h1>Header Page 1</h1>
</div>
<div data-role="main" class="ui-content">
<p>ini adalah Page Pertama</p>
<p>Klik <a href="#page-two">disini</a>Jika ingin pindah ke page 2</p>
</div>
<div data-role="footer">
<h4>Footer Page 1</h4>
</div>
</div>

<div data-role="page" id="page-two">
<div data-role="header">
<h1>Header Page 2</h1>
</div>
<div role="main" class="ui-content">
<p>Ini adalah page 2. Jika ingin ke page 1, klik <a href="#page-one">disini</a></p>
</div>
<div data-role="footer">
<h4>Footer Page 2</h4></div>
</div>
    
</body>
</html>