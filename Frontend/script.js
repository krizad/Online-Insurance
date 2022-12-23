
$(document).ready(function () {

    // Example starter JavaScript for disabling form submissions if there are invalid fields

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })

    var form = document.getElementById('form');
    form.addEventListener("submit", e => {
        e.preventDefault();
        // fetch(form.action, {
        //     method: "POST",
        //     body: new FormData(document.getElementById("form")),
        // }).then(
        //     response => response.json()
        // ).then((html) => {
        //     // you can put any JS code here
        //     alert('ส่งข้อมูลสำเร็จ')
        // });

        //post to /push

        let name = document.getElementById("nameInput").value;
        let phone = document.getElementById("phoneInput").value;
        let lineId = document.getElementById("lineIdInput").value;
        let interest = $("#interestInput").find(":selected").text();

        if(name == "" || phone == "" || lineId == "" || interest == ""){
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }
        fetch('/push', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "phone": phone,
                "lineId": lineId,
                "interest": interest
            })
        })
            .then(
                response => response.json()
            ).then((html) => {
                // you can put any JS code here
                alert('ส่งข้อมูลสำเร็จ')
            }
            )

    });



    // $("#line").slideToggle();
    $("#line,#lineImg").click(function () {
        window.open("https://line.me/ti/p/nkqkHIKPgt", "_blank");
    });

    // $("#facebook").slideToggle();
    $("#facebook").click(function () {
        window.open("https://www.facebook.com/djpingpong.inthason", "_blank");
    });

    // $("#phone").slideToggle();
    $("#phone").click(function () {
        window.open("tel:0979245362", "_blank");
    });

    $("#chat").click(function () {
        $("#chat").find("img").toggleClass("d-none");

        $("#line").slideToggle();
        $("#facebook").slideToggle();
        $("#phone").slideToggle();
    });

    $("#button").click(function () {
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 1000);
    });

    //hide button when form is shown
    $(window).scroll(function () {
        var threshold = $("#form").height() - 100; // number of pixels before bottom of page that you want to start fading
        var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
        if (op <= 1) {
            $("#button").hide('slide', { direction: 'down' }, 500)

        } else {
            $("#button").show('slide', { direction: 'down' }, 500)
        }

    });
});
