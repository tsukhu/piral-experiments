<script>
  // use from props
  let name = "My Svelte Pilet";
  let link = "/";
  let description = "say hello to Svelte";
</script>

<style>
</style>

  <div class="relative bg-white rounded border hover:border-teal-600">
    <div class="p-4">
      <h3 class="text-lg font-bold hover:text-red-700">
        <a href={link} title={name}>{name}</a>
      </h3>
      <p>{description}</p>
    </div>
  </div>
