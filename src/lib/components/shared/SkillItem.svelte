<script lang="ts">
	export let skill: string;
</script>

<span class="SkillItem">{skill}</span>

<style>
	.SkillItem {
		@apply max-h-[30px] rounded-3xl border border-primary px-2 py-1 text-sm text-primary;
	}
</style>
