<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let name: string[] | undefined = [''];
	let pronoun = '';
	let verb = ''
	onMount(() => {
		console.log('the component has mounted');
		name = $page.url.searchParams.get('name')?.split(',');
		pronoun = name && name?.length > 1 ? 'euch' : 'dich';
		verb = name && name?.length > 1 ? 'Lasst' : 'Lass';
	});
</script>



<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="mx_auto p-10 md:p-12 font-sans md:justify-center md:flex">
	<div class="p-8 rounded bg-accentColor text-slate-200 opacity-90 md:w-2/6">
		<h2 class="text-base  my-5">
			Liebe {name?.join(', lieber ')},
		</h2>
		<p class="  text-sm my-5">
			Anlässlich meines Geburtstages lade ich {pronoun} ganz herzlich zu einem kleinen Brunch bei mir
			ein.<br/> Es wird wieder gemütlich mit leckeren Köstlichkeiten.<br/> {verb} {pronoun} überraschen! 
		</p>
		<p class=" text-sm my-5">📅  28.8.2022 ab 11 Uhr</p>
		<p class=" text-sm my-5 text-center">
			RSVP <br/> Ich freue mich auf {pronoun}!
		</p>
	</div>
</section>
