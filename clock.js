let minute = document.getElementById('minute')
let hours = document.getElementById('hour')
let secondLine = document.getElementById('second')
let clock = document.getElementById('clock')


function increase () { 

}

function getDAte(){
    const now = new Date()
    const second = now.getSeconds()
    const secondsD = ((second / 60) * 360) + 90
    secondLine.style.transform = `rotate(${secondsD}deg)`
    console.log(second)
    const min = now.getMinutes()
    const minDg = ((min / 60) * 360) + 90
    minute.style.transform = `rotate(${minDg}deg)`
    const hour = now.getHours()
    const hrDg = ((hour / 60) * 360) + 90
    hours.style.transform = `rotate(${hrDg}deg)`
}
getDAte()

let number12 = document.createElement('p')
number12.innerText = '12'

let number3 = document.createElement('p')
number3.innerText = '3'
number3.style.marginTop = '87px'
number3.style.marginLeft = '180px'

let number6 = document.createElement('p')
number6.innerText = '6'
number6.style.marginTop = '80px'
number6.style.marginLeft = '20px'

let number9 = document.createElement('p')
number9.innerText = '9'
number9.style.marginTop = '-135px'
number9.style.marginLeft = '-180px'

clock.append(number12)
clock.append(number3)
clock.append(number6)
clock.append(number9)



setInterval(getDAte, 1000)

