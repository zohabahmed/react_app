export default function Heading({ text, color }) {
  return (
    <h1
      className={`text-4xl font-bold text-center py-6 ${color}`}
    >
      {text}
    </h1>
  );
}
