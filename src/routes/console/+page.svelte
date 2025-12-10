<script>
    import { user } from '$lib/stores';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';

    $: if(browser && $user === null) {
        goto('/auth');
    }
</script>

<h1>consola</h1>