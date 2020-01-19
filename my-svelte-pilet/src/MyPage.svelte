<script>
  import { onMount } from "svelte";
  import hobbyStore from "./hobby-store.js";
  let hobbies = [];
  let hobbyInput = "";
  let isLoading = false;

  isLoading = true;
  fetch("https://svelte-course-3d38e.firebaseio.com/hobbies.json")
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed!");
      }
      return res.json();
      // ...
    })
    .then(data => {
      const loadedHobbies = [];
      for (let [key, value] of Object.entries(data)) {
        loadedHobbies.push({
          name: value,
          id: key
        });
      }
      hobbyStore.setHobbies(loadedHobbies.reverse());
      isLoading = false;
      return hobbies;
    })
    .catch(err => {
      isLoading = false;
      console.log(err);
    });

  function addHobby() {
    //hobbies = [...hobbies, hobbyInput.value];
    isLoading = true;
    fetch("https://svelte-course-3d38e.firebaseio.com/hobbies.json", {
      method: "POST",
      body: JSON.stringify(hobbyInput.value),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("An error occured, please try again");
        }
        return res.json();
      })
      .then(data => {
        isLoading = false;
        hobbyStore.addHobby({ name: hobbyInput.value, id: data.name });
      })
      .catch(err => {
        isLoading = false;
        console.log(err);
      });
  }

  function deleteHobby(id) {
    fetch(`https://svelte-course-3d38e.firebaseio.com/hobbies/${id}.json`, {
      method: "DELETE"
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("An error occured, please try again");
        }
        hobbyStore.removeHobby(id);
      })
      .catch(err => {
        console.log(err);
      });

    dispatch("save");
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput} />
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
  <p>Loading ...</p>
{:else}
  <ul>
    {#each $hobbyStore as hobby}
      <li>
        <span class="inline">
          <div
            class="cursor-pointer hover:text-red"
            on:click={() => deleteHobby(hobby.id)}>
            {hobby.name} x
          </div>
        </span>
      </li>
    {/each}
  </ul>
{/if}
