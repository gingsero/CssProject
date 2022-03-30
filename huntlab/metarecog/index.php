<?php
// 초급, 중급, 상급 선택 페이지
// 3,2,1  > 문자 20개 >  종료   모달떠서 기억나는 텍스트 전체 입력
// 결과 및 첫페이지로 JS로 동작

// DB 조회
// 321 > 4초씩 노출 > 20개 완료 후 종료
// 3초 뒤 모달 > 입력 창
$data = array("기름", "노트북", "병원", "제주도", "스페인", "국자", "이순신", "결혼", "에어컨", "자전거"
    , "부산", "백범김구", "쥬라기공원", "연습장", "개도", "건전지", "이름", "나이키", "헤어샵", "경찰");
?>
<html>
<head>
    <link rel="stylesheet" href="../css/metarecog.css?00">
</head>
<body class="background">
    <div class="first_view" id="_first_view">
        <button class="class_btn btn_01" onclick="clickClassChoiceBtn('low')"> 초급 </button>
        <button class="class_btn btn_02" onclick="clickClassChoiceBtn('mid')"> 중급 </button>
        <button class="class_btn btn_03" onclick="clickClassChoiceBtn('high')"> 고급 </button>
    </div>
    <div class="second_view hide" id="_second_view">
        <p class="meta_recog_text" id="_meta_recog_text"></p>
    </div>

    <div class="third_view hide" id="_third_view">
        <!-- modal view -->
    </div>
</body>
<script>
    let js_data = new Array();
    js_data = <?php echo json_encode($data); ?>;
    js_data.push(" 종료 ")
</script>
<script type="application/javascript" src="../js/metarecog.js?01"></script>
</html>
