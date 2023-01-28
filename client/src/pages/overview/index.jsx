import Table from "../../components/organisms/Table";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import clsx from "clsx";
import DashboardLayout from "../../templates/dashboard-layout";
import CalendarIcon from "../../components/atoms/vectors/CalendarIcon";
import PatientIcon from "../../components/atoms/vectors/PatientIcon";
import DischargedIcon from "../../components/atoms/vectors/DischargedIcon";
import SurgeryIcon from "../../components/atoms/vectors/SurgeryIcon";
import "./OverviewPageStyles.scss";

const OverviewPage = () => {
  const dashBoard = [
    {
      label: "Appointments",
      value: "120",
      icon: <CalendarIcon />,
      color: "#005FCC",
    },
    {
      label: "Patients",
      value: "120",
      icon: <PatientIcon />,
      color: "#DC8900",
    },
    {
      label: "Discharged Patients",
      value: "40",
      icon: <DischargedIcon />,
      color: "#01A966",
    },
    {
      label: "Active Surgery",
      value: "100",
      icon: <SurgeryIcon />,
      color: "#B40800",
    },
  ];

  const data = [
    {
      name: "2020-1",
      uv: 130,
      av: 50,
    },
    {
      name: "2020-2",
      uv: 100,
      av: 80,
    },
    {
      name: "2020-3",
      uv: 220,
      av: 120,
    },
    {
      name: "2020-4",
      uv: 130,
      av: 90,
    },
    {
      name: "2020-5",
      uv: 250,
      av: 200,
    },
    {
      name: "2020-6",
      uv: 150,
      av: 150,
    },
    {
      name: "2020-7",
      uv: 180,
      av: 100,
    },
    {
      name: "2020-8",
      uv: 160,
      av: 90,
    },
    {
      name: "2020-9",
      uv: 200,
      av: 90,
    },
    {
      name: "2020-10",
      uv: 250,
      av: 150,
    },
  ];
  return (
    <DashboardLayout>
      <div className="overview-container scrollbar-hide">
        <div className="flex gap-x-6">
          {dashBoard.map(({ color, label, icon, value }, i) => (
            <div
              key={"dashboard-cards" + label + i}
              className={clsx(
                "h-36 w-full rounded-lg flex justify-between items-center px-5 py-6"
              )}
              style={{ backgroundColor: color }}
            >
              <div className="text-white flex flex-col gap-y-3">
                <span className="font-bold">{label}</span>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold">{value}</span>
                  <span className="text-sm">Last updated today</span>
                </div>
              </div>
              <span className="self-end h-20 w-20 bg-[#ffffff3c] grid place-content-center rounded-full">
                {icon}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-white rounded-lg py-6 px-2 flex flex-col gap-y-9">
          <span className="font-bold text-xl text-[#333333] ml-6">
            Patient Survey
          </span>
          <div className="h-[18rem]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 0,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#336CFB" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#336CFB" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorAv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FAC032" stopOpacity={0} />
                    <stop offset="5%" stopColor="#FAC032" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 " strokeOpacity={0.5} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#336CFB"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="av"
                  stroke="#FAC032"
                  fill="url(#colorAv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="font-bold text-xl text-[#333333]">
            New Appointments
          </span>
          <Table />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OverviewPage;
