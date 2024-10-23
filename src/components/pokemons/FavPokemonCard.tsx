import { createSignal, Show, type Component } from "solid-js";
import type { FavouritePokemon } from "@interfaces/favoritePokemons";

interface Props {
  favPokemon: FavouritePokemon;
}
export const FavPokemonCard: Component<Props> = (props) => {
  const { favPokemon } = props;

  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${favPokemon.id}.png`;

  const handleDelete = () => {
    const favorites: FavouritePokemon[] = JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    );

    const newFavorites = favorites.filter((p) => p.id !== favPokemon.id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsVisible(false)
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${favPokemon.name}`}>
          <img src={imageSrc} alt={favPokemon.name} width="100" height="auto" 
          style={`view-transition-name: ${favPokemon.name}-image`}
          />
          <p class="capitalize">
            #{favPokemon.id} - {favPokemon.name}
          </p>
        </a>
        <button class="text-red-400" onclick={handleDelete}>
          Delete
        </button>
      </div>
    </Show>
  );
};
