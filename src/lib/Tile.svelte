<script lang="ts">
	export let name: string;
</script>

<div on:click>
	<img src={`./animations/${name}.svg`} alt={name} />
</div>

<style lang="scss">
	div {
		width: 14rem;
		padding: 2rem;
		background-color: var(--bg-secondary);
		aspect-ratio: 1;
		border-radius: var(--br);
		cursor: pointer;
		transition: scale 0.2s ease;
		&:hover {
			scale: 1.1;
		}
	}
</style>
