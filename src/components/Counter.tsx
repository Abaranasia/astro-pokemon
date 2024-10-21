import { createSignal } from "solid-js";

export const Counter = () => {
  const [counter, setCounter] = createSignal(10);
  return (
    <>
      <h2 class="my-3">Solid.js Counter</h2>
      <h3 class="my-3">Value: {counter()}</h3>
      <button
        onclick={() => setCounter((prev) => ++prev)}
        class="bg-blue-500 py-1 px-8 text-white rounded-md"
      >
        +1
      </button>
      <button
        onclick={() => setCounter((prev) => --prev)}
        class="bg-blue-500 py-1 px-8 text-white rounded-md"
      >
        -1
      </button>
    </>
  );
};
