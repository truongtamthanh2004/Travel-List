export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items in your packing list 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numItemsPacked = items.reduce(
    (acc, item) => (item.packed ? acc + 1 : acc),
    0
  );
  const percent = numItems
    ? parseFloat(((numItemsPacked / numItems) * 100).toFixed(2))
    : 0;
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? `You got everything. Ready to go! ✈️`
          : `💼 You have ${numItems} items on your list, and you already packed ${numItemsPacked} (
        ${percent}%)`}
      </em>
    </footer>
  );
}
