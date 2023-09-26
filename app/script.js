$(document).ready(function () {
  $("input").focusin(function () {
    $(this).css("background-color", "#ffc");
  });
  $("input").focusout(function () {
    $(this).css("background-color", "#fff");
  });
  //   $("#password").keyup(function validate() {
  //     let pwdLength = /^(?=.*[!#$^])(?=.*[a-zA-Z]).{8,16}$/;
  //     // let pwdRequirement = /^(?=.*[!#$^])(?=.*[a-zA-Z]).{8,16}$/;
  //     // let pwdSpecial = /[!#$^]+/;
  //     const pwd = $(this).val();
  //     console.log(pwd);
  //     let pwdValid = pwdLength.test(pwd);

  //     if (!pwdValid) {
  //       $("#pwd-restriction").text(
  //         "atleast 8 characters, must include one of !#$^"
  //       );
  //     } else if (pwdValid) {
  //       $("#pwd-restriction").text("");
  //     }
  //   });
  $("#submitBtn").click(function (e) {
    const mail = $("#mailId").val();
    const password = $("#password").val();

    if (!mail || !password) {
      $(this).css("background-color", "#ddd");
    } else if (password) {
      let pwdLength = /^(?=.*[!#$^])(?=.*[a-zA-Z]).{8,16}$/;
      let pwdValid = pwdLength.test(password);
      e.preventDefault();

      if (!pwdValid) {
        $("#pwd-restriction").text(
          "atleast 8 characters, must include one of !#$^"
        );
      } else {
        $("#pwd-restriction").text("");
        const people = {
          new: new Date().getTime(),
          email: mail,
          password: password,
        };
        console.log(people);
      }
    }
  });
});
