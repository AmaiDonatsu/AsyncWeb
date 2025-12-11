<script>
    import { createEventDispatcher } from 'svelte';
    const dispatchEvent = createEventDispatcher();
    export let keyData;

    let reserved = keyData.reserved;
    let name = keyData.name;
    let device = keyData.device;

    function updateDispatch() {
        dispatchEvent('update', { name, device, reserved });
    };

</script>

<div>
    
    <input type="text" bind:value={name} />
    <input type="text" bind:value={device} />

    <button on:click={updateDispatch}>Actualizar</button>
</div>