import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { 
  Search, 
  Download,
  Filter,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const clients = [
  { 
    id: "C-001", 
    name: "Distribuidora Nacional S.A. de C.V.", 
    rfc: "DNA950623K17", 
    odooId: "ODO-15234",
    sqlId: "SQL-8945",
    lastSync: "2024-02-20 14:32:15",
    status: "synced",
    records: 245
  },
  { 
    id: "C-002", 
    name: "Comercializadora del Sur", 
    rfc: "CDS880415ML3", 
    odooId: "ODO-15235",
    sqlId: "SQL-8946",
    lastSync: "2024-02-20 14:31:48",
    status: "synced",
    records: 189
  },
  { 
    id: "C-003", 
    name: "Importadora XYZ S.A.", 
    rfc: "IXY920308H42", 
    odooId: "ODO-15236",
    sqlId: "SQL-8947",
    lastSync: "2024-02-20 14:30:22",
    status: "synced",
    records: 312
  },
  { 
    id: "C-004", 
    name: "Grupo Empresarial ABC", 
    rfc: "GEA971125N89", 
    odooId: "ODO-15237",
    sqlId: "SQL-8948",
    lastSync: "2024-02-20 14:15:03",
    status: "pending",
    records: 156
  },
  { 
    id: "C-005", 
    name: "Servicios Profesionales MNO", 
    rfc: "SPM850720P56", 
    odooId: "ODO-15238",
    sqlId: null,
    lastSync: "2024-02-20 13:45:12",
    status: "error",
    records: 0
  },
  { 
    id: "C-006", 
    name: "Tecnología e Innovación S.C.", 
    rfc: "TIS930612K28", 
    odooId: "ODO-15239",
    sqlId: "SQL-8950",
    lastSync: "2024-02-20 14:29:55",
    status: "synced",
    records: 278
  },
  { 
    id: "C-007", 
    name: "Consultoría Estratégica del Norte", 
    rfc: "CEN881203L71", 
    odooId: "ODO-15240",
    sqlId: "SQL-8951",
    lastSync: "2024-02-20 14:28:33",
    status: "synced",
    records: 198
  },
  { 
    id: "C-008", 
    name: "Soluciones Logísticas Integrales", 
    rfc: "SLI960517M94", 
    odooId: "ODO-15241",
    sqlId: "SQL-8952",
    lastSync: "2024-02-20 14:10:45",
    status: "pending",
    records: 134
  },
];

export function Clients() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Clientes Sincronizados</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Gestión de clientes entre Odoo y SQL Server</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <Filter className="size-4" />
            Filtros
          </Button>
          <Button className="gap-2 w-full sm:w-auto">
            <Download className="size-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <p className="text-sm text-gray-600">Total Clientes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">1,189</div>
            <p className="text-sm text-gray-600">Sincronizados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">35</div>
            <p className="text-sm text-gray-600">Pendientes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-red-600">23</div>
            <p className="text-sm text-gray-600">Con Errores</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Búsqueda de Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
            <Input 
              placeholder="Buscar por nombre, RFC, ID de Odoo o SQL Server..." 
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden lg:block rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Nombre / RFC</TableHead>
                  <TableHead>Odoo ID</TableHead>
                  <TableHead>SQL ID</TableHead>
                  <TableHead>Última Sincronización</TableHead>
                  <TableHead>Registros</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900">{client.name}</div>
                        <div className="text-sm text-gray-500">{client.rfc}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{client.odooId}</TableCell>
                    <TableCell className="font-mono text-sm">
                      {client.sqlId || <span className="text-gray-400">—</span>}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">{client.lastSync}</TableCell>
                    <TableCell className="text-sm">{client.records}</TableCell>
                    <TableCell>
                      {client.status === "synced" && (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 gap-1">
                          <CheckCircle className="size-3" />
                          Sincronizado
                        </Badge>
                      )}
                      {client.status === "pending" && (
                        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 gap-1">
                          <Clock className="size-3" />
                          Pendiente
                        </Badge>
                      )}
                      {client.status === "error" && (
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-100 gap-1">
                          <XCircle className="size-3" />
                          Error
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {clients.map((client) => (
              <div key={client.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">{client.name}</div>
                    <div className="text-sm text-gray-500">{client.rfc}</div>
                    <div className="text-xs text-gray-400 mt-1">ID: {client.id}</div>
                  </div>
                  {client.status === "synced" && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 gap-1 flex-shrink-0">
                      <CheckCircle className="size-3" />
                      Sincronizado
                    </Badge>
                  )}
                  {client.status === "pending" && (
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 gap-1 flex-shrink-0">
                      <Clock className="size-3" />
                      Pendiente
                    </Badge>
                  )}
                  {client.status === "error" && (
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-100 gap-1 flex-shrink-0">
                      <XCircle className="size-3" />
                      Error
                    </Badge>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-gray-500">Odoo ID</div>
                    <div className="font-mono text-gray-900">{client.odooId}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">SQL ID</div>
                    <div className="font-mono text-gray-900">{client.sqlId || <span className="text-gray-400">—</span>}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Última Sync</div>
                    <div className="text-gray-900">{client.lastSync}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Registros</div>
                    <div className="text-gray-900 font-semibold">{client.records}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
