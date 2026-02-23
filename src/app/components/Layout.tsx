import React from "react";
import { Link, Outlet, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  RefreshCw, 
  Users, 
  FileText, 
  Activity,
  Database,
  Server
} from "lucide-react";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/sync", icon: RefreshCw, label: "Sincronización" },
    { path: "/clients", icon: Users, label: "Clientes" },
    { path: "/invoices", icon: FileText, label: "Facturas" },
    { path: "/logs", icon: Activity, label: "Logs" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Database className="size-6 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">Panel de Monitoreo y Sincronización</h1>
                <p className="text-sm text-gray-500">Odoo-SQL Server Integration</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="px-6">
          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative ${
                    active
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="size-4" />
                  {item.label}
                  {active && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
}