let priceInput = document.querySelector('#price'),
    termInput = document.querySelector('#term'),
    priceLog = document.querySelector('.pricelog p'),
    priceNum = 100000,
    termNum = 1,
    percent = 1.15;

priceInput.addEventListener('input', function getNum(e){this.value = this.value.replace(/[^\d]/g, '');});
termInput.addEventListener('input', function getNum(e){this.value = this.value.replace(/[^\d]/g, '');});

function printPrice() {
    if (priceNum > 0 && termNum > 0) {
        priceLog.innerHTML = String(Math.round(priceNum * percent / termNum, -5)) + ' руб./месяц';
    }
}

priceInput.addEventListener('blur', () => {
    priceNum = Number(priceInput.value)
    priceSlider.value = priceNum;
    if (priceNum>=1000000) {
        percent = 1.1;
    }
    priceNum = Math.round(priceNum*percent, -5);
    printPrice()
});
termInput.addEventListener('blur', () => {
    termNum = Number(termInput.value)
    termSlider.value = termNum;
    printPrice()
});

// ползунки
let priceSlider = document.querySelector("#priceSlider");
priceSlider.oninput = function() {
    priceNum = Number(this.value)
    priceInput.value = Number(this.value)
    if (termNum > 0) {
        priceLog.innerHTML = String(Math.round(priceNum / termNum, -5)) + ' руб./месяц';
    }
}

let termSlider = document.querySelector("#termSlider");
termSlider.oninput = function() {
    termNum = Number(this.value)
    termInput.value = Number(this.value)
    if (priceNum > 0) {
        priceLog.innerHTML = String(Math.round(priceNum / termNum, -5)) + ' руб./месяц';
    }
}

// метки на ползунках
let priceLabel = document.querySelectorAll(".priceLb");
priceLabel.forEach(el => {
    el.addEventListener("click", () => {
        let num = Number(el.dataset.lb);
        priceNum = num;
        priceInput.value = num;
        priceSlider.value = num;
        printPrice()
    })
    
});

let termLabel = document.querySelectorAll(".termLb");
termLabel.forEach(el => {
    el.addEventListener("click", () => {
        let num = Number(el.dataset.lb);
        termNum = num;
        termInput.value = num;
        termSlider.value = num;
        printPrice()
    })
    
});