<script>
  import { onMount } from "svelte";
  import hobbyStore from "./hobby-store.js";
  let hobbies = [];
  let hobbyInput = "";
  let isLoading = false;
  export let piral;

  $: piral.setData("microfe-path", "/svlete-posts");

  onMount(() => {
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
        piral.showNotification(`New Hobby ${hobbyInput.value}`);
        hobbyInput.value = "";
      })
      .catch(err => {
        isLoading = false;
        hobbyInput.value = "";
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
  }
</script>

<style>

</style>

<svelte:options accessors={true} />

<div class="container w-screen m-2 p-2 justify-center">
  <h1
    class="text-center text-4xl text-black font-medium leading-snug
    tracking-wider">
    Svelte Micro App
  </h1>
  <p class="text-center text-lg text-gray-700 mt-2 px-6">Add you hobbies !</p>
  <div class="h-1 mx-auto bg-indigo-200 w-2/3 opacity-75 mt-4 rounded" />

  <div class="h-100 w-full flex items-center justify-center font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-grey-darkest font-bold">Hobbies !</h1>
        <div class="flex mt-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4
            text-grey-darker"
            placeholder="Add Hobby"
            type="text"
            id="hobby"
            bind:this={hobbyInput} />
          <button
            class="flex-no-shrink p-2 border-2 rounded text-teal border-teal-500
            hover:text-white hover:bg-teal-500"
            on:click={addHobby}>
            Add
          </button>
        </div>
      </div>
      <div>

        {#if isLoading}
          <div class="flex mb-4 items-center">
            <p class="w-full text-grey-darkest">
              <i class="fas fa-spinner fa-spin" />
            </p>
          </div>
        {/if}
        {#each $hobbyStore as hobby}
          <div class="flex mb-4 items-center">
            <p class="w-full text-grey-darkest">{hobby.name}</p>
            <button
              class="flex-no-shrink p-2 ml-2 border-2 rounded text-red
              border-red hover:text-white hover:bg-red"
              on:click={() => deleteHobby(hobby.id)}>
              Remove
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
