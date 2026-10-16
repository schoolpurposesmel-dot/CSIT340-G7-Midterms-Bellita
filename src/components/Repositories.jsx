import RepoCard from "./RepoCard";

function Repositories({ 
  portfolioStars, 
  todoStars, 
  dotfilesStars, 
  handleStarPortfolio,
  handleStarTodo,
  handleStarDotfiles 
}) {
  return (
    <main className="grid grid-cols-3 gap-8 px-20 pt-8">
      <RepoCard
        title="portfolio"
        description="My personal page built with React."
        language="JavaScript"
        commits={48}
        stars={portfolioStars}
        onStar={handleStarPortfolio}
      />

      <RepoCard
        title="todo-api"
        description="A small REST API for a to-do list."
        language="Java"
        commits={31}
        stars={todoStars}
        onStar={handleStarTodo}
      />

      <RepoCard
        title="dotfiles"
        description="My terminal and editor settings."
        language="Shell"
        commits={12}
        stars={dotfilesStars}
        onStar={handleStarDotfiles}
      />
    </main>
  );
}

export default Repositories;