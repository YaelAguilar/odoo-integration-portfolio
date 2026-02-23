import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Database,
  CheckCircle,
  XCircle,
  Clock,
  ArrowUpRight
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const syncData = [
  { time: "00:00", clientes: 245, facturas: 189, asientos: 412 },
  { time: "04:00", clientes: 267, facturas: 203, asientos: 445 },
  { time: "08:00", clientes: 289, facturas: 234, asientos: 498 },
  { time: "12:00", clientes: 312, facturas: 267, asientos: 534 },
  { time: "16:00", clientes: 334, facturas: 289, asientos: 567 },
  { time: "20:00", clientes: 356, facturas: 312, asientos: 601 },
];

const etlStatus = [
  { name: "Exitosos", value: 2847, color: "#10b981" },
  { name: "Fallidos", value: 23, color: "#ef4444" },
  { name: "Pendientes", value: 156, color: "#f59e0b" },
];

const recentActivity = [
  { id: 1, type: "Cliente", action: "Sincronizado", name: "Empresa XYZ S.A.", time: "Hace 2 min", status: "success" },
  { id: 2, type: "Factura", action: "Procesada", name: "CFDI-2024-001234", time: "Hace 5 min", status: "success" },
  { id: 3, type: "Asiento", action: "Actualizado", name: "AC-2024-0567", time: "Hace 8 min", status: "success" },
  { id: 4, type: "Cliente", action: "Error", name: "Comercial ABC", time: "Hace 12 min", status: "error" },
  { id: 5, type: "Factura", action: "Sincronizado", name: "CFDI-2024-001235", time: "Hace 15 min", status: "success" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Clientes Sincronizados
            </CardTitle>
            <Users className="size-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <ArrowUpRight className="size-3" />
              +12% desde ayer
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Facturas Procesadas
            </CardTitle>
            <FileText className="size-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3,892</div>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <ArrowUpRight className="size-3" />
              +8% desde ayer
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Asientos Contables
            </CardTitle>
            <TrendingUp className="size-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">8,451</div>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <ArrowUpRight className="size-3" />
              +15% desde ayer
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Sincronizaciones Hoy
            </CardTitle>
            <Database className="size-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3,026</div>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <Clock className="size-3" />
              Última: hace 2 min
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sync Activity Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Actividad de Sincronización (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={syncData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#fff", 
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px"
                  }}
                />
                <Line type="monotone" dataKey="clientes" stroke="#3b82f6" strokeWidth={2} name="Clientes" />
                <Line type="monotone" dataKey="facturas" stroke="#a855f7" strokeWidth={2} name="Facturas" />
                <Line type="monotone" dataKey="asientos" stroke="#10b981" strokeWidth={2} name="Asientos" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* ETL Status */}
        <Card>
          <CardHeader>
            <CardTitle>Estado del Pipeline ETL</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={etlStatus}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {etlStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {etlStatus.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="size-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Actividad Reciente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                {activity.status === "success" ? (
                  <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                ) : (
                  <XCircle className="size-5 text-red-600 flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">{activity.type}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{activity.action}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{activity.name}</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
