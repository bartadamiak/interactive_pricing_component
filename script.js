
const slider = document.querySelector(".slider");
const pageViews = document.querySelector(".page-views");
const priceMonth = document.querySelector(".price-month");
const toggleButton = document.querySelector(".toggle");
const toggleMonthly = document.querySelector(".toggle-monthly");
const toggleYearly = document.querySelector(".toggle-yearly");

var monthlyPrice = [8, 12, 16, 24, 36];
var yearlyPrice = [6.00, 9, 12, 18, 27];


function toggleOption(button, month, year) {
    button.addEventListener("click", function () {
        month.classList.toggle("checked");
        year.classList.toggle("checked")

    })
}

function newPrice(price, monthPrice, yearPrice, ifYerly, value) {
    if (ifYerly.classList.contains("checked")) {
        if (slider.value == 0) {
            price.innerHTML = yearPrice[0].toFixed(2)
        }
        if (slider.value == 1) {
            price.innerHTML = yearPrice[1].toFixed(2)

        }
        if (slider.value == 2) {
            price.innerHTML = yearPrice[2].toFixed(2)
        }
        if (slider.value == 3) {
            price.innerHTML = yearPrice[3].toFixed(2)
        }
        if (slider.value == 4) {
            price.innerHTML = yearPrice[4].toFixed(2)
        }
    }
    else {
        if (slider.value == 0) {
            price.innerHTML = monthPrice[0].toFixed(2)
        }
        if (slider.value == 1) {
            price.innerHTML = monthPrice[1].toFixed(2)

        }
        if (slider.value == 2) {
            price.innerHTML = monthPrice[2].toFixed(2)
        }
        if (slider.value == 3) {
            price.innerHTML = monthPrice[3].toFixed(2)
        }
        if (slider.value == 4) {
            price.innerHTML = monthPrice[4].toFixed(2)
        }
    }
}

toggleOption(toggleButton, toggleMonthly, toggleYearly)

slider.addEventListener("change", function () {
    newPrice(priceMonth, monthlyPrice, yearlyPrice, toggleYearly, slider)
})

toggleButton.addEventListener("click", function () {
    newPrice(priceMonth, monthlyPrice, yearlyPrice, toggleYearly, slider)
})








