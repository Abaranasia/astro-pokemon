import { createSignal, For } from "solid-js";
import type { FavouritePokemon } from "@interfaces/favoritePokemons";
import { FavPokemonCard } from "./FavPokemonCard";

const getLocalStoragePokemons = () => {
    const favorites: FavouritePokemon[]= JSON.parse(
        localStorage.getItem("favorites") ?? "[]"
      );
    return favorites
}

export const FavoritePokemons = () => {
    const [favPokemons, setFavPokemons] = createSignal(getLocalStoragePokemons())
  return (
    <div class="grid grid-cols-3 sn:grid-cols-4 my-3">
        <For each={favPokemons()}>
            {
                pokemon => (
                    <FavPokemonCard favPokemon={pokemon} />
                )
            }
        </For>
    </div>
  )
}
