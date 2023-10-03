const screenWidth = window.screen.width
const screenHeight = window.screen.height

function checkScreen() {
        if (screenWidth > screenHeight) {
                document.documentElement.style.setProperty('--widthCalc', '85vw');
                document.documentElement.style.setProperty('--heightCalc', '90vh');
                document.documentElement.style.setProperty('--width1Calc', '85vh');
                document.documentElement.style.setProperty('--height1Calc', '85vh');
                document.documentElement.style.setProperty('--top1Calc', '-24%');
                document.documentElement.style.setProperty('--top2Calc', '-45%');
                document.documentElement.style.setProperty('--top3Calc', '-15%');
                document.documentElement.style.setProperty('--top4Calc', '54%');
                document.documentElement.style.setProperty('--top5Calc', '73%');
                document.documentElement.style.setProperty('--top6Calc', '-10%');
                document.documentElement.style.setProperty('--top7Calc', '25%');
                document.documentElement.style.setProperty('--left1Calc', '-23%');
                document.documentElement.style.setProperty('--left2Calc', '45%');
                document.documentElement.style.setProperty('--left3Calc', '85%');
                document.documentElement.style.setProperty('--left4Calc', '-15%');
                document.documentElement.style.setProperty('--left5Calc', '65%');
                document.documentElement.style.setProperty('--left6Calc', '61.5%');
                document.documentElement.style.setProperty('--left7Calc', '-4.5%');
                document.documentElement.style.setProperty('--scaleForPhone', '1, 1');
        } else if (screenWidth < screenHeight) {
                document.documentElement.style.setProperty('--widthCalc', '145vw');
                document.documentElement.style.setProperty('--heightCalc', '145vh');
                document.documentElement.style.setProperty('--width1Calc', '125vw');
                document.documentElement.style.setProperty('--height1Calc', '125vh');
                document.documentElement.style.setProperty('--top1Calc', '4%');
                document.documentElement.style.setProperty('--top2Calc', '-45%');
                document.documentElement.style.setProperty('--top3Calc', '-15%');
                document.documentElement.style.setProperty('--top4Calc', '54%');
                document.documentElement.style.setProperty('--top5Calc', '73%');
                document.documentElement.style.setProperty('--top6Calc', '-38%');
                document.documentElement.style.setProperty('--top7Calc', '65%');
                document.documentElement.style.setProperty('--left1Calc', '-3%');
                document.documentElement.style.setProperty('--left2Calc', '45%');
                document.documentElement.style.setProperty('--left3Calc', '85%');
                document.documentElement.style.setProperty('--left4Calc', '-15%');
                document.documentElement.style.setProperty('--left5Calc', '65%');
                document.documentElement.style.setProperty('--left6Calc', '42%');
                document.documentElement.style.setProperty('--left7Calc', '-9%');
        } else {
                document.documentElement.style.setProperty('--widthCalc', '35vw');
                document.documentElement.style.setProperty('--heightCalc', '35vh');
                document.documentElement.style.setProperty('--left2Calc', '65%');
        }
}
checkScreen()

