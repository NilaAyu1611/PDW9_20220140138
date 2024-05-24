document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submit-btn');
    var modal = document.getElementById("resultModal");
    var span = document.getElementsByClassName("close")[0];
    var cancelBtn = document.getElementById('cancel-btn');
    var saveBtn = document.getElementById('save-btn');
    var form = document.getElementById('registration-form');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        var fullName = document.querySelector('input[name="full-name"]').value;
        var NIM = document.querySelector('input[name="NIM"]').value;
        var phoneNumber = document.querySelector('input[name="phone-number"]').value;
        var eventDate = document.querySelector('input[name="event-date"]').value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var interests = [];
        document.querySelectorAll('input[name="interest"]:checked').forEach(function(interest) {
            interests.push(interest.value);
        });
        var address = document.querySelector('input[name="address"]').value;
        var country = document.querySelector('select[name="country"]').value;
        var city = document.querySelector('input[name="city"]').value;

        // Create result message
        var resultMessage = "<h3>Biodata Details:</h3>" +
            "<p><strong>Full Name:</strong> " + fullName + "</p>" +
            "<p><strong>NIM:</strong> " + NIM + "</p>" +
            "<p><strong>Phone Number:</strong> " + phoneNumber + "</p>" +
            "<p><strong>Event Date:</strong> " + eventDate + "</p>" +
            "<p><strong>Gender:</strong> " + gender + "</p>" +
            "<p><strong>Interests:</strong> " + interests.join(", ") + "</p>" +
            "<p><strong>Address:</strong> " + address + ", " + city + ", " + country + "</p>";

        // Display result message in modal
        var resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = resultMessage;

        // Show the modal
        modal.style.display = "block";
    });

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle cancel button click
    cancelBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Handle save button click
    saveBtn.addEventListener('click', function() {
        Swal.fire({
            title: '🌝Data Berhasil Disimpan!✅',
            text: 'Terima kasih atas kontribusinya.✨',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                modal.style.display = "none";
                form.submit();
            }
        });
    });
});


