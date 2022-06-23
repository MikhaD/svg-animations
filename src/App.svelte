<script lang="ts">
	import Card from "./lib/Card.svelte";
	import Tile from "./lib/Tile.svelte";

	const animations = [
		"grow",
		"shrink",
		"spin",
		"logo",
		"logo infinite",
		"oscillate",
		"slide",
		"slide chase",
	];

	let card: string | null;
</script>

<svelte:body on:keydown={(e) => e.key === "Escape" && (card = null)} />

<main>
	{#each animations as name}
		<Tile {name} on:click={() => (card = name)} />
	{/each}
	{#if card}
		<Card bind:animation={card} />
	{/if}
</main>

<style>
	main {
		padding: 5rem;
		display: flex;
		flex-flow: row wrap;
		align-content: flex-start;
		justify-content: center;
		gap: 2rem;
	}
</style>
