let confirmBtn = document.getElementById("confirm-btn");
confirmBtn.addEventListener("click", function () {
    check();
});

let secretNum = 0;

function range() {
    let minRange = document.getElementById("min-value").textContent;
    let maxRange = document.getElementById("max-value").textContent;

    secretNum = Math.floor(Math.random() * (Number(maxRange) - Number(minRange) + 1)) + Number(minRange);
}

let firstDificultyRange = document.getElementById("guess-dificulry-range-first");
let secDificultyRange = document.getElementById("guess-dificulry-range-sec");
let thirdDificultyRange = document.getElementById("guess-dificulry-range-third");
let fourthDificultyRange = document.getElementById("guess-dificulry-range-fourth");
let fifthDificultyRange = document.getElementById("guess-dificulry-range-fifth");

document.addEventListener("DOMContentLoaded", function() {
    // Функція, яка буде викликатися при зміні значень
    function updateStyle() {
        style();
        range();
    }

    // Створюємо MutationObserver
    const observer = new MutationObserver(updateStyle);

    // Налаштовуємо спостереження за змінами в <span>
    const minValueSpan = document.getElementById("min-value");
    const maxValueSpan = document.getElementById("max-value");

    observer.observe(minValueSpan, { childList: true, characterData: true, subtree: true });
    observer.observe(maxValueSpan, { childList: true, characterData: true, subtree: true });

    // Викликаємо style() при першому завантаженні
    style();
});

function style() {
    let minRange = document.getElementById("min-value").textContent;
    let maxRange = document.getElementById("max-value").textContent;

    let numbersBetween = maxRange - minRange + 1;
    let rengeValue = document.getElementById("guess-value-range").textContent = numbersBetween;
    if (numbersBetween <= 20) {
        firstDificultyRange.style.opacity = "50%";
        secDificultyRange.style.opacity = "50%";
        thirdDificultyRange.style.opacity = "50%";
        fourthDificultyRange.style.opacity = "50%";
        fifthDificultyRange.style.opacity = "100%";
    } else if (numbersBetween <= 40) {
        firstDificultyRange.style.opacity = "50%";
        secDificultyRange.style.opacity = "50%";
        thirdDificultyRange.style.opacity = "50%";
        fourthDificultyRange.style.opacity = "100%";
        fifthDificultyRange.style.opacity = "50%";
    }else if (numbersBetween <= 60) {
        firstDificultyRange.style.opacity = "100%";
        secDificultyRange.style.opacity = "50%";
        thirdDificultyRange.style.opacity = "50%";
        fourthDificultyRange.style.opacity = "50%";
        fifthDificultyRange.style.opacity = "50%";
    }else if (numbersBetween <= 80) {
        firstDificultyRange.style.opacity = "50%";
        secDificultyRange.style.opacity = "100%";
        thirdDificultyRange.style.opacity = "50%";
        fourthDificultyRange.style.opacity = "50%";
        fifthDificultyRange.style.opacity = "50%";
    } else if (numbersBetween <= 101) {
        firstDificultyRange.style.opacity = "50%";
        secDificultyRange.style.opacity = "50%";
        thirdDificultyRange.style.opacity = "100%";
        fourthDificultyRange.style.opacity = "50%";
        fifthDificultyRange.style.opacity = "50%";
    }
}

function check() {
    let minRange = parseInt(document.getElementById("min-value").textContent);
    let maxRange = parseInt(document.getElementById("max-value").textContent);

    let firstNum, secNum;

    // Цикл для введення чисел
    while (true) {
        firstNum = parseInt(document.getElementById("guess-input-first").value);
        secNum = parseInt(document.getElementById("guess-input-sec").value);

        if (firstNum + secNum > minRange && firstNum + secNum < maxRange) {
            break; // Якщо числа в проміжку, виходимо з циклу
        } else {
            alert("Введені числа не входять у проміжок. Спробуйте ще раз.");
            return; // Або можна очистити поля введення для повторного вводу
        }
    }

    let coinsContainer = document.getElementById("coins-container");
    let coins = coinsContainer.getElementsByTagName("img");

    let numberOfCoins = (firstNum + secNum === secretNum) ? 2 : 1; // Кількість монет

    for (let i = 0; i < numberOfCoins; i++) {
        let coinImg = document.createElement("img");
        coinImg.src = "./main/coin.png";
        coinImg.style.display = 'block';
        coinImg.style.width = '55px'; // Ширина монети
        coinImg.style.height = '55px'; // Висота монети
        coinImg.style.position = 'absolute';
        coinImg.style.top = '0';

        // Задаємо позицію для нової монети
        const coinWidth = 55; // Ширина монети
        const spacing = 2; // Відстань між монетами
        const coinsContainerWidth = coinsContainer.clientWidth; // Ширина контейнера

        let lastCoinPosition = coins.length > 0 ? coins[coins.length - 1].getBoundingClientRect().right - coinsContainer.getBoundingClientRect().left : 0;

        // Перевіряємо, чи монета вміститься в поточному рядку
        if (lastCoinPosition + coinWidth > coinsContainerWidth) {
            // Якщо не вміститься, ставимо монету на новий ряд
            let currentRow = Math.floor(coins.length / Math.floor(coinsContainerWidth / (coinWidth + spacing)));
            coinImg.style.left = '0px'; // Відновлюємо позицію до початку контейнера
            coinImg.style.top = (currentRow * (coinWidth + spacing)) + 'px'; // Розраховуємо позицію по вертикалі
        } else {
            // В іншому випадку просто ставимо її у звичне місце
            coinImg.style.left = (lastCoinPosition + spacing) + 'px'; // Відстань між монетами
        }

        coinsContainer.appendChild(coinImg);

        let position = 0;
        let velocity = 2; // Початкова швидкість падіння
        let gravity = 0.2; // Ефект гравітації
        let bounce = -6; // Швидкість відскоку
        let hasBounced = false; // Відстежуємо, чи відбувся відскок

        const fallInterval = setInterval(function () {
            if (position >= coinsContainer.clientHeight - 55 && !hasBounced) {
                velocity = bounce; // Відскок вгору
                hasBounced = true; // Відзначаємо, що відскок відбувся
            } else if (hasBounced) {
                velocity = 0; // Після відскоку зупиняємо рух
            } else {
                velocity += gravity; // Прискорення падіння під дією гравітації
                position += velocity;

                if (position >= coinsContainer.clientHeight - 55) {
                    position = coinsContainer.clientHeight - 55; // Приведення позиції до дна контейнера
                    clearInterval(fallInterval); // Зупинка анімації
                }

                coinImg.style.top = position + 'px';
            }

            for (let j = 0; j < coins.length; j++) {
                if (coins[j] !== coinImg) {
                    const rect1 = coinImg.getBoundingClientRect();
                    const rect2 = coins[j].getBoundingClientRect();

                    if (!(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom)) {
                        if (!hasBounced) {
                            velocity = bounce; // Відштовхування при зіткненні
                            hasBounced = true; // Монета може відскочити лише один раз
                        } else {
                            velocity = 0; // Якщо вже відскакувала, більше не рухаємо
                        }
                    }
                }
            }

            const coinRect = coinImg.getBoundingClientRect();
            if (coinRect.left < coinsContainer.getBoundingClientRect().left) {
                coinImg.style.left = '0px'; // Ліва межа
            }
            if (coinRect.right > coinsContainer.getBoundingClientRect().right) {
                coinImg.style.left = (coinsContainer.clientWidth - 55) + 'px'; // Права межа
            }

            if (position >= coinsContainer.clientHeight - 55) {
                clearInterval(fallInterval);
                coinImg.style.top = (coinsContainer.clientHeight - 55) + 'px';
            }
        }, 20);
    }
}

range();
style();

//лишились коіни та анімація для діапазону
