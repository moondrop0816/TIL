const calculator = document.querySelector(".calculator"); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector(".calculator__buttons"); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector(".calculator__operend--left"); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector(".calculator__operator"); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector(".calculator__operend--right"); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector(".calculator__result"); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
    let result = 0;
    // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
    // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
    // textContent로 불러온 값이 string이기 때문에 number타입으로 바꿔줘야함
    let num1 = Number(n1);
    let num2 = Number(n2);

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }

    // 1. 첫번째 숫자, 연산자, 두번째 숫자를 확정한다 => 완성
    // 2. 세가지를 calculate에 전달하고 돌려받은 결과값이 마지막 칸에 입력되어야 한다
    return String(result);
}

buttons.addEventListener("click", function (event) {
    // 버튼을 눌렀을 때 작동하는 함수입니다.

    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
    // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

    if (target.matches("button")) {
        // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
        // 클릭된 HTML 엘리먼트가 button이면
        if (action === "number") {
            // 그리고 버튼의 클레스가 number이면
            // 아래 코드가 작동됩니다.

            // 첫번째 숫자가 0이 아니라면(입력된 값이 있다면) 버튼을 클릭했을때 두번째 칸에 버튼에 적힌 숫자를 입력
            if (firstOperend.textContent !== "0") {
                secondOperend.textContent = buttonContent; // 두번째 숫자 입력
            } else {
                firstOperend.textContent = buttonContent; // 첫번째 숫자 입력
            }
        }

        if (action === "operator") {
            operator.textContent = buttonContent; // 연산자 입력
        }

        if (action === "decimal") {
            console.log("소수점 버튼");
        }

        if (action === "clear") {
            console.log("초기화 버튼");
            firstOperend.textContent = "0";
            operator.textContent = "+";
            secondOperend.textContent = "0";
            calculatedResult.textContent = "0";
        }

        if (action === "calculate") {
            calculatedResult.textContent = calculate(
                firstOperend.textContent,
                operator.textContent,
                secondOperend.textContent
            );
        }
    }
});

// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector(".calculator__display--for-advanced"); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener("click", function (event) {
    // 버튼을 눌렀을 때 작동하는 함수입니다.

    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
    // ! 위 코드는 수정하지 마세요.

    // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
    if (target.matches("button")) {
        if (action === "number") {
            // 1. number가 눌러지면 디스플레이에 누른 버튼의 숫자가 나타난다
            // 2. 0이 아닌 값이 디스플레이에 나타나있을경우, 누른 버튼의 값이 첫번째 숫자의 뒤에 붙는다
            // 3. 연산자 키를 누른 후(perviousKey = operator) 숫자 버튼이 입력될 경우, 새로운 값이 시작되어야 한다.
            if (display.textContent === "0" || previousKey === "operator") {
                display.textContent = buttonContent;
            } else {
                display.textContent = display.textContent + buttonContent;
            }
            previousKey = "number";
        }
        if (action === "operator") {
            // 1. 클릭된 연산자를 저장해둔다
            // 2. 연산자 다음으로는 새로운 값이 입력될 것이다. => 처음의 값을 저장해야 한다.
            // nightmare : 연산자가 저장된 상태에서 또 연산자를 눌렀을때 중간중간 계산이 되도록 해야한다.
            // 연산자를 반복해서 누르는 경우가 아니고, 방금 전에 엔터를 누른게 아닐때
            if (
                operatorForAdvanced &&
                previousKey !== "operator" &&
                previousKey !== "calculate"
            ) {
                previousNum = display.textContent; // 현재 화면에 나타나 있는 값
                display.textContent = calculate(
                    firstNum, // 이전 입력된 수
                    operatorForAdvanced,
                    previousNum
                );
            }
            operatorForAdvanced = buttonContent;
            firstNum = display.textContent;
            previousKey = "operator";
        }

        if (action === "decimal") {
            // 1. .이 입력되면 숫자 뒤에 .을 추가한다
            // 2. 만약 디스플레이에 이미 .이 추가되어있다면 .을 추가하지 않는다(.이 1개만 들어가게)
            // 3. 정수 부분 없이 .과 숫자를 눌러서 작동하는 경우 0.이 붙은 소수가 되어야 한다.
            // => 마지막으로 누른 버튼이 연산자이고 소숫점 버튼이 클릭되었다면 두번째 숫자의 값의 시작을 0.으로 만든다
            if (
                !display.textContent.includes(".") &&
                previousKey !== "operator"
                // .이 없음 + 이전 키가 연산자가 아니다(숫자) = 소숫점만 추가해주면 됨
            ) {
                display.textContent = display.textContent + ".";
            } else if (previousKey === "operator") {
                // 연산자 다음에 소수점 클릭 = 정수가 될 숫자가 없음! = 0으로 시작해야 함
                display.textContent = "0.";
            }
            previousKey = "decimal";
            console.log(previousKey);
        }
        if (action === "clear") {
            // 1. 클리어 버튼이 클릭되면 계산에 사용한 모든 값을 초기화한다
            // 사용된 값 : firstNum, operatorForAdvanced, previousNum, display.textContent
            firstNum = undefined;
            operatorForAdvanced = undefined;
            previousNum = undefined;
            display.textContent = "0";
            previousKey = "clear";
            console.log(previousKey);
        }
        if (action === "calculate") {
            // 1. 디스플레이에 숫자1(연산자)숫자2 한 결과가 나타나야한다 => 함수호출
            // 2. 연산자가 저장되어있으면서 엔터가 눌러졌을때만 게산이 실행되게 한다
            // 3. 엔터가 여러번 눌러졌을때 이전 숫자에 저장된 연산자로 반복된 계산이 수행되어야 한다.
            // 엔터가 여러번 눌러졌다 = 현재 previousKey가 calculate이다 (엔터 입력 1번 이상)
            if (operatorForAdvanced) {
                if (previousKey === "calculate") {
                    // 2번 이상으로 엔터가 눌릴때
                    // 현재 디스플레이에 있는 숫자에 이전 숫자와 연산자가 계산됨
                    firstNum = display.textContent;
                    display.textContent = calculate(
                        firstNum,
                        operatorForAdvanced,
                        previousNum // 처음 엔터가 눌릴때 화면에 있었던 두번째 값
                    );
                    console.log(previousNum);
                } else {
                    // 처음으로 엔터가 눌릴때
                    previousNum = display.textContent;
                    display.textContent = calculate(
                        firstNum,
                        operatorForAdvanced,
                        previousNum
                    );
                }
                previousKey = "calculate";
                console.log(previousKey);
            }
        }
    }
});
