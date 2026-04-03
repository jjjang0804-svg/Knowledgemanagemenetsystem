import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Risk() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8faf9' }}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Risk Management</h1>
          <p className="text-muted-foreground mt-1">Somalia - Risk Assessment</p>
        </div>

        {/* Box 1: Risk Overview */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Risk Summary</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-red-50 rounded">
              <div className="text-sm text-muted-foreground mb-1">High Risk</div>
              <div className="text-3xl font-bold text-red-600">4</div>
            </div>
            <div className="p-4 bg-orange-50 rounded">
              <div className="text-sm text-muted-foreground mb-1">Medium Risk</div>
              <div className="text-3xl font-bold text-orange-600">3</div>
            </div>
            <div className="p-4 bg-green-50 rounded">
              <div className="text-sm text-muted-foreground mb-1">Low Risk</div>
              <div className="text-3xl font-bold text-green-600">2</div>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <div className="text-sm text-muted-foreground mb-1">Mitigation</div>
              <div className="text-3xl font-bold text-blue-600">58%</div>
            </div>
          </div>
        </Card>

        {/* Box 2: High Priority Risks */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">High Priority Risks</h3>
            <Badge className="bg-red-600 text-white">4 Critical</Badge>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 rounded">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium mb-1">Climate Shocks</div>
                  <div className="text-sm text-muted-foreground">Drought affecting delivery</div>
                </div>
                <Badge className="bg-red-600 text-white">8.5</Badge>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Mitigation</span>
                  <span>55%</span>
                </div>
                <Progress value={55} className="h-1.5" />
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium mb-1">Conflict (ACLED)</div>
                  <div className="text-sm text-muted-foreground">Insecurity in rural areas</div>
                </div>
                <Badge className="bg-red-600 text-white">8.0</Badge>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Mitigation</span>
                  <span>48%</span>
                </div>
                <Progress value={48} className="h-1.5" />
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium mb-1">Disease Outbreaks</div>
                  <div className="text-sm text-muted-foreground">Cholera in camps</div>
                </div>
                <Badge className="bg-red-600 text-white">7.5</Badge>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Mitigation</span>
                  <span>62%</span>
                </div>
                <Progress value={62} className="h-1.5" />
              </div>
            </div>

            <div className="p-4 bg-orange-50 rounded">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium mb-1">Economic Instability</div>
                  <div className="text-sm text-muted-foreground">Currency devaluation</div>
                </div>
                <Badge className="bg-orange-600 text-white">6.2</Badge>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Mitigation</span>
                  <span>62%</span>
                </div>
                <Progress value={62} className="h-1.5" />
              </div>
            </div>
          </div>
        </Card>

        {/* Box 3: Mitigation Actions */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Key Mitigation Actions</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-blue-600">1</span>
              </div>
              <div className="flex-1">
                <div className="font-medium mb-1">Climate Adaptation</div>
                <div className="text-sm text-muted-foreground mb-2">Drought-resistant farming</div>
                <div className="flex items-center gap-2">
                  <Progress value={55} className="h-1.5 flex-1" />
                  <span className="text-xs font-medium">55%</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-blue-600">2</span>
              </div>
              <div className="flex-1">
                <div className="font-medium mb-1">Remote Area Protocol</div>
                <div className="text-sm text-muted-foreground mb-2">Conflict-affected management</div>
                <div className="flex items-center gap-2">
                  <Progress value={48} className="h-1.5 flex-1" />
                  <span className="text-xs font-medium">48%</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-blue-600">3</span>
              </div>
              <div className="flex-1">
                <div className="font-medium mb-1">Health Emergency Response</div>
                <div className="text-sm text-muted-foreground mb-2">Disease surveillance</div>
                <div className="flex items-center gap-2">
                  <Progress value={62} className="h-1.5 flex-1" />
                  <span className="text-xs font-medium">62%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Box 4: Risk Trend */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Risk Trend (6 Months)</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-sm w-20 text-muted-foreground">Jan 2024</span>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 bg-gray-200 h-6 rounded overflow-hidden">
                  <div className="bg-red-500 h-full" style={{ width: '38%' }}></div>
                </div>
                <span className="text-xs w-12">38%</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm w-20 text-muted-foreground">Mar 2024</span>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 bg-gray-200 h-6 rounded overflow-hidden">
                  <div className="bg-red-500 h-full" style={{ width: '42%' }}></div>
                </div>
                <span className="text-xs w-12">42%</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm w-20 text-muted-foreground font-medium">Jun 2024</span>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 bg-gray-200 h-6 rounded overflow-hidden">
                  <div className="bg-red-500 h-full" style={{ width: '44%' }}></div>
                </div>
                <span className="text-xs w-12 font-medium">44%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Data Flow */}
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Funding → Program → Service → Outcome → <span className="font-semibold text-primary">Risk</span> → Resilience
            </p>
            <Badge className="bg-primary text-white">Layer 5</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
