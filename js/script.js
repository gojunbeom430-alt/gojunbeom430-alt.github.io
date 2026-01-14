$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

$(document).ready(function() {
    $('button[type="submit"]').click(function(e) {
        e.preventDefault(); // 기본 폼 제출 방지

        // 입력된 값들 가져오기
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var comments = $('#comments').val().trim();

        // 1. 빈칸 검사 (Validation)
        if (name === "" || email === "" || comments === "") {
            alert("이름, 이메일, 그리고 내용을 모두 입력해주세요!");
            return; // 전송 중단
        }

        // 2. 이메일 형식 간단 검사 (선택 사항)
        if (!email.includes("@")) {
            alert("올바른 이메일 형식을 입력해주세요.");
            return;
        }

        var templateParams = {
            from_name: name,
            reply_to: email,
            message: comments
        };

        // 실제 전송 로직 (나중에 EmailJS 연동 시 사용)
        alert("전송되었습니다!");
        console.log("전송 데이터:", templateParams);
        
        // 전송 후 입력칸 비우기
        $('#name').val('');
        $('#email').val('');
        $('#comments').val('');
    });
});