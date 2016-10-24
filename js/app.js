var player;
var modVP;
var currentVideoID;

$(function() {
    initEventTracking();
    brightcove.createExperiences();
    $('#myModal').on('shown.bs.modal', function () {
        $('#myModal input[name=q]').focus();
    });
    $('#myModal').on('hidden.bs.modal', function (e) {
        $('#myModal input[name=q]').val(null);
    });
    $('[data-action=open-search-overlay]').click(function (e) {
        e.preventDefault();
        $('.afc-menu-social [data-target=#myModal]').click();
    });
});

function initEventTracking() {
    $('[data-track-event-category][data-track-event-action]').click(function (e) {
        var category = $(this).data('track-event-category');
        var action = $(this).data('track-event-action');
        var label = $(this).data('track-event-label') ? $(this).data('track-event-label') : null;
        var value = $(this).data('track-event-value') ? $(this).data('track-event-value') : null;
        trackEvent(category, action, label, value);
    });
}

function trackEvent(category, action, label, value, isNonInteraction) {
    var options = {};
    if (typeof label === "undefined") label = null;
    if (typeof value === "undefined") value = null;
    if (typeof isNonInteraction !== "undefined") options.nonInteraction = isNonInteraction;
}

function onPlayerLoaded(experienceID) {
    player = brightcove.api.getExperience(experienceID);
    modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
}

function onPlayerReady(e) {
    modVP.addEventListener(brightcove.api.events.MediaEvent.BEGIN, onMediaBegin);
    modVP.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, onMediaComplete);
}

function onMediaComplete(e) {
    var videos = $('[data-video-id][data-action=play-video]');
    var selected = $('[data-video-id=' + currentVideoID + '][data-action=play-video]');
    index = $(videos).index(selected);
    if (index + 1 < videos.length) {
        playVideo($(videos[index + 1]).data('video-id'));
    }
}

function onMediaBegin(evt) {
    updatePlaylistThumbnails();
}

function playVideo(id) {
    modVP.loadVideoByID(id);
}

function updatePlaylistThumbnails() {
    modVP.getCurrentVideo(function (result) {
        currentVideoID = result.id;
    });
}
