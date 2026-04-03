import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Funding() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8faf9' }}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">ODA Funding Analysis</h1>
          <p className="text-muted-foreground mt-1">Somalia - Budget Allocation</p>
        </div>

        {/* Box 1: Funding Overview */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Funding Overview</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded">
              <div className="text-sm text-muted-foreground mb-1">Total Budget</div>
              <div className="text-2xl font-semibold">$48M</div>
            </div>
            <div className="p-4 bg-green-50 rounded">
              <div className="text-sm text-muted-foreground mb-1">Disbursed</div>
              <div className="text-2xl font-semibold">$38.4M</div>
              <div className="text-xs text-green-600">80%</div>
            </div>
            <div className="p-4 bg-purple-50 rounded">
              <div className="text-sm text-muted-foreground mb-1">Utilized</div>
              <div className="text-2xl font-semibold">$33.6M</div>
              <div className="text-xs text-purple-600">70%</div>
            </div>
            <div className="p-4 bg-orange-50 rounded">
              <div className="text-sm text-muted-foreground mb-1">Remaining</div>
              <div className="text-2xl font-semibold">$9.6M</div>
              <div className="text-xs text-orange-600">20%</div>
            </div>
          </div>
        </Card>

        {/* Box 2: Funding Sources */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Funding Sources</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>KOICA (Korea)</span>
                <span className="font-medium">$28.8M (60%)</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>World Bank</span>
                <span className="font-medium">$12M (25%)</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>UN Agencies</span>
                <span className="font-medium">$7.2M (15%)</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
          </div>
        </Card>

        {/* Box 3 & 4: Program Budget */}
        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">IOM Program</h3>
              <Badge className="bg-blue-100 text-blue-800">$25M</Badge>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                생계 강화 및 경제 활성화 사업
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Disbursed</span>
                  <span className="font-medium">$20M (80%)</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Execution</span>
                  <span className="font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="pt-3 border-t text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Beneficiaries</span>
                  <span className="font-medium">180,000</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">WFP Program</h3>
              <Badge className="bg-green-100 text-green-800">$23M</Badge>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                식량취약성 극복 및 회복력 개선
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Disbursed</span>
                  <span className="font-medium">$18.4M (80%)</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Execution</span>
                  <span className="font-medium">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div className="pt-3 border-t text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Beneficiaries</span>
                  <span className="font-medium">270,000</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Box 5: Quarterly Progress */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Quarterly Disbursement</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm text-muted-foreground">Q1 2024</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Progress value={85} className="h-2 flex-1" />
                  <span className="text-sm font-medium w-20">$9.6M</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm text-muted-foreground">Q2 2024</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Progress value={78} className="h-2 flex-1" />
                  <span className="text-sm font-medium w-20">$9.4M</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-sm text-muted-foreground">Q3 2024</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Progress value={42} className="h-2 flex-1" />
                  <span className="text-sm font-medium w-20">$5.0M</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Data Flow */}
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">Funding</span> → Program → Service → Outcome → Risk → Resilience
            </p>
            <Badge className="bg-primary text-white">Layer 1</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
