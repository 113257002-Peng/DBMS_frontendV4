// components/CompetitionCard.js
import Link from "next/link";

const CompetitionCard = ({ title, description, link }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Image Placeholder */}
      <div className="h-40 bg-gray-300 flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">
          <span className="text-gray-400 font-semibold">X</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link href={link}>
          <span className="text-blue-500 font-medium flex items-center group cursor-pointer">
            More Info{" "}
            <span className="ml-1 transition-transform group-hover:translate-x-1 duration-300">
              →
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CompetitionCard;
