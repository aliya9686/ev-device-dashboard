export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow w-96">
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-5"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
