<script>
    export let data
    $: ({post} = data)

</script>

<h1>{post.title}</h1>
<p>
    {post.body}
</p>

<style>

</style>