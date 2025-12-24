#!/usr/bin/env python3
"""
Servidor HTTP simple para la Plataforma de Cursos ISC-ITCM
Ejecuta este archivo para ver la plataforma en tu navegador
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Agregar headers para evitar problemas de CORS
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def main():
    # Cambiar al directorio del script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    Handler = MyHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print("🚀 Servidor HTTP iniciado!")
        print("=" * 60)
        print(f"\n📍 Servidor corriendo en: http://localhost:{PORT}")
        print(f"\n🌐 Abre tu navegador en:")
        print(f"   • Landing Page: http://localhost:{PORT}/index.html")
        print(f"   • Catálogo:     http://localhost:{PORT}/plan-de-estudios.html")
        print(f"   • Curso Demo:   http://localhost:{PORT}/semestre1/SCD1008.html")
        print(f"\n⚠️  Presiona Ctrl+C para detener el servidor")
        print("=" * 60)
        
        # Abrir automáticamente en el navegador
        webbrowser.open(f'http://localhost:{PORT}/index.html')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✅ Servidor detenido correctamente")
            print("=" * 60)

if __name__ == "__main__":
    main()
