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
  FileCheck,
  AlertTriangle,
  FileX
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const invoices = [
  { 
    id: "CFDI-2024-001234", 
    client: "Distribuidora Nacional S.A.", 
    amount: "$45,320.50",
    date: "2024-02-20",
    odooId: "INV-2024-1245",
    sqlId: "FAC-8934",
    status: "timbrado",
    uuid: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
  },
  { 
    id: "CFDI-2024-001235", 
    client: "Comercializadora del Sur", 
    amount: "$28,150.00",
    date: "2024-02-20",
    odooId: "INV-2024-1246",
    sqlId: "FAC-8935",
    status: "timbrado",
    uuid: "b2c3d4e5-f6g7-8901-bcde-f12345678901"
  },
  { 
    id: "CFDI-2024-001236", 
    client: "Importadora XYZ S.A.", 
    amount: "$92,780.75",
    date: "2024-02-20",
    odooId: "INV-2024-1247",
    sqlId: "FAC-8936",
    status: "timbrado",
    uuid: "c3d4e5f6-g7h8-9012-cdef-123456789012"
  },
  { 
    id: "CFDI-2024-001237", 
    client: "Grupo Empresarial ABC", 
    amount: "$15,640.25",
    date: "2024-02-20",
    odooId: "INV-2024-1248",
    sqlId: "FAC-8937",
    status: "pendiente",
    uuid: null
  },
  { 
    id: "CFDI-2024-001238", 
    client: "Servicios Profesionales MNO", 
    amount: "$67,890.00",
    date: "2024-02-19",
    odooId: "INV-2024-1249",
    sqlId: null,
    status: "error",
    uuid: null
  },
  { 
    id: "CFDI-2024-001239", 
    client: "Tecnología e Innovación S.C.", 
    amount: "$34,560.80",
    date: "2024-02-19",
    odooId: "INV-2024-1250",
    sqlId: "FAC-8939",
    status: "timbrado",
    uuid: "d4e5f6g7-h8i9-0123-defg-234567890123"
  },
  { 
    id: "CFDI-2024-001240", 
    client: "Consultoría Estratégica del Norte", 
    amount: "$51,230.40",
    date: "2024-02-19",
    odooId: "INV-2024-1251",
    sqlId: "FAC-8940",
    status: "timbrado",
    uuid: "e5f6g7h8-i9j0-1234-efgh-345678901234"
  },
  { 
    id: "CFDI-2024-001241", 
    client: "Soluciones Logísticas Integrales", 
    amount: "$19,875.60",
    date: "2024-02-19",
    odooId: "INV-2024-1252",
    sqlId: "FAC-8941",
    status: "cancelado",
    uuid: "f6g7h8i9-j0k1-2345-fghi-456789012345"
  },
];

export function Invoices() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Facturas CFDI</h1>
          <p className="text-gray-600 mt-1">Gestión de facturación electrónica mexicana</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="size-4" />
            Filtros
          </Button>
          <Button className="gap-2">
            <Download className="size-4" />
            Exportar XML
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">3,892</div>
            <p className="text-sm text-gray-600">Total Facturas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">3,456</div>
            <p className="text-sm text-gray-600">Timbradas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">312</div>
            <p className="text-sm text-gray-600">Pendientes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-red-600">124</div>
            <p className="text-sm text-gray-600">Con Errores</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Búsqueda de Facturas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
            <Input 
              placeholder="Buscar por folio CFDI, UUID, cliente o monto..." 
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Facturas Electrónicas (CFDI 4.0)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Folio CFDI</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Monto</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Odoo ID</TableHead>
                  <TableHead>SQL ID</TableHead>
                  <TableHead>UUID</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium font-mono text-sm">{invoice.id}</TableCell>
                    <TableCell className="font-medium text-gray-900">{invoice.client}</TableCell>
                    <TableCell className="font-semibold text-gray-900">{invoice.amount}</TableCell>
                    <TableCell className="text-sm text-gray-600">{invoice.date}</TableCell>
                    <TableCell className="font-mono text-sm">{invoice.odooId}</TableCell>
                    <TableCell className="font-mono text-sm">
                      {invoice.sqlId || <span className="text-gray-400">—</span>}
                    </TableCell>
                    <TableCell className="font-mono text-xs text-gray-500 max-w-[120px] truncate">
                      {invoice.uuid || <span className="text-gray-400">—</span>}
                    </TableCell>
                    <TableCell>
                      {invoice.status === "timbrado" && (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 gap-1">
                          <CheckCircle className="size-3" />
                          Timbrado
                        </Badge>
                      )}
                      {invoice.status === "pendiente" && (
                        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 gap-1">
                          <FileCheck className="size-3" />
                          Pendiente
                        </Badge>
                      )}
                      {invoice.status === "error" && (
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-100 gap-1">
                          <AlertTriangle className="size-3" />
                          Error
                        </Badge>
                      )}
                      {invoice.status === "cancelado" && (
                        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 gap-1">
                          <FileX className="size-3" />
                          Cancelado
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}