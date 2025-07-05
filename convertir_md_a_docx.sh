#!/bin/bash
# Script para convertir todos los archivos .md de la carpeta 'new/' a .docx usando Pandoc

# Verifica que Pandoc esté instalado
if ! command -v pandoc &> /dev/null; then
    echo "Error: Pandoc no está instalado. Instálalo con 'brew install pandoc' o desde https://pandoc.org/installing.html"
    exit 1
fi

# Directorio de entrada y salida
INPUT_DIR="new"
OUTPUT_DIR="new/docx"

# Crea el directorio de salida si no existe
mkdir -p "$OUTPUT_DIR"

# Itera sobre todos los archivos .md en el directorio de entrada
for mdfile in "$INPUT_DIR"/*.md; do
    # Obtiene el nombre base del archivo (sin extensión)
    base=$(basename "$mdfile" .md)
    # Convierte a .docx
    pandoc "$mdfile" -o "$OUTPUT_DIR/$base.docx"
    echo "Convertido: $mdfile -> $OUTPUT_DIR/$base.docx"
done

echo "Conversión completada para todos los archivos Markdown en '$INPUT_DIR'." 