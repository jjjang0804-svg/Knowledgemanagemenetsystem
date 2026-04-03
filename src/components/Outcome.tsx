import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Outcome() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8faf9' }}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Key Performance Indicators</h1>
          <p className="text-muted-foreground mt-1">Somalia - Outcome Measurement</p>
        </div>

        {/* Box 1: Nutrition */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Nutrition</h3>
            <Badge className="bg-green-100 text-green-800">On Track</Badge>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>MAM Treatment</span>
                <span className="font-medium">78% (Target: 75%)</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>SAM Treatment</span>
                <span className="font-medium">82% (Target: 80%)</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Children screened: 125,000 / 150,000
            </div>
          </div>
        </Card>

        {/* Box 2: WASH */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">WASH</h3>
            <Badge className="bg-blue-100 text-blue-800">On Track</Badge>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Clean Water Access</span>
                <span className="font-medium">65% (Target: 70%)</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Sanitation Facilities</span>
                <span className="font-medium">48% (Target: 60%)</span>
              </div>
              <Progress value={48} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Hygiene Behavior</span>
                <span className="font-medium">72% (Target: 75%)</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
          </div>
        </Card>

        {/* Box 3: Health */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Health Services</h3>
            <Badge className="bg-orange-100 text-orange-800">At Risk</Badge>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Maternal Health</span>
                <span className="font-medium">52% (Target: 65%)</span>
              </div>
              <Progress value={52} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Child Immunization</span>
                <span className="font-medium">68% (Target: 80%)</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Functional facilities: 45 / 65
            </div>
          </div>
        </Card>

        {/* Box 4: Education */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Education</h3>
            <Badge className="bg-blue-100 text-blue-800">On Track</Badge>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Primary Enrollment</span>
                <span className="font-medium">60% (Target: 65%)</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Girls' Enrollment</span>
                <span className="font-medium">55% (Target: 60%)</span>
              </div>
              <Progress value={55} className="h-2" />
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Teachers trained: 420 / 500
            </div>
          </div>
        </Card>

        {/* Box 5: KPI Summary */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">KPI Performance Summary</h3>
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-xs text-muted-foreground mt-1">Total KPIs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-xs text-muted-foreground mt-1">On Track</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-xs text-muted-foreground mt-1">At Risk</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">1</div>
              <div className="text-xs text-muted-foreground mt-1">Delayed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">67%</div>
              <div className="text-xs text-muted-foreground mt-1">Avg Achievement</div>
            </div>
          </div>
        </Card>

        {/* Data Flow */}
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Funding → Program → Service → <span className="font-semibold text-primary">Outcome</span> → Risk → Resilience
            </p>
            <Badge className="bg-primary text-white">Layer 4</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
