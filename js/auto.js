
<script type="text/javascript"></script>
var tag = document.createElement('script');
tag.id = 'player1';
tag.src ="https://www.youtube.com/embed/x5quhVqGeKw";
var firstScriptTag  = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    
    player = new YT.Player('player', {
    videoId: 'x5quhVqGeKw',
           playerVars: { 'autoplay': 1, 'controls': 0 },
        events: {
           'onReady': onPlayerReady,
           'onStateChange': onPlayerStateChange
           'onError': onPlayerError
       }
          
       })
    };
  
function onPlayerReady (event) {
    document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
    event.target.setVolume(0);
    event.target.playVideo();
}
function changeBorderColor(playerStatus) {
    var color;
    if (playerStatus == -1) {
        color = "#37474F"; // unstarted = gray
    } else if (playerStatus == 0) {
        color  = "#FFFF00"; // ended = yellow
    } else  if (playerStatus == 1) {
        color = "#33691E"; // playing = green
    } else if (playerStatus == 2) {
        color = "#DD2C00"; // paused = red
    } else if (playerStatus == 3) {
        color = "#AA00FF"; // buffering = purple
    } else if  (playerStatus == 5) {
        color = "#FF6DOO"; // video cued = orange
    }
    if (color) {
        document.getElementById('player').style.borderColor = color;
    }
}
function onPlayerStateChange(event) {
    changeBorderColor(event.data);
}

