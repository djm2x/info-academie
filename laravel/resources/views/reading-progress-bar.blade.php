
 <style>
    /* default CSS variables */
:root {
  --text-color: #222222;
  --progress-color: #2ecc71;
  --progress-height: .5rem;
}

/* progress bar container */
.progress-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-height);
  background: rgba(255, 0, 0, 0.26);
  z-index: 1031;
}

/* progress bar */
.progress-bar-container__progress {
  height: var(--progress-height);
  background-color: var(--progress-color);
  width: 0%;
  float: left;
}

/* post content and container */
/* .mymain {
  padding: 2rem 3rem;
  box-sizing: border-box;
  height: 100vh;
  overflow: scroll;
} */
 </style>


<div class="progress-bar-container">
    <div class="progress-bar-container__progress"></div>
</div>

@section('scripts')
<script>
    // variables for progress bar and post container elements
    const progressContainerEl = document.querySelector(".mymain");
    const progressBarEl = document.querySelector(".progress-bar-container__progress");

    // function to check scroll position and update scroll progress bar accordingly
    console.log('here')
    const updateScrollProgressBar = () => {
        // get full scroll height
        const scrollHeight = progressContainerEl.scrollHeight - heightInViewport(progressContainerEl);

        console.log(scrollHeight);
        // get current scroll position
        const scrollPosition = progressContainerEl.scrollTop;

        // get scroll percentage and set width of progress bar
        const scrollPercentage = (scrollPosition / scrollHeight) * 100;
        progressBarEl.style.width = scrollPercentage + "%";
    }

    // bind window onload and onscroll events to update scroll progress bar width
    progressContainerEl.addEventListener("scroll", updateScrollProgressBar)
    progressContainerEl.addEventListener("load", updateScrollProgressBar)

    // function to get visible height in viewport
    // some code taken from user Roko C. Buljan on https://stackoverflow.com/questions/24768795/get-the-visible-height-of-a-div-with-jquery
    function heightInViewport(el) {
        var elH = el.offsetHeight,
        H   = document.body.offsetHeight,
        r   = el.getBoundingClientRect(), t=r.top, b=r.bottom;

        return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
    }
</script>
@stop
