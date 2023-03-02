import { createSignal, onCleanup } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);
	const interval = setInterval(
		() => setCount(c => c + 1),
		1000
	);
	onCleanup(() => clearInterval(interval));

  return (
    <div class="bg-blue-900 text-white p-5">
      <div>Count = {count()}</div>
    </div>
  );
};