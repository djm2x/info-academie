<style>
    hr {
  border: 0;
  clear: both;
  display: block;
  margin: 2.4rem auto;
  text-align: center;
  width: 100%;
  color: white;
  z-index: 5;
}

/* -- Animated hr -- */

.progress2 {
  background: rgba(1, 15, 30, 0.1);
  height: 1px !important;
  overflow: hidden;
  position: relative;
}

.progress2::before {
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-name: progress;
  background: #111;
  content: "";
  display: block;
  height: 1px;
  position: absolute;
  width: 80px;
  background: purple;
}

@keyframes progress {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(1440px);
  }
}
</style>

<div class="d-flex justify-content-center align-items-center" style="height: 100px; background-color: white">
    <hr class="progress2" >
</div>


