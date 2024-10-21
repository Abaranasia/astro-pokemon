import { createSignal } from "solid-js";

interface Props {
    initValue: number;
}

export const Counter = (props: Props) => {
  const [counter, setCounter] = createSignal(props.initValue);
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
