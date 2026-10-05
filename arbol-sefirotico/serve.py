#!/usr/bin/env python3
"""
Servidor local para: 'El Árbol Sefirótico: Tu Mapa Personal'
Ejecución: python serve.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8086
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        sys.stderr.write(f"[Árbol Sefirótico] {args[0]} - {args[1]}\n")

def run():
    global PORT
    os.chdir(DIRECTORY)
    for p in range(PORT, PORT + 20):
        try:
            with socketserver.TCPServer(("", p), Handler) as httpd:
                PORT = p
                url = f"http://localhost:{PORT}"
                print("=" * 65)
                print("  🌳 EL ÁRBOL SEFIRÓTICO: TU MAPA PERSONAL 🌳")
                print("  Cábala Hermética & Análisis Arquetípico")
                print("=" * 65)
                print(f" Servidor iniciado con éxito en: {url}")
                print(" Abriendo en tu navegador por defecto...")
                print(" Presiona Ctrl+C en esta terminal para detener el servidor.")
                print("=" * 65)
                webbrowser.open(url)
                try:
                    httpd.serve_forever()
                except KeyboardInterrupt:
                    print("\n[!] Servidor detenido con éxito.")
                return
        except OSError:
            continue

    print(f"Error: No se pudo abrir un puerto disponible en el rango {PORT}-{PORT+20}")

if __name__ == '__main__':
    run()
