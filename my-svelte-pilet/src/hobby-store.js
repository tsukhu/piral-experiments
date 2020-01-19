import { writable } from "svelte/store";

const hobbies = writable([]);

const customStore = {
  subscribe: hobbies.subscribe,
  setHobbies: items => {
    console.log(items);
    hobbies.set(items);
  },
  addHobby: (newHobbyData) => {
    const newHobby = {
      ...newHobbyData
    };
    hobbies.update(items => {
      return [newHobby, ...items];
    });
  },
  removeHobby: (id) => {
    hobbies.update(items => {
        return items.filter(i => i.id !== id)
    })
}
};

export default customStore;
