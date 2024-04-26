"use client";

import {
  AreaChart,
  BadgeDelta,
  BarChart,
  BarList,
  Bold,
  Card,
  DonutChart,
  Flex,
  Metric,
  ProgressBar,
  Text,
  Title,
} from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    Potatoes: 2890,
    Tomatoes: 2338,
  },
  {
    date: "Feb 22",
    Potatoes: 2756,
    Tomatoes: 2103,
  },
  {
    date: "Mar 22",
    Potatoes: 3322,
    Tomatoes: 2194,
  },
  {
    date: "Apr 22",
    Potatoes: 3470,
    Tomatoes: 2108,
  },
  {
    date: "May 22",
    Potatoes: 3475,
    Tomatoes: 1812,
  },
  {
    date: "Jun 22",
    Potatoes: 3129,
    Tomatoes: 1726,
  },
];

const data = [
  {
    name: "Wholesale maize",
    value: 16,
  },
  {
    name: "Shangi potatoes",
    value: 10,
  },
  {
    name: "Fresh farm eggs",
    value: 5,
  },
  {
    name: "Peeled potatoes",
    value: 3,
  },
  {
    name: "Fresh tomatoes",
    value: 2,
  },
];

const chartdata2 = [
  {
    name: "Topic 1",
    "Group A": 890,
    "Group B": 338,
    "Group C": 538,
    "Group D": 396,
    "Group E": 138,
    "Group F": 436,
  },
  {
    name: "Topic 2",
    "Group A": 289,
    "Group B": 233,
    "Group C": 253,
    "Group D": 333,
    "Group E": 133,
    "Group F": 533,
  },
];

const dataFormatter = (number: number) => {
  return "Ksh " + Intl.NumberFormat("us").format(number).toString();
};

export default function DashboardPage() {
  return (
    <div className="flex h-full w-full flex-col gap-8 pb-20">
      <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Card className="mx-auto max-w-xs">
          <Text>You owe</Text>
          <Metric>Ksh 30,000</Metric>
          <Flex className="mt-4">
            <Text>Total unpaid orders</Text>
            <Text>6/20</Text>
          </Flex>
          <ProgressBar value={32} className="mt-2" color="red" />
        </Card>
        <Card className="mx-auto max-w-xs">
          <Text>Completed Orders</Text>
          <Metric>5 out of 20</Metric>
          <Flex className="mt-4">
            <Text>Pending Orders</Text>
            <Text>15</Text>
          </Flex>
          <ProgressBar value={40} className="mt-2" color="green" />
        </Card>
        <Card className="mx-auto max-w-xs">
          <Flex alignItems="start">
            <div>
              <Text>Avg. Monthly spend</Text>
              <Metric>Ksh 50,009</Metric>
            </div>
            <BadgeDelta deltaType="moderateDecrease" className="text-xs">
              13.2%
            </BadgeDelta>
          </Flex>
          <Flex className="mt-4">
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
          </Flex>
          <ProgressBar value={32} className="mt-2" />
        </Card>
      </section>
      <Card>
        <Title>Monthly spend by products</Title>
        <AreaChart
          className="mt-4 h-72"
          data={chartdata}
          index="date"
          categories={["Potatoes", "Tomatoes"]}
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
        />
      </Card>
      <div className="grid-cols 1 grid gap-5 md:grid-cols-2">
        <Card className="max-w-lg">
          <Title>Most popular products</Title>
          <Flex className="mt-4">
            <Text>
              <Bold>Product</Bold>
            </Text>
            <Text>
              <Bold>Frequency</Bold>
            </Text>
          </Flex>
          <BarList data={data} className="mt-2" />
        </Card>
        <Card className="flex max-w-lg flex-col items-center">
          <Title className="self-start">Average spend per product</Title>
          <DonutChart
            variant="pie"
            className="mt-6"
            data={data}
            category="value"
            index="name"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
      </div>
      <Card>
        <Title>Weekly average order frequency</Title>
        <BarChart
          className="mt-6"
          data={chartdata2}
          index="name"
          categories={[
            "Group A",
            "Group B",
            "Group C",
            "Group D",
            "Group E",
            "Group F",
          ]}
          colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
        />
      </Card>
    </div>
  );
}
