document.querySelectorAll('.rating label input').forEach(input => {
    input.addEventListener('change', function() {
        const section = this.name;

        document.querySelectorAll(`input[name="${section}"]`).forEach(radio => {
            const img = radio.parentElement.querySelector('img');
            if (radio.checked) {
                img.src = img.dataset.gif;
                radio.parentElement.classList.add('selected');
            } else {
                img.src = img.dataset.static;
                radio.parentElement.classList.remove('selected');
            }
            img.classList.toggle('blur', !radio.checked);
        });
    });
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formSection').style.display = 'none';
    document.getElementById('userInfoSection').style.display = 'block';
});

document.getElementById('backToFeedback').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('userInfoSection').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
});

document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('userInfoSection').style.display = 'none';
    document.getElementById('thankYouSection').style.display = 'block';

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const comments = document.getElementById('comments').value;
    const billno = document.getElementById('billno').value;

    const quality = document.querySelector('input[name="food_quality"]:checked').value;
    const service = document.querySelector('input[name="food_service"]:checked').value;
    const ambience = document.querySelector('input[name="ambience"]:checked').value;
    const cleanliness = document.querySelector('input[name="cleanliness"]:checked').value;
    const overall_experience = document.querySelector('input[name="overall_experience"]:checked').value;

    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSfaLOphN4z3G9xBMhtqv9u7gLjOcqcuMwwNjbS32ls4VGVZmw/formResponse";
    const formData = new FormData();
    formData.append('entry.893694471', name);
    formData.append('entry.1954609026', mobile);
    formData.append('entry.412896701', comments);
    formData.append('entry.613536960', billno);
    formData.append('entry.967031324', quality);
    formData.append('entry.1027163154', service);
    formData.append('entry.275156583', ambience);
    formData.append('entry.48523242', cleanliness);
    formData.append('entry.277761559', overall_experience);

    fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(response => {
        alert("Thank you for your feedback!");
    }).catch(error => {
        console.error('There was an error submitting your feedback.', error.message);
    });
});
