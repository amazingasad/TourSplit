/**
 * Capacitor plugin bridge loader
 * In native Android: Capacitor injects window.Capacitor and plugins automatically.
 * In browser: provides stubs so the app doesn't crash.
 */

(function () {
    // Wait for Capacitor to be ready
    function setupPlugins() {
        if (window.Capacitor && window.Capacitor.isNativePlatform()) {
            // In native mode, plugins are available via Capacitor.Plugins
            var plugins = window.Capacitor.Plugins;
            window.CapacitorPlugins = {
                Filesystem: plugins.Filesystem,
                Share: plugins.Share,
                Directory: {
                    Documents: 'DOCUMENTS',
                    Data: 'DATA',
                    Cache: 'CACHE',
                    External: 'EXTERNAL',
                    ExternalStorage: 'EXTERNAL_STORAGE'
                }
            };
        } else {
            // Browser fallback - Directory enum still needed
            window.CapacitorPlugins = {
                Directory: {
                    Documents: 'DOCUMENTS',
                    Data: 'DATA',
                    Cache: 'CACHE',
                    External: 'EXTERNAL',
                    ExternalStorage: 'EXTERNAL_STORAGE'
                }
            };
        }
    }

    // Capacitor might load asynchronously
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupPlugins);
    } else {
        setupPlugins();
    }

    // Also try after a short delay in case native bridge loads later
    setTimeout(setupPlugins, 100);
})();
