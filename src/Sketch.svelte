<!-- Sketch.svelte -->
<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import p5 from "p5";

    export let name: string;
    export let data: { [key: string]: any } = {};
	export let onUpdate: ((data: { [key: string]: any }) => void) = () => {};

    let p5Instance: p5;
    let sketchId: string = Math.random().toString(36).substring(7); // You can change this for a uuidv4 !
    let isRunning: boolean = true;
    let isPaused: boolean = false;

    onMount(async () => await getInstance());

    onDestroy(() => p5Instance.remove());

    let getInstance = async () => {
        const { default: sketch } = await import(`./sketches/${name}.js`);
        p5Instance = new p5(
            (p: p5) => sketch(p, p5, data, onUpdate),
            document.getElementById(`canvas-${sketchId}`)
        );
    };

    let togglePause = () => {
        isPaused = !isPaused;
        if (isRunning && !isPaused) {
            p5Instance.loop();
            return;
        }
        p5Instance.noLoop();
    };

    let resetSketch = () => {
        isRunning = false;
        isPaused = false;
        p5Instance.remove();
        getInstance();
        setTimeout(() => (isRunning = true), 0);
    };
</script>

<div>
    <div id={`canvas-${sketchId}`} />
    <div>
        <button on:click={togglePause}>
            {isPaused ? "Resume" : "Pause"}
        </button>
        <button on:click={resetSketch}> Reset </button>
    </div>
</div>