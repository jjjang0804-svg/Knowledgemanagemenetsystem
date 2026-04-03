import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Program() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8faf9' }}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Program Implementation</h1>
          <p className="text-muted-foreground mt-1">Somalia - Active Programs</p>
        </div>

        {/* Box 1: IOM Program */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">IOM - Livelihood Enhancement</h3>
              <p className="text-sm text-muted-foreground mt-1">생계 강화 및 경제 활성화 사업</p>
            </div>
            <Badge className="bg-blue-100 text-blue-800">65%</Badge>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-muted-foreground mb-1">Budget</div>
              <div className="text-lg font-semibold">$25M</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-muted-foreground mb-1">Beneficiaries</div>
              <div className="text-lg font-semibold">180K</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-muted-foreground mb-1">Timeline</div>
              <div className="text-lg font-semibold">2023-2026</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-muted-foreground mb-1">Progress</div>
              <div className="text-lg font-semibold text-green-600">65%</div>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Implementation</span>
                <span className="font-medium">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>M&E</span>
                <span className="font-medium">45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
          </div>
        </Card>

        {/* Box 2: WFP Program */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">WFP - Food Security</h3>
              <p className="text-sm text-muted-foreground mt-1">식량취약성 극복 및 회복력 개선</p>
            </div>
            <Badge className="bg-green-100 text-green-800">72%</Badge>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-muted-foreground mb-1">Budget</div>
              <div className="text-lg font-semibold">$23M</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-muted-foreground mb-1">Beneficiaries</div>
              <div className="text-lg font-semibold">270K</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-muted-foreground mb-1">Timeline</div>
              <div className="text-lg font-semibold">2023-2026</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-muted-foreground mb-1">Progress</div>
              <div className="text-lg font-semibold text-green-600">72%</div>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Implementation</span>
                <span className="font-medium">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>M&E</span>
                <span className="font-medium">58%</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>
          </div>
        </Card>

        {/* Box 3: Key Activities */}
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6 bg-white">
            <h3 className="font-semibold mb-4">IOM - Key Activities</h3>
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 rounded">
                <div className="text-sm font-medium">Job Creation</div>
                <div className="text-xs text-muted-foreground">5,200 jobs created</div>
              </div>
              <div className="p-3 bg-blue-50 rounded">
                <div className="text-sm font-medium">Business Support</div>
                <div className="text-xs text-muted-foreground">1,800 businesses</div>
              </div>
              <div className="p-3 bg-blue-50 rounded">
                <div className="text-sm font-medium">Market Infrastructure</div>
                <div className="text-xs text-muted-foreground">12 markets</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <h3 className="font-semibold mb-4">WFP - Key Activities</h3>
            <div className="space-y-2">
              <div className="p-3 bg-green-50 rounded">
                <div className="text-sm font-medium">Food Assistance</div>
                <div className="text-xs text-muted-foreground">270K people reached</div>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <div className="text-sm font-medium">Climate Farming</div>
                <div className="text-xs text-muted-foreground">8,500 farmers trained</div>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <div className="text-sm font-medium">Early Warning</div>
                <div className="text-xs text-muted-foreground">15 districts covered</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Box 4: Performance Summary */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Overall Performance</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">450K</div>
              <div className="text-sm text-muted-foreground mt-1">Total Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">$48M</div>
              <div className="text-sm text-muted-foreground mt-1">Total Budget</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">68.5%</div>
              <div className="text-sm text-muted-foreground mt-1">Avg Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2</div>
              <div className="text-sm text-muted-foreground mt-1">Active Programs</div>
            </div>
          </div>
        </Card>

        {/* Data Flow */}
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Funding → <span className="font-semibold text-primary">Program</span> → Service → Outcome → Risk → Resilience
            </p>
            <Badge className="bg-primary text-white">Layer 2</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
