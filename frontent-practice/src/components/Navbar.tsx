"use client";
import { FaBell, FaCog, FaUserCircle, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 shadow-md z-50">
      {/* 第一列：搜尋欄與圖示 */}
      <div className="flex items-center justify-between p-4">
        {/* LOGO 與標題 */}
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-semibold text-gray-800">誰敢跟我桌隊</h1>
        </div>

        {/* 搜尋欄 */}
        <div className="flex-1 mx-4 relative">
          <input
            type="text"
            placeholder="Search for..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" size={18} />
        </div>

        {/* 右側圖示 */}
        <div className="flex items-center space-x-4">
          {/* 通知鈴鐺 */}
          <button className="relative text-gray-600 hover:text-gray-400 transition duration-300">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              9
            </span>
            <FaBell size={20} />
          </button>

          {/* 設定齒輪 */}
          <button className="text-gray-600 hover:text-gray-400 transition duration-300">
            <FaCog size={20} />
          </button>

          {/* 使用者頭像 */}
          <button className="text-gray-600 hover:text-gray-400 transition duration-300">
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>

      {/* 第二列：導覽連結 */}
      <div className="bg-white border-t flex justify-center space-x-8">
        {["/", "/signup", "/login", "/competition"].map((link) => (
          <Link
            key={link}
            href={link}
            className={`relative text-gray-600 font-semibold px-4 py-2 rounded transition duration-300
              ${
                pathname === link
                  ? "text-gray-800 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gray-800"
                  : "hover:text-gray-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-600 after:transition-all after:duration-300 hover:after:w-full"
              }`}
          >
            {link === "/"
              ? "Home"
              : link.charAt(1).toUpperCase() + link.slice(2)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
