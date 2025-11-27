



export default function StatusBadge({ status }) {
  const colors = {
    active: "bg-green-500",
    warning: "bg-yellow-400",
    offline: "bg-gray-500",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-full text-white ${colors[status]}`}
    >
      {status}
    </span>
  );
}
