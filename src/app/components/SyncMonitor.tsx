import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  RefreshCw, 
  PlayCircle, 
  PauseCircle, 
  Database,
  Server,
  CheckCircle2,
  AlertCircle,
  Clock
} from "lucide-react";
import { useState } from "react";

const syncStatus = {
  odoo: { status: "connected", latency: "45ms", lastSync: "Hace 30 seg" },
  sqlServer: { status: "connected", latency: "28ms", lastSync: "Hace 30 seg" },
};

const currentSyncs = [
  { id: 1, entity: "Clientes", progress: 87, total: 1247, synced: 1085, status: "syncing" },
  { id: 2, entity: "Facturas CFDI", progress: 65, total: 3892, synced: 2530, status: "syncing" },
  { id: 3, entity: "Asientos Contables", progress: 42, total: 8451, synced: 3549, status: "syncing" },
  { id: 4, entity: "Productos", progress: 100, total: 567, synced: 567, status: "completed" },
];

export function SyncMonitor() {
  const [isRunning, setIsRunning] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Monitor de Sincronización</h1>
          <p className="text-gray-600 mt-1">Sincronización en tiempo real Odoo ↔ SQL Server</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant={isRunning ? "outline" : "default"}
            onClick={() => setIsRunning(!isRunning)}
            className="gap-2"
          >
            {isRunning ? (
              <>
                <PauseCircle className="size-4" />
                Pausar Sincronización
              </>
            ) : (
              <>
                <PlayCircle className="size-4" />
                Iniciar Sincronización
              </>
            )}
          </Button>
          <Button className="gap-2">
            <RefreshCw className="size-4" />
            Forzar Sync Manual
          </Button>
        </div>
      </div>

      {/* Connection Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Conexión Odoo ERP</CardTitle>
            <Database className="size-5 text-purple-600" />
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Estado</span>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <div className="size-1.5 bg-green-600 rounded-full mr-1.5"></div>
                Conectado
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">API XML-RPC</span>
              <span className="text-sm font-medium text-gray-900">Activa</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Latencia</span>
              <span className="text-sm font-medium text-gray-900">{syncStatus.odoo.latency}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Última sincronización</span>
              <span className="text-sm text-gray-500">{syncStatus.odoo.lastSync}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Conexión SQL Server (AWS RDS)</CardTitle>
            <Server className="size-5 text-blue-600" />
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Estado</span>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <div className="size-1.5 bg-green-600 rounded-full mr-1.5"></div>
                Conectado
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Región AWS</span>
              <span className="text-sm font-medium text-gray-900">us-east-1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Latencia</span>
              <span className="text-sm font-medium text-gray-900">{syncStatus.sqlServer.latency}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Última sincronización</span>
              <span className="text-sm text-gray-500">{syncStatus.sqlServer.lastSync}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Syncs */}
      <Card>
        <CardHeader>
          <CardTitle>Procesos de Sincronización Activos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentSyncs.map((sync) => (
            <div key={sync.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {sync.status === "completed" ? (
                    <CheckCircle2 className="size-5 text-green-600" />
                  ) : (
                    <RefreshCw className="size-5 text-blue-600 animate-spin" />
                  )}
                  <div>
                    <h4 className="font-medium text-gray-900">{sync.entity}</h4>
                    <p className="text-sm text-gray-500">
                      {sync.synced.toLocaleString()} / {sync.total.toLocaleString()} registros
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-900">{sync.progress}%</div>
                  {sync.status === "completed" ? (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                      Completado
                    </Badge>
                  ) : (
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs">
                      En proceso
                    </Badge>
                  )}
                </div>
              </div>
              <Progress value={sync.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* ETL Pipeline Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Pipeline ETL
            </CardTitle>
            <CheckCircle2 className="size-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">Activo</div>
            <p className="text-xs text-gray-500 mt-1">Lógica de Upsert habilitada</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Validación de Duplicados
            </CardTitle>
            <AlertCircle className="size-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">23</div>
            <p className="text-xs text-gray-500 mt-1">Duplicados prevenidos hoy</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Tiempo Promedio
            </CardTitle>
            <Clock className="size-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1.8s</div>
            <p className="text-xs text-gray-500 mt-1">Por registro sincronizado</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
