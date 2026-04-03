import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Indicators() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8faf9' }}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Service Sustainability</h1>
          <p className="text-muted-foreground mt-1">Somalia - Operations & Continuity</p>
        </div>

        {/* Box 1: Water Services */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Water Service</h3>
            <Badge className="bg-blue-100 text-blue-800">82% Uptime</Badge>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Water Uptime</span>
                <span className="font-medium">82% (Target: 90%)</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Water Quality</span>
                <span className="font-medium">88% (Target: 95%)</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Avg disruption: 4.3 hours/day
            </div>
          </div>
        </Card>

        {/* Box 2: Health Facilities */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Health Facilities</h3>
            <Badge className="bg-green-100 text-green-800">85% Functional</Badge>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Operational Hours</span>
                <span className="font-medium">92% (Target: 95%)</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Supply Availability</span>
                <span className="font-medium">78% (Target: 90%)</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Functional: 45/65 facilities
            </div>
          </div>
        </Card>

        {/* Box 3: Education Services */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Education Services</h3>
            <Badge className="bg-blue-100 text-blue-800">88% Operating</Badge>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>School Operating Days</span>
                <span className="font-medium">88% (Target: 90%)</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Teacher Attendance</span>
                <span className="font-medium">82% (Target: 85%)</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Days completed: 180/205
            </div>
          </div>
        </Card>

        {/* Box 4: Infrastructure */}
        <Card className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Infrastructure</h3>
            <Badge className="bg-orange-100 text-orange-800">Needs Attention</Badge>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Solar Power Uptime</span>
                <span className="font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Road Accessibility</span>
                <span className="font-medium">68%</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Cold Chain</span>
                <span className="font-medium">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
          </div>
        </Card>

        {/* Box 5: Overall Score */}
        <Card className="p-6 bg-white">
          <h3 className="font-semibold mb-4">Overall Sustainability Score</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">81%</div>
              <div className="text-xs text-muted-foreground mt-1">Water Services</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-xs text-muted-foreground mt-1">Health Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">82%</div>
              <div className="text-xs text-muted-foreground mt-1">Education</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">75%</div>
              <div className="text-xs text-muted-foreground mt-1">Infrastructure</div>
            </div>
          </div>
        </Card>

        {/* Data Flow */}
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Funding → Program → <span className="font-semibold text-primary">Service</span> → Outcome → Risk → Resilience
            </p>
            <Badge className="bg-primary text-white">Layer 3</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
