// $(document).ready(... This is jQuery function that runs when the page is loaded.
// Do you want to load when the page is ready or when some button is clicked?
// Are you waiting for an input from the user???

$(document).ready(function () {
    
    $("#btn").click(function () {
        $('.items').remove()
        var search = $("#artist").val()
        $("#artist").val("")
        $.ajax({
            url: `http://itunes.apple.com/search?term=${search}`,
            dataType: 'JSONP'
        })
            .done(function (data) {
                console.log(data);
                for (var i = 0; i < data.results.length; i++) {
                    $('#songs').append(`<a href="${data.results[i].trackViewUrl}"><li class="items"><div class="container"><h2>${data.results[i].artistName}</h2><h3>${data.results[i].trackName}</h3><img src="${data.results[i].artworkUrl60}">
                    <audio controls><source src="${data.results[i].previewUrl}" type="audio/aac">Your browser does not support the audio element.</audio></div></li>`);

                
                }
            })
            .fail(function (data) {
                console.log(data);
                $('#songs').append(data.status);
            })

    })
$("#artist").keypress(function(e) {
    if(e.which == 13){
        $("#btn").click()
    }
})
});// End of on ready part


