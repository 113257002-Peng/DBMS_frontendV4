// pages/competition.js
import CompetitionCard from "@/components/CompetitionCard";

const competition = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Card Instances */}
        <CompetitionCard
          title="Title 1"
          description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          link="/details/1"
        />
        <CompetitionCard
          title="Title 2"
          description="Id eros pellentesque facilisi id mollis faucibus commodo enim."
          link="/details/2"
        />
        <CompetitionCard
          title="Title 3"
          description="Nunc, pellentesque velit malesuada non massa arcu."
          link="/details/3"
        />
      </div>
    </div>
  );
};

export default competition;
