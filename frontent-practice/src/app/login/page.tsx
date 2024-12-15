export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        {/* 標題 */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Sign Up Free
        </h2>
        <p className="text-gray-600 text-center mb-6">
          14 day free access to unlimited resources
        </p>

        {/* 表單 */}
        <form>
          {/* First Name 和 Last Name */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Placeholder"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Placeholder"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 勾選框 */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              Vestibulum faucibus odio vitae arcu auctor lectus.
            </label>
          </div>

          {/* 登入按鈕 */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Button Text
          </button>
        </form>

        {/* 分隔線 */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <p className="mx-4 text-gray-500">Or sign up with:</p>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* 社交媒體按鈕 */}
        <div className="grid grid-cols-3 gap-4">
          <button className="flex items-center justify-center border rounded py-2 text-gray-700 hover:bg-gray-100 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>
          <button className="flex items-center justify-center border rounded py-2 text-gray-700 hover:bg-gray-100 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/0/747.png"
              alt="Apple"
              className="w-5 h-5 mr-2"
            />
            Apple
          </button>
          <button className="flex items-center justify-center border rounded py-2 text-gray-700 hover:bg-gray-100 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-5 h-5 mr-2"
            />
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
