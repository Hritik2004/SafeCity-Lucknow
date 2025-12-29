import SafetyNavbar from "@/components/SafetyNavbar";
import SafetyHero from "@/components/SafetyHero";
import FeatureCards from "@/components/FeatureCards";
import InteractiveDashboard from "@/components/InteractiveDashboard";
import SafetyStats from "@/components/SafetyStats";
import SafetyFooter from "@/components/SafetyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SafetyNavbar />
      <SafetyHero />
      <FeatureCards />
      <InteractiveDashboard />
      <SafetyStats />
      <SafetyFooter />
    </div>
  );
};

export default Index;
