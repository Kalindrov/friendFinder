$('#submit').submit(function(event) {
    $('#form-data').validate();

    var formData = $('#form-data').serialize();
    // $.ajax({
    //     url: '/api/friends',
    //     type: 'post',
    //     dataType: 'json',
    //     data: formData,
    //     success: function () {
    //         console.log("does it work?");
    //     }
    // });

    // here we are going to push the data from the form submission
    // name, photo url, quest1 thru quest10 should be stored into the friendArray
    // then the scores from each question is totalled to find the closest friend near the total
    // this will then display your new best friend in friend.html
})
