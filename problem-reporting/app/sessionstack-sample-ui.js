(function() {
    $(document).ready(function() {
        $('.sessionstack-recording-button').click(function() {
            sessionstack('isRecording', function(result) {
                if (result) {
                    sessionstack('stopRecording');
                    setIdleUI();
                } else {
                    sessionstack('startRecording');
                    setRecordingUI();;
                }
            });
        });


        sessionstack('isRecording', function(result) {
            if(result) {
                setRecordingUI();
            } else {
                setIdleUI();
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