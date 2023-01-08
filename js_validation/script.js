// **인풋
let elInputUserName = document.querySelector('#userName')
let elInputUserId = document.querySelector('#userId')
let elInputPassword = document.querySelector('#password')
let elInputPasswordRetype = document.querySelector('#passwordRetype')
let elInputPhone = document.querySelector('#phone')

// **메시지
let elNameFailMsg = document.querySelector('#userName + p')
let elIdFailMsg = document.querySelector('#userId + p')
let elPwFailMsg = document.querySelector('#password + p')
let elPwRetypeFailMsg = document.querySelector('#passwordRetype + p')
let elPhoneMsg = document.querySelector('#phone + .message')

// **버튼
let BtnSignUp = document.querySelector('#btnSignUp')

// **박스
let elInputBox = document.querySelector('.input-box')

// **함수 선언
// 아이디 판단함수 - 아이디가 5글자 이상인지
function isMoreThan5Length(id) {
  return id.length >= 5
}

// 비밀번호 판단함수 - 비밀번호가 비밀번호 확인과 같은지
function isMatch(pw1, pw2) {
  if (pw1 !== '' && pw2 !== '') {
    return pw1 === pw2
  }
}

// 이름, 비밀번호 - 빈값이 아닌지
function isNotEmpty(value) {
  return value !== ''
}

// 실패 메시지 토글 - 조건판단용 함수, 적용될 인풋, 나타날 메시지
// 비밀번호 확인의 경우 필요한 매개변수가 다르다(조건판단용 함수에 들어갈 매개변수가 두개다ㅠ)
// 함수를 따로 써야하는건가 다 같이 쓸수는 없을까ㅠ
function msgToggle(fn, input, elMsg, input2 = undefined) {
  console.log(input2)
  if (input2 === undefined) {
    // 두번째 인풋이 매개변수로 들어오지 않았다면
    if (fn(input.value)) {
      elMsg.classList.add('hide')
      input.classList.add('success')
      input.classList.remove('failure')
    } else {
      elMsg.classList.remove('hide')
      input.classList.remove('success')
      input.classList.add('failure')
    }
  } else {
    // 두번째 인풋이 매개변수로 들어온다면 = 비밀번호 확인의 경우라면
    if (fn(input.value, input2.value)) {
      elMsg.classList.add('hide')
      input.classList.add('success')
      input.classList.remove('failure')
    } else {
      elMsg.classList.remove('hide')
      input.classList.remove('success')
      input.classList.add('failure')
    }
  }
}

// **이벤트 핸들러
// 이름
elInputUserName.addEventListener('keyup', function () {
  return msgToggle(isNotEmpty, elInputUserName, elNameFailMsg)
})

// elInputUserName.onkeyup = function () {
//   if (isNotEmpty(elInputUserName.value)) {
//     elNameFailMsg.classList.add('hide')
//     this.classList.add('success')
//     this.classList.remove('failure')
//   } else {
//     elNameFailMsg.classList.remove('hide')
//     this.classList.remove('success')
//     this.classList.add('failure')
//   }
// }

// 아이디
elInputUserId.addEventListener('keyup', function () {
  return msgToggle(isMoreThan5Length, elInputUserId, elIdFailMsg)
})
// elInputUserId.onkeyup = function () {
//   // 조건문은 이벤트 핸들러 안에
//   if (isMoreThan5Length(elInputUserId.value)) {
//     // id가 5글자 이상이면 실패 메시지 숨김
//     elIdFailMsg.classList.add('hide')
//     this.classList.add('success')
//     this.classList.remove('failure')
//   } else {
//     // id가 5글자 미만이면 실패 메시지 출력
//     elIdFailMsg.classList.remove('hide')
//     this.classList.remove('success')
//     this.classList.add('failure')
//   }
// }

// 비밀번호
elInputPassword.addEventListener('keyup', function () {
  return msgToggle(isNotEmpty, elInputPassword, elPwFailMsg)
})
// elInputPassword.onkeyup = function () {
//   if (isNotEmpty(elInputPassword.value)) {
//     elPwFailMsg.classList.add('hide')
//     this.classList.add('success')
//     this.classList.remove('failure')
//   } else {
//     elPwFailMsg.classList.remove('hide')
//     this.classList.remove('success')
//     this.classList.add('failure')
//   }
// }

// 비밀번호 확인
elInputPasswordRetype.addEventListener('keyup', function () {
  return msgToggle(
    isMatch,
    elInputPasswordRetype,
    elPwRetypeFailMsg,
    elInputPassword
  )
})
// elInputPasswordRetype.onkeyup = function () {
//   if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
//     // 비밀번호와 확인이 일치하면 - 실패메시지 숨김
//     elPwRetypeFailMsg.classList.add('hide')
//     this.classList.add('success')
//     this.classList.remove('failure')
//   } else {
//     // 비밀번호와 확인이 일치하지 않으면 - 실패메시지 출력
//     elPwRetypeFailMsg.classList.remove('hide')
//     this.classList.remove('success')
//     this.classList.add('failure')
//   }
// }

// 가입버튼 활성화 - 모든 조건 완료시에만
elInputBox.addEventListener('keyup', function () {
  // 이름과 아이디와 비밀번호의 조건이 모두 만족하는지
  if (
    isNotEmpty(elInputUserName.value) &&
    isMoreThan5Length(elInputUserId.value) &&
    isMatch(elInputPassword.value, elInputPasswordRetype.value)
  ) {
    // 회원가입 버튼 활성화
    BtnSignUp.classList.remove('disabled')
    BtnSignUp.removeAttribute('disabled', '')
  } else {
    // 회원가입버튼 비활성화
    BtnSignUp.classList.add('disabled')
    BtnSignUp.setAttribute('disabled', '')
  }
})

// 가입 버튼 클릭시
BtnSignUp.onclick = function () {
  document.querySelector('.card').classList.add('flip')
  document.querySelector('h2').innerHTML =
    elInputUserName.value + '님,' + '<br>' + '환영합니다!'
}
