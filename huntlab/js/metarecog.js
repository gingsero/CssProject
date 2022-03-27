
var firstView = document.getElementById("first_view")
var secondView = document.getElementById("second_view")
var thirdView = document.getElementById("third_view")

var metaRecogText = document.getElementById("meta_recog_text")

function clickClassChoiceBtn (c) {
    firstView.classList.add('hide')
    secondView.classList.remove('hide')

    countingStart() // 3,2,1 완료 후 meta 데이터 실행
    setTimeout(function(){
        pushMetaTextSetTimeout(c)
    }, 0)
}

function countingStart() {
    let ary = [3, 2, 1]
    for(let i = 1; i <= ary.length; i++){
        setTimeout(function(){
            metaRecogText.innerText = '' + ary[i - 1]
        }, 1000 * i);
    }
}

function pushMetaTextSetTimeout(c) {
    for(let i = 1; i <= js_data.length; i++){
        setTimeout(function(){
            console.log('js_data : ' + js_data[i - 1])
            metaRecogText.innerText = js_data[i - 1]
        }, 5000 * i);
    }
}