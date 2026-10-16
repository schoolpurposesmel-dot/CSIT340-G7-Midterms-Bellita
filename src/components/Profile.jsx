import StatCard from "./StatCard";
import Hire from "./Hire";
import Controls from "./Controls";
import Bio from "./Bio";

function Profile({ followers, rate, onFollow, onAddRate, onReset }) {
  return (
    <div className="bg-[#F5E7C6] px-20 py-10">
        <Bio />

      <Hire rate={rate} />
      
      <div className="mt-8 flex items-end justify-between">
        <div className="flex gap-6">
          <StatCard value={followers} label="Followers" />
          <StatCard value={rate} label="PHP per hour" />
        </div>

        <Controls
          onFollow={onFollow}
          onAddRate={onAddRate}
          onReset={onReset}
        />
      </div>
    </div>
  );
}

export default Profile;