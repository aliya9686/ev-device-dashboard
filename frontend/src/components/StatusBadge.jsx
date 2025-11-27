export default function StatusBadge({ status }) {
  const color =
    status === "active"
      ? "bg-green-600"
      : status === "warning"
      ? "bg-yellow-500"
      : "bg-gray-500";

  return (
    <span className={`text-white px-2 py-1 rounded text-sm ${color}`}>
      {status}
    </span>
  );
}


