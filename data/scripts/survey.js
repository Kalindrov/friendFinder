$('#submit-btn').on('click',function(event) {
    // $('#form-data').validate();

    var formData = $('#form-data').serialize();
    $.ajax({
        url: '/api/friends',
        type: 'POST',
        dataType: 'json',
        data: formData
    }).done(function(data) {
        console.log(data);
    }).fail(function() {
        console.log("you fucked up");
    }).always(function(data) {
        console.log("some data");
    });

    // here we are going to push the data from the form submission
    // name, photo url, quest1 thru quest10 should be stored into the friendArray
    // then the scores from each question is totalled to find the closest friend near the total
    // this will then display your new best friend in friend.html
})
