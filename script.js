const ClickId = document.getElementById('click');
const Count = document.getElementById('num');

let num = 0;

const clicked = () => {
    num+=1
    let numify = num.toString()
    Count.innerText = numify;
};


//documentgetElementById("Element").style.display = "hidden" to keep away from value or div

if (Count.innerText>"1000") {
    alert("Woah man your doing too much you sure you wanna keep going")
}