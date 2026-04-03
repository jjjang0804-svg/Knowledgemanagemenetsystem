import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { CountrySummary } from "./CountrySummary";
import { Funding } from "./Funding";
import { Program } from "./Program";
import { Outcome } from "./Outcome";
import { Indicators } from "./Indicators";
import { Risk } from "./Risk";
import { Resilience } from "./Resilience";

export function Layout() {
  const [currentPage, setCurrentPage] = useState("country-summary");

  const renderContent = () => {
    switch (currentPage) {
      case "country-summary":
        return <CountrySummary />;
      case "funding":
        return <Funding />;
      case "program":
        return <Program />;
      case "outcome":
        return <Outcome />;
      case "indicators":
        return <Indicators />;
      case "risk":
        return <Risk />;
      case "resilience":
        return <Resilience />;
      default:
        return <CountrySummary />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="flex-shrink-0">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}