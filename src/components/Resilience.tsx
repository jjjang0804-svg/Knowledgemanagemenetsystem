import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Resilience() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8faf9' }}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Resilience & HDP Nexus</h1>
          <p className="text-muted-foreground mt-1">Somalia - Humanitarian-Development-Peace</p>
        </div>

        {/* Box 1: HDP Integration */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">HDP Nexus Integration</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-4 bg-red-50 rounded">
              <div className="text-sm text-muted-foreground mb-2">Humanitarian</div>
              <div className="text-3xl font-bold mb-2">72%</div>
              <Progress value={72} className="h-2" />
              <div className="text-xs text-muted-foreground mt-2">Emergency response</div>
            </div>
            <div className="p-4 bg-green-50 rounded">
              <div className="text-sm text-muted-foreground mb-2">Development</div>
              <div className="text-3xl font-bold mb-2">68%</div>
              <Progress value={68} className="h-2" />
              <div className="text-xs text-muted-foreground mt-2">Sustainable programs</div>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <div className="text-sm text-muted-foreground mb-2">Peace</div>
              <div className="text-3xl font-bold mb-2">55%</div>
              <Progress value={55} className="h-2" />
              <div className="text-xs text-muted-foreground mt-2">Peacebuilding</div>
            </div>
          </div>
        </Card>

        {/* Box 2: Resilience Indicators */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Resilience Capacity</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Food Security</span>
                <span className="font-medium">62/100 (Target: 75)</span>
              </div>
              <Progress value={62} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Economic Resilience</span>
                <span className="font-medium">48/100 (Target: 70)</span>
              </div>
              <Progress value={48} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Social Cohesion</span>
                <span className="font-medium">52/100 (Target: 65)</span>
              </div>
              <Progress value={52} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Climate Adaptation</span>
                <span className="font-medium">45/100 (Target: 70)</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
          </div>
        </Card>

        {/* Box 3: Program HDP Alignment */}
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">IOM - HDP</h3>
              <Badge className="bg-blue-100 text-blue-800">H+D+P</Badge>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Humanitarian</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Development</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Peace</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-1.5" />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
              180K immediate jobs (H) • 5,200 sustainable (D)
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">WFP - HDP</h3>
              <Badge className="bg-green-100 text-green-800">H+D</Badge>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Humanitarian</span>
                  <span>88%</span>
                </div>
                <Progress value={88} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Development</span>
                  <span>72%</span>
                </div>
                <Progress value={72} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Peace</span>
                  <span>35%</span>
                </div>
                <Progress value={35} className="h-1.5" />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
              270K food aid (H) • 8,500 climate farmers (D)
            </div>
          </Card>
        </div>

        {/* Box 4: Nexus Interventions */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Cross-Program Interventions</h3>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium mb-1">Water + Livelihood</div>
                  <div className="text-sm text-muted-foreground">WASH and economic opportunities</div>
                </div>
                <Badge className="bg-primary text-white">H+D+P</Badge>
              </div>
              <div className="text-xs text-muted-foreground">120K beneficiaries • $8M</div>
            </div>

            <div className="p-4 bg-green-50 rounded">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium mb-1">Community Hubs</div>
                  <div className="text-sm text-muted-foreground">Multi-service centers</div>
                </div>
                <Badge className="bg-primary text-white">H+D+P</Badge>
              </div>
              <div className="text-xs text-muted-foreground">95K beneficiaries • $6M</div>
            </div>
          </div>
        </Card>

        {/* Box 5: Overall Score */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Overall Performance</h3>
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">72%</div>
              <div className="text-xs text-muted-foreground mt-1">Humanitarian</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">68%</div>
              <div className="text-xs text-muted-foreground mt-1">Development</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">55%</div>
              <div className="text-xs text-muted-foreground mt-1">Peace</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">53</div>
              <div className="text-xs text-muted-foreground mt-1">Resilience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">65%</div>
              <div className="text-xs text-muted-foreground mt-1">Integration</div>
            </div>
          </div>
        </Card>

        {/* Data Flow */}
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Funding → Program → Service → Outcome → Risk → <span className="font-semibold text-primary">Resilience</span>
            </p>
            <Badge className="bg-primary text-white">Layer 6</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
