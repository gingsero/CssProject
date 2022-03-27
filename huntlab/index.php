<?php

?>

<html>
<head>
    <link rel="stylesheet" href="css/huntlab.css?00"/>
</head>
<body class="container">
    <!-- header 영역 공백으로 두기 -->
    <div class="header">
        Header 영역
    </div>

    <!-- contents 영역 -->
    <div class="content_container">
        <div class="content" style="background-color:coral">
            <?php include("include/content01.php"); ?>
        </div>
        <div class="content" style="background-color:blue">
            <?php include("include/content02.php"); ?>
        </div>
        <div class="content" style="background-color:pink">
            <?php include("include/content03.php"); ?>
        </div>
        <div class="content" style="background-color:green">
            <?php include("include/content04.php"); ?>
        </div>
        <div class="content" style="background-color:burlywood">
            <?php include("include/content05.php"); ?>
        </div>
        <div class="content" style="background-color:darkturquoise">

        </div>
    </div>

    <!-- footer 영역 -->
    <div class="footer">
        <address>
            <a href="https://blog.naver.com/gingsero">
                blog
            </a>
        </address>
        <div class="footer_info">
            <dl>
                <dt class="footer_term">대표 : </dt>
                <dd class="footer_content">HuntKim</dd>
            </dl>
        </div>
    </div>
</body>
</html>