<script>
    import { user } from '$lib/stores';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import { auth } from '$lib/firebase';
    import { signOut } from 'firebase/auth';

    async function logout() {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    }

    $: if(browser && $user === null) {
        goto('/auth');
    }
</script>

<h1>info del estupido usuario</h1>

<button on:click={logout}> cerrar sesión </button>