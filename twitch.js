$(document).ready(function() {
    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var stream = "";
    var statusClass = "";

    users.map(getInfo);

    function getInfo(name) {
        $.ajax({
            type: 'GET',
            url: 'https://wind-bow.glitch.me/twitch-api/streams/' + name,
            dataType: 'jsonp',
            success: function(streamData) {
                $.ajax({
                    type: 'GET',
                    url: 'https://wind-bow.glitch.me/twitch-api/users/' + name,
                    dataType: 'jsonp',
                    success: function(data) {
                        if (streamData.stream == null) {
                            stream = "Offline";
                            statusClass = "offline";
                            console.log(stream);
                        }
                        else  {
                            stream = streamData.stream.channel.status;
                            statusClass = "online";
                            console.log(stream);
                            
                        };
                        $(".popular-streamers").append('<div class="allStreams row ' + statusClass + '"><div class="col-md-1 twitchIcon text-center"">' + '<img class="logo-icon" src="' 
                        + data.logo + '" alt="' + name+ ' logo icon"></div><div class="col-md-3 twitchUser text-center"><a target="_blank" href="https://www.twitch.tv/' 
                        + name + '">' + name + '</div><div class="col-md-8 twitchStatus text-center">' + stream + '</div></a></div>');

                    }
                });
            }
        });
    }
    $(document).on('click', ".liAll", function() {
        $(this).addClass("itemOn");
        $(this).removeClass("itemOff");
        $(".liOnline").addClass("itemOff");
        $(".liOffline").addClass("itemOff");
        $(".liOnline").removeClass("itemOn");
        $(".liOffline").removeClass("itemOn");
        $(".online").show("slow");
        $(".offline").show("slow");
    });
    $(document).on('click', ".liOnline", function() {
        $(this).addClass("itemOn");
        $(this).removeClass("itemOff");
        $(".liAll").addClass("itemOff");
        $(".liOffline").addClass("itemOff");
        $(".liAll").removeClass("itemOn");
        $(".liOffline").removeClass("itemOn");
        $(".online").show("slow");
        $(".offline").hide("slow");
    });
    $(document).on('click', ".liOffline", function() {
        $(this).addClass("itemOn");
        $(this).removeClass("itemOff");
        $(".liOnline").addClass("itemOff");
        $(".liAll").addClass("itemOff");
        $(".liOnline").removeClass("itemOn");
        $(".liAll").removeClass("itemOn");
        $(".offline").show("slow");
        $(".online").hide("slow");
    });
   
});

