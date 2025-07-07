"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 305 },
  { month: "March", visitors: 237 },
  { month: "April", visitors: 273 },
  { month: "May", visitors: 209 },
  { month: "June", visitors: 214 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function VisitorChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" /> Visitor Analytics
        </CardTitle>
        <CardDescription>
          A demo chart showing visitor trends over time.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="visitors"
              type="natural"
              fill="var(--color-visitors)"
              fillOpacity={0.4}
              stroke="var(--color-visitors)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
