import { JSX } from "react";
import { Users, UserCheck, UserX, Activity } from "react-feather";

type Stats = {
  total?: number;
  assigned?: number;
  unassigned?: number;
  totalSurgeries?: number;
};

interface StatsCardsProps {
  stats: Stats;
}

export default function StatsCards({ stats }: StatsCardsProps): JSX.Element {
  const cards = [
    {
      title: 'Total Patients',
      value: stats?.total || 0,
      icon: Users,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'Assigned',
      value: stats?.assigned || 0,
      icon: UserCheck,
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      title: 'Unassigned',
      value: stats?.unassigned || 0,
      icon: UserX,
      color: 'bg-red-50 text-red-600 border-red-200'
    },
    {
      title: 'Total Surgeries',
      value: stats?.totalSurgeries || 0,
      icon: Activity,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div key={index} className={`p-2 rounded-xl border-2 ${card.color} transition-all`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-70">{card.title}</p>
                <p className="text-2xl font-bold mt-1">{card.value}</p>
              </div>
              <IconComponent className="h-6 w-6 opacity-60" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
