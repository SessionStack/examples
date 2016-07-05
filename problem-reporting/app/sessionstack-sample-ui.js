(function() {
    $(document).ready(function() {
        var isRecording = false;

        sessionstack('isRecording', function(result) {
            if(result) {
                isRecording = true;
                setRecordingUI();
            } else {
                isRecording = false;
                setIdleUI();
            }
        });

        $('.sessionstack-recording-button').click(function() {
            if (isRecording) {
                sessionstack('stopRecording');
                isRecording = false;
                setIdleUI();
            } else {
                sessionstack('startRecording');
                isRecording = true;
                setRecordingUI();
            }
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