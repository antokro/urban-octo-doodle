<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import { page } from '$app/stores'
	const name = $page.url.searchParams.get('name')?.split(',')	
	const pronoun  = name && name?.length >1 ? 'euch' : 'dich'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="mx_auto p-10 md:p-12 font-sans">
	<div class='p-8 rounded bg-accentColor text-slate-200' >
		<h2 class="text-base  my-5">
			Liebe {name?.join(', lieber ')},</h2>
        <p class='  text-sm my-5'>Anlässlich meines Geburtstages lade ich {pronoun} ganz herzlich zu einem kleinen Brunch bei mir ein. Das Motto ist dieses Jahr Türkei 🇹🇷
      </p>
	  <p class=' text-sm my-5'>📅 28.8.2022 um 10 Uhr</p>
	  <p class=' text-sm my-5'>Sag mir bitte kurz Bescheid, ob du kommen kannst! Ich freue mich auf {pronoun}! </p>

	</div>
</section>
