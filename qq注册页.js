const phonenumberDom = document.querySelector(".phonenumber input");
const errorDom = document.querySelector(".error");
const nickDom = document.querySelector(".nick input");
const nickerrorDom = document.querySelector(".nickerror");
const passwordDom = document.querySelector(".password input");
const passworderror1Dom = document.querySelector(".passworderror1");
const passworderror2Dom = document.querySelector(".passworderror2");
    phonenumberDom.addEventListener("input",function() {
        if (this.value !== "" && this.value.length !== 11) {
            errorDom.innerHTML = "手机号码格式不正确";
        } else {
            errorDom.innerHTML = "";
        }
    });
    nickDom.addEventListener("input",function () {
        if(this.value === "") {
            nickerrorDom.innerHTML = "昵称不可以为空";
        } else {
            nickerrorDom.innerHTML = "";
        }
    });
    passwordDom.addEventListener("focus",function () {
         passworderror1Dom.innerHTML = `<div>不能包含空格</div>
          <div>长度为8-16个字符</div>
          <div>必须包含字母、数字、符号中的至少两种</div>`
    });
    passwordDom.addEventListener("blur",function () {
        passworderror1Dom.innerHTML = "";
    });

