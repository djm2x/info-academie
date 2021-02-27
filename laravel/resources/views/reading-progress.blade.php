
 <style>
    /* default CSS variables */
    progress {
  -webkit-appearance: none;
  appearance: none;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 2px;
}

progress[value]::-webkit-progress-bar {
  background-color: rgba(0,0,0,0.5);
}

progress[value]::-webkit-progress-value {
  background-color: #3eb0ef;
}

progress::before {
	content: attr(data-reading-progress);
	position: absolute;
	background: none;
	font-size: .6em;
	margin: .6em .8em;
	color: white;
	right: 0;
	background: rgba(0,0,0,0.7);
	padding: .3em .6em;
	border-radius: .8em;
}

img {
	width: 100%;
	height: auto;
	vertical-align: bottom;
}

.content {
	max-width: 600px;
	margin: 0 auto;
}
 </style>


<progress data-reading-progress max="4"></progress>

@section('scripts')
<script>
    const readingProgress = (contentArea, progressBar) => {
    // Grab content area and progress bar
        const content = document.querySelector(contentArea);
        const progress = document.querySelector(progressBar);

        // Minutes remaining label template
        const label = value => `${value} minute${value !== 1 ? "s" : ""} remaining`;

        // Set the progress bar label to maximum time remaining if data attribute is present
        if (progress.hasAttribute('data-reading-progress')) {
            console.log('test');
            progress.dataset.readingProgress = label(progress.max);
        }

        const frameListening = () => {
            // Get the content area position,
            // the vertical centre of the browser window,
            // the minutes remaining without decimal places
            const contentBox = content.getBoundingClientRect();
            const midPoint = window.innerHeight / 2;
            const minsRemaining = Math.round(progress.max - progress.value);

            // Update the label if data attribute is present
            if (progress.hasAttribute('data-reading-progress')) {
                progress.dataset.readingProgress = label(minsRemaining);
            }

            // Default the progress bar to 0 before content is in view
            if (contentBox.top > midPoint) {
                progress.value = 0;
            }

            // Default the progress bar to maximum when the content is past view
            if (contentBox.top < midPoint) {
                progress.value = progress.max;
            }

            // Start updating the progress value when content as reached the vertical centre
            // Stop updating when the content is past the vertical centre
            if (contentBox.top <= midPoint && contentBox.bottom >= midPoint) {
                // Calculate the progress bar value
                progress.value =
                    (progress.max * Math.abs(contentBox.top - midPoint)) /
                    contentBox.height;
            }

            // Continue to request animation frames
            window.requestAnimationFrame(frameListening);
        };

        // Begin requesting animation frames
        window.requestAnimationFrame(frameListening);
    };

    // Init, main content selector and progress bar selector
    readingProgress(".mymain", "progress");

</script>
@stop
