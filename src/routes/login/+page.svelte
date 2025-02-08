<script lang="ts">
    import Layout from "../+layout.svelte";
    import Input from "$lib/components/ui/form/Input.svelte";
</script>

<Layout>
    <section class="Login">
        <div class="Login__container">
            <form>
                <div class="Login__inputsArea">
                    <Input />
                <Input />
                </div>
                <div class="Login__buttonArea">
                    <button>Button</button>
                </div>
            </form>
        </div>
    </section>
</Layout>

<style>
    
</style>