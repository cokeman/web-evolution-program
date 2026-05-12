#!/bin/bash
set -e

run_react_snap() {
  if [ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
    PUPPETEER_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npx react-snap
  else
    npx react-snap
  fi
}

echo "🇪🇸 Building Spanish version..."
REACT_APP_LANG=es \
REACT_APP_META_TITLE="Web Evolution Program — Mejora continua para tu web" \
REACT_APP_META_DESC="Servicio de mejora continua para tu web. Consultoría + implementación mensual para mejorar conversión, estructura web y rendimiento." \
REACT_APP_NOSCRIPT="Necesitas activar JavaScript para ver esta página." \
npx react-scripts build

echo "🇪🇸 Pre-rendering Spanish..."
if run_react_snap; then
  echo "✅ Spanish pre-render complete."
else
  echo "⚠️ react-snap failed for Spanish build. Continuing with non-pre-rendered HTML."
fi

# Save Spanish pre-rendered build
cp -r build build-es-temp

echo "🇬🇧 Building English version..."
REACT_APP_LANG=en \
REACT_APP_META_TITLE="Web Evolution Program — Continuous improvement for your website" \
REACT_APP_META_DESC="Continuous improvement service for your website. Monthly consulting + implementation to boost conversion, website structure, and performance." \
REACT_APP_NOSCRIPT="You need to enable JavaScript to view this page." \
npx react-scripts build

echo "🇬🇧 Pre-rendering English..."
if run_react_snap; then
  echo "✅ English pre-render complete."
else
  echo "⚠️ react-snap failed for English build. Continuing with non-pre-rendered HTML."
fi

# English pre-rendered build is now in build/index.html — copy as index-en.html
cp build/index.html build/index-en.html

# Restore Spanish index.html AND its JS bundle (different hash than English)
cp build-es-temp/index.html build/index.html
cp -n build-es-temp/static/js/* build/static/js/ 2>/dev/null || true

# Ensure SPA fallback files exist even when pre-rendering is skipped
cp build/index.html build/200.html
cp build/index.html build/404.html

# Cleanup temp
rm -rf build-es-temp

echo "✅ Build complete!"
echo "   → build/index.html    (Spanish — pre-rendered)"
echo "   → build/index-en.html (English — pre-rendered)"
