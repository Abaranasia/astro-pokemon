import { createSignal, For } from "solid-js";
import type { FavouritePokemon } from "@interfaces/favoritePokemons";

const getLocalStoragePokemons = () => {
    const favorites: FavouritePokemon[]= JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
      );
    return favorites
}

export const FavoritePokemons = () => {
    const [favPokemons, setFavPokemons] = createSignal(getLocalStoragePokemons())
  return (
    <div class="grid grid-cols-2 sn:grid-cols-4">
        <For each={favPokemons()}>
            {
                pokemon => <h3>{pokemon.name}</h3>
            }
        </For>
    </div>
  )
}
