import { writable } from "svelte/store";

const hobbies = writable([]);

const customStore = {
  subscribe: hobbies.subscribe,
  setHobbies: items => {
    console.log(items);
    hobbies.set(items);
  },
  addHobby: (newHobbyData) => {
   Object.assign(newHobby, newHobbyData)
    hobbies.update(items => {
      Object.assign(newList, items);
      return Object.assign([],newList,newHobby);
    });
  },
  removeHobby: (id) => {
    hobbies.update(items => {
        return items.filter(i => i.id !== id)
    })
}
};

export default customStore;
