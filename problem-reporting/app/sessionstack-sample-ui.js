(function() {
    $(document).ready(function() {
        var isRecording = false;

        sessionstack('isRecording', function(result) {
            isRecording = result;

            if(isRecording) {
                setRecordingUI();
            } else {
                setIdleUI();
            }
        });

        $('.sessionstack-recording-button').click(function() {
            if (isRecording) {
                sessionstack('stopRecording');
                setIdleUI();
            } else {
                sessionstack('startRecording');
                setRecordingUI();
            }

            isRecording = !isRecording;
        });
    });

    function setRecordingUI() {
        $('.sessionstack-recording-button').html('Stop');
        $('.sessionstack-image-status').attr('src', 'img/recording.png');
    }

    function setIdleUI() {
        $('.sessionstack-recording-button').html('Record');
        $('.sessionstack-image-status').attr('src', 'img/idle.png');
    }
})();