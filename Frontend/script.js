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
    fetch('/push', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": document.getElementById("nameInput").value,
            "phone": document.getElementById("phoneInput").value,
            "lineId": document.getElementById("lineIdInput").value,
            "interest": document.getElementById("interestInput").value,
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
