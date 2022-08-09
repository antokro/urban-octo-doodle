<script lang="ts">
	import '../app.css';
</script>

<header class='py-10 md:py-12 text-center text-5xl h-[20vh] flex justify-center items-center text-gray-900'><h1>Einladung</h1></header>

<main class='h-[70vh] image'>
	<slot />
</main>

<footer class='bg-secondaryColor py-6 md:py-10 text-center h-[10vh] text-gray-900'>
	<p>made with 🧡</p>
</footer>
