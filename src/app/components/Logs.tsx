import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  Search, 
  Download,
  Filter,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Database,
  RefreshCw,
  Code
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const logs = [
  {
    id: 1,
    timestamp: "2024-02-20 14:32:15.234",
    level: "info",
    service: "ETL Pipeline",
    message: "Cliente 'Distribuidora Nacional S.A.' sincronizado exitosamente",
    details: { odooId: "ODO-15234", sqlId: "SQL-8945", records: 245 }
  },
  {
    id: 2,
    timestamp: "2024-02-20 14:31:48.567",
    level: "success",
    service: "CFDI Processor",
    message: "Factura CFDI-2024-001235 timbrada correctamente",
    details: { uuid: "b2c3d4e5-f6g7-8901-bcde-f12345678901", amount: "$28,150.00" }
  },
  {
    id: 3,
    timestamp: "2024-02-20 14:31:22.890",
    level: "info",
    service: "XML-RPC API",
    message: "Conexión establecida con Odoo ERP",
    details: { latency: "45ms", endpoint: "https://odoo.example.com/xmlrpc/2/common" }
  },
  {
    id: 4,
    timestamp: "2024-02-20 14:30:55.123",
    level: "warning",
    service: "Upsert Logic",
    message: "Duplicado detectado y prevenido para cliente RFC: CDS880415ML3",
    details: { action: "update", existingId: "SQL-8946" }
  },
  {
    id: 5,
    timestamp: "2024-02-20 14:30:22.456",
    level: "success",
    service: "SQL Server",
    message: "Asiento contable AC-2024-0567 insertado en AWS RDS",
    details: { database: "odoo_sync_db", table: "accounting_entries" }
  },
  {
    id: 6,
    timestamp: "2024-02-20 14:29:48.789",
    level: "error",
    service: "ETL Pipeline",
    message: "Error al sincronizar cliente 'Servicios Profesionales MNO'",
    details: { error: "Connection timeout", odooId: "ODO-15238", retryAttempt: 2 }
  },
  {
    id: 7,
    timestamp: "2024-02-20 14:28:33.012",
    level: "info",
    service: "REST API",
    message: "Endpoint /api/sync/clients llamado exitosamente",
    details: { method: "POST", statusCode: 200, responseTime: "1.2s" }
  },
  {
    id: 8,
    timestamp: "2024-02-20 14:27:15.345",
    level: "success",
    service: "CFDI Processor",
    message: "Batch de 50 facturas procesadas y timbradas",
    details: { total: 50, success: 48, pending: 2, errors: 0 }
  },
  {
    id: 9,
    timestamp: "2024-02-20 14:26:42.678",
    level: "warning",
    service: "SQL Server",
    message: "Latencia elevada detectada en AWS RDS",
    details: { latency: "250ms", threshold: "100ms", region: "us-east-1" }
  },
  {
    id: 10,
    timestamp: "2024-02-20 14:25:18.901",
    level: "info",
    service: "ETL Pipeline",
    message: "Sincronización programada iniciada",
    details: { schedule: "every_30s", entities: ["clientes", "facturas", "asientos"] }
  },
  {
    id: 11,
    timestamp: "2024-02-20 14:24:55.234",
    level: "error",
    service: "XML-RPC API",
    message: "Timeout al consultar datos de facturación en Odoo",
    details: { timeout: "30s", endpoint: "/xmlrpc/2/object", method: "execute_kw" }
  },
  {
    id: 12,
    timestamp: "2024-02-20 14:23:30.567",
    level: "success",
    service: "Upsert Logic",
    message: "Validación de consistencia completada: 0 inconsistencias",
    details: { recordsChecked: 1247, duplicatesPrevented: 23 }
  },
];

export function Logs() {
  const getLogIcon = (level: string) => {
    switch (level) {
      case "success":
        return <CheckCircle className="size-4 text-green-600" />;
      case "error":
        return <XCircle className="size-4 text-red-600" />;
      case "warning":
        return <AlertTriangle className="size-4 text-orange-600" />;
      default:
        return <Info className="size-4 text-blue-600" />;
    }
  };

  const getLogBadge = (level: string) => {
    switch (level) {
      case "success":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">SUCCESS</Badge>;
      case "error":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100 text-xs">ERROR</Badge>;
      case "warning":
        return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs">WARNING</Badge>;
      default:
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs">INFO</Badge>;
    }
  };

  const getServiceIcon = (service: string) => {
    if (service.includes("SQL") || service.includes("Database")) {
      return <Database className="size-4 text-gray-600" />;
    }
    if (service.includes("ETL") || service.includes("Upsert")) {
      return <RefreshCw className="size-4 text-gray-600" />;
    }
    return <Code className="size-4 text-gray-600" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Logs del Sistema</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Monitoreo y trazabilidad de operaciones</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <RefreshCw className="size-4" />
            Actualizar
          </Button>
          <Button className="gap-2 w-full sm:w-auto">
            <Download className="size-4" />
            Exportar Logs
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Info className="size-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">8,234</div>
                <p className="text-sm text-gray-600">Info</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="size-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">2,847</div>
                <p className="text-sm text-gray-600">Success</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="size-8 text-orange-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">156</div>
                <p className="text-sm text-gray-600">Warnings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <XCircle className="size-8 text-red-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">23</div>
                <p className="text-sm text-gray-600">Errors</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
              <Input 
                placeholder="Buscar en logs..." 
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Nivel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los niveles</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los servicios</SelectItem>
                <SelectItem value="etl">ETL Pipeline</SelectItem>
                <SelectItem value="cfdi">CFDI Processor</SelectItem>
                <SelectItem value="api">REST API</SelectItem>
                <SelectItem value="xmlrpc">XML-RPC API</SelectItem>
                <SelectItem value="sql">SQL Server</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Logs List */}
      <Card>
        <CardHeader>
          <CardTitle>Registros de Actividad</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-3">
              {logs.map((log) => (
                <div 
                  key={log.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    {getLogIcon(log.level)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-gray-500">{log.timestamp}</span>
                        {getLogBadge(log.level)}
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 rounded text-xs">
                          {getServiceIcon(log.service)}
                          <span className="font-medium text-gray-700">{log.service}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-900 mb-2">{log.message}</p>
                      <details className="text-xs">
                        <summary className="cursor-pointer text-gray-600 hover:text-gray-900 font-medium">
                          Ver detalles técnicos
                        </summary>
                        <div className="mt-2 p-3 bg-gray-900 rounded font-mono text-gray-100 overflow-x-auto">
                          <pre>{JSON.stringify(log.details, null, 2)}</pre>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
