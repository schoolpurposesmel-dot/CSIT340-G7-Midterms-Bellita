import { useState } from "react";
import Profile from "./components/Profile";
import Bio from "./components/Bio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Repositories from "./components/Repositories";
import StatCard from "./components/StatCard";


function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      
      <Navbar />
      <Bio />
      <StatCard
        followers={followers}
        rate={rate}
     />

      <Profile
        followers={followers}
        rate={rate}
        onFollow={handleFollow}
        onAddRate={handleAddRate}
        onReset={handleReset}
      />

      
      <Repositories
        portfolioStars={portfolioStars}
        todoStars={todoStars}
        dotfilesStars={dotfilesStars}
        handleStarPortfolio={handleStarPortfolio}
        handleStarTodo={handleStarTodo}
        handleStarDotfiles={handleStarDotfiles}

      />

      
      
    </div>
  );
}

export default App;