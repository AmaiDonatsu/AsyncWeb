<script lang="ts">
    import { user } from '$lib/stores';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import {
        PUBLIC_FIREBASE_BACKEND_URL
    } from '$env/static/public';
    import { auth } from '$lib/firebase';
    import KeysCard from '../../components/keysCard.svelte';
    import KeyPanel from '../../components/KeyPanel.svelte';
    import { updateKey } from '$lib/apiBackend';

    $effect(() => {
        if (browser && $user === null) {
            goto('/auth');
        } else {
            getConsoleData();
        }
    });

    interface KeyData {
        id: string;
        [key: string]: any; // Allows other properties
    }
    interface UserKeysResponse {
        keys: KeyData[];
    }

    let selectedKey = $state<string | null>(null);
    let userKeys = $state<UserKeysResponse>();
    
    async function getConsoleData() {
        console.log("fetching user keys...");
        try {
            const token = await auth.currentUser?.getIdToken(true);
            const keys = await fetch(`${PUBLIC_FIREBASE_BACKEND_URL}/keys/list`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'ngrok-skip-browser-warning': 'true'
                }
            });

            userKeys = await keys.json();
        } catch (error) {
            console.error("Error fetching user keys:", error);
        }
    };

    function selectKey(keyId: string) {
        console.log("Selecting key:", keyId);
        if (keyId === null) {
            return;
        };

        if (selectedKey === keyId) {
            selectedKey = null;
            return;
        }

        selectedKey = keyId;
    };
   
</script>

<div>
    <h1>consola</h1>

    <div>
        <h1>mis keys</h1>

        <div>
            {#if userKeys && userKeys.keys && userKeys.keys.length > 0}
                <pre>si hay user keys</pre>
            {#each userKeys.keys as key}
        
                <button on:click={() => selectKey(key.id)} class={key.id === selectedKey ? 'bg-green-800' : 'bg-green-200'}>
                    <KeysCard keyData={key} />
                </button>

            {/each}
            {:else}
                <pre>no hay user keys</pre>
            {/if}
        </div>

        <div>
            {#if selectedKey && userKeys && userKeys.keys && userKeys.keys.length > 0}
                <h2>Editar Key</h2>
                {#each userKeys.keys as key (key.id)}
                    {#if key.id === selectedKey}
                        <KeyPanel keyData={key} on:update={async (e) => {
                            console.log("Updated key data:", e.detail);
                            const token = await auth.currentUser?.getIdToken(true) || '';
                            updateKey(key.id, e.detail.name, e.detail.reserved, token).then(() => {
                                getConsoleData();
                            });
                        }} />
                    {/if}
                {/each}
            {/if}
    </div>
    </div>
    
</div>
