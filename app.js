let target = document.querySelector("#dynamic");

const randomString = () => {
    let strArr = ['Learn to HTML', 'Learn to CSS', 'Learn to JavaScript', 'Learn to React', 'Learn to Python', 'Learn to Everyting']
    let selectStr = strArr[Math.floor(Math.random() * strArr.length)]
    let selectStrArr = selectStr.split("");

    return selectStrArr
}

// 타이핑 리셋
const resetTyping = () => {
    target.textContent = ""
    dynamic(randomString());
}

// 한 글자씩 출력
const dynamic = (randomArr) => {
    console.log(randomArr);
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift()
        setTimeout(() => {
            dynamic(randomArr)
        }, 80)
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

//커서 깜박임 효과
const blink = () => {
    target.classList.toggle("active")
}
setInterval(blink, 500);