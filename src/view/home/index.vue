<template>
	<div class="video-page">
        <videoBar/>
        <div class="video-warp">
           <video class="video-full-bg" preload="auto" autoPlay muted loop src="../../assets/img/pt.mp4"></video>
           <!-- <video class="video-full-bg" preload="auto"  muted loop src="../../assets/img/video/pt.mp4"></video> -->
        </div>
	</div>
</template>

<script>
    import VideoBar from '../../common/videoBar.vue'
	export default {
		name: 'index',
		components: {
            VideoBar,
		}
	}
</script>
<style>
    @import "../../assets/css/video.css";
</style>
 