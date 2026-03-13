#!/bin/bash
set -e

echo "🇪🇸 Building Spanish version..."
REACT_APP_LANG=es \
REACT_APP_META_TITLE="Web Evolution Program — Mejora continua para tu web" \
REACT_APP_META_DESC="Servicio de mejora continua para tu web. Consultoría + implementación mensual para mejorar conversión, SEO y rendimiento." \
REACT_APP_NOSCRIPT="Necesitas activar JavaScript para ver esta página." \
npx react-scripts build

echo "🇪🇸 Pre-rendering Spanish..."
npx react-snap

# Save Spanish pre-rendered build
cp -r build build-es-temp

echo "🇬🇧 Building English version..."
REACT_APP_LANG=en \
REACT_APP_META_TITLE="Web Evolution Program — Continuous improvement for your website" \
REACT_APP_META_DESC="Continuous improvement service for your website. Monthly consulting + implementation to boost conversion, SEO, and performance." \
REACT_APP_NOSCRIPT="You need to enable JavaScript to view this page." \
npx react-scripts build

echo "🇬🇧 Pre-rendering English..."
npx react-snap

# English pre-rendered build is now in build/index.html — copy as index-en.html
cp build/index.html build/index-en.html

# Restore Spanish index.html AND its JS bundle (different hash than English)
cp build-es-temp/index.html build/index.html
cp -n build-es-temp/static/js/* build/static/js/ 2>/dev/null || true

# Cleanup temp
rm -rf build-es-temp

echo "✅ Build complete!"
echo "   → build/index.html    (Spanish — pre-rendered)"
echo "   → build/index-en.html (English — pre-rendered)"
