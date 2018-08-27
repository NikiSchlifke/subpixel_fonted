<template>
    <svg xmlns="http://www.w3.org/2000/svg" :viewBox="boundingBox" :width="canvasWidth" :height="canvasHeight">
        <g v-for="(yVal, yNum) in yPixels" class="bg-black" xmlns="http://www.w3.org/2000/svg">
            <pixel-r-g-b v-for="(xVal, xNum) in xPixels" :sub-pixel-width="pixelSize/3" :x="xNum*pixelSize"
                         :y="yNum*pixelSize"></pixel-r-g-b>
        </g>
    </svg>
</template>

<script>
    import PixelRGB from './PixelRGB'

    export default {
        name: "PixelGrid",
        components: {
            PixelRGB
        },
        props: {
            xPixels: {default: 12},
            yPixels: {default: 16},
            pixelSize: {default: 25}
        },
        computed: {
            canvasWidth() { return this.pixelSize * this.xPixels },
            canvasHeight() { return this.pixelSize * this.yPixels },
            boundingBox() {
                return "0 0 " + this.canvasWidth + " " + this.canvasHeight
            }

        }
    }
</script>

<style scoped>

</style>