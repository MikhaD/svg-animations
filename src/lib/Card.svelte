<script lang="ts">
	import { scale } from "svelte/transition";

	export let animation: string | null;
	const link = `./animations/${animation}.svg`;
</script>

<div transition:scale>
	<img src={link} alt={animation} />
	<span on:click={() => (animation = null)}>×</span>
	<a href={link} download={animation} title="download">
		<svg viewBox="0 0 224 173" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M152.021 65.186l-3.893-13.8C142.201 30.376 122.877 15 100 15c-27.614 0-50 22.386-50 50 0 2.904.246 5.74.715 8.489l3.071 17.994L35 91c-11.046 0-20 8.954-20 20s8.954 20 20 20h20.5v15H35c-19.33 0-35-15.67-35-35 0-14.916 9.33-27.653 22.473-32.692 3.89-1.49 9.042-2.296 13.456-2.296A65.418 65.418 0 0135 65c0-1.343.04-2.677.121-4C37.187 26.965 65.445 0 100 0c29.768 0 54.862 20.01 62.565 47.314A50.146 50.146 0 01174 46c27.614 0 50 22.386 50 50s-22.386 50-50 50h-15v-15h15c19.33 0 35-15.67 35-35s-15.67-35-35-35c-2.776 0-5.458.32-8.018.92l-13.961 3.266z"
			/>
			<path d="M123 71H93v60H64l43.5 42 43.5-42h-28V71z" />
		</svg>
	</a>
</div>

<style>
	div {
		padding: min(10rem, 20vmin);
		inset: 0;
		margin: auto;
		background-color: var(--bg-secondary);
		position: absolute;
		width: 80vmin;
		border-radius: var(--br);
		aspect-ratio: 1;
		box-shadow: 0 0 0 100vmax #000a;
	}
	span {
		width: 5rem;
		aspect-ratio: 1;
		display: grid;
		place-content: center;
		position: absolute;
		top: 0;
		right: 0;
		cursor: pointer;
		font-size: 3rem;
		font-weight: bold;
	}
	a {
		position: absolute;
		cursor: pointer;
		fill: var(--fg-primary);
		width: min(5rem, 10vmin);
		bottom: 2vmin;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
