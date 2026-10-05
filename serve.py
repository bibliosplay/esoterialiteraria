#!/usr/bin/env python3
"""
Servidor maestro para: 'Esoteria Literaria - Portal Central'
Inicia el servidor web local y abre el panel maestro con acceso a las 6 aplicaciones.
Ejecución: python serve.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        sys.stderr.write(f"[Esoteria Literaria Hub] {args[0]} - {args[1]}\n")

def run():
    global PORT
    os.chdir(DIRECTORY)
    for p in range(PORT, PORT + 20):
        try:
            with socketserver.TCPServer(("", p), Handler) as httpd:
                PORT = p
                url = f"http://localhost:{PORT}"
                print("=" * 70)
                print("  ✨ PORTAL MAESTRO: ESOTERIA LITERARIA ✨")
                print("  Colección de 6 Aplicaciones Interactivas y Oraculares")
                print("=" * 70)
                print(f" Servidor iniciado con éxito en: {url}")
                print(" Abriendo el portal en tu navegador predeterminado...")
                print(" Presiona Ctrl+C en esta terminal para detener el servidor.")
                print("=" * 70)
                print(" Módulos disponibles:")
                print(f"  • Portal Central:          {url}/index.html")
                print(f"  • Tarot El Bosco:          {url}/tarot-el-bosco/")
                print(f"  • Tarot Remedios Varo:     {url}/tarot-remedios-varo/")
                print(f"  • El Espejo del Alma:      {url}/espejo-del-alma/")
                print(f"  • El Árbol Sefirótico:     {url}/arbol-sefirotico/")
                print(f"  • El Libro de la Suerte:   {url}/el-libro-de-la-suerte-papus/")
                print(f"  • El Libro de las Mentiras:{url}/el-libro-de-las-mentiras/")
                print("=" * 70)
                webbrowser.open(url)
                try:
                    httpd.serve_forever()
                except KeyboardInterrupt:
                    print("\n[!] Servidor maestro detenido con éxito.")
                return
        except OSError:
            continue

    print(f"Error: No se pudo abrir un puerto disponible en el rango {PORT}-{PORT+20}")

if __name__ == '__main__':
    run()
