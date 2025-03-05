<script>
    import AdminPagesLayout from "$components/layouts/AdminPagesLayout.svelte";
    import { adminMenu } from "$data/admin-menu.data";
</script>

<AdminPagesLayout title="Admin Menu">
    <ul class="AdminMenu">
        {#each adminMenu as item}
            <li>
                <a href={item.url}>
                    <button class="btn btn-secondary w-full min-w-[300px]">
                        {item.title}
                    </button>
                </a>
            </li>
        {/each}
    </ul>
</AdminPagesLayout>

<style>
    .AdminMenu {
        @apply p-6 grid grid-cols-1 items-center justify-items-center gap-y-6 lg:grid-cols-2;
    }
</style>

