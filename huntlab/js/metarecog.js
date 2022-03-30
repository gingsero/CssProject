
var firstView = document.getElementById("_first_view")
var secondView = document.getElementById("_second_view")
var thirdView = document.getElementById("_third_view")

var metaRecogText = document.getElementById("_meta_recog_text")

function clickClassChoiceBtn (c) {
    firstView.classList.add('hide')
    secondView.classList.remove('hide')

    countingStart() // 3,2,1 완료 후 meta 데이터 실행
    setTimeout(() => {
        pushMetaTextSetTimeout(c)
    }, 5000)

}

function countingStart() {
    let ary = [3, 2, 1]
    ary.map((value, index) => {
        setTimeout(() => {
            metaRecogText.innerText = '' + value
        }, 1000 * (index + 1))
    })
}

function pushMetaTextSetTimeout(c) {
    js_data.map((value, index) => {
        setTimeout(() => {
            metaRecogText.innerText = value
        }, 5000 * index)
    })
}
