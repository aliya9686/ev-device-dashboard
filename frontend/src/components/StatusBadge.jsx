// export default function StatusBadge({ status }) {
//   const color =
//     status === "active"
//       ? "bg-green-600"
//       : status === "warning"
//       ? "bg-yellow-500"
//       : "bg-gray-500";

//   return (
//     <span className={`text-white px-2 py-1 rounded text-sm ${color}`}>
//       {status}
//     </span>
//   );
// }



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
