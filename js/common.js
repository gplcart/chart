/* global Gplcart, jQuery, google */
(function (Gplcart, $) {

    "use strict";

    /**
     * Load Google Chart library when DOM is ready
     * @returns {undefined}
     */
    Gplcart.onload.loadGoogleChartLibrary = function () {
        if (typeof google === 'undefined' || typeof google.charts === 'undefined') {
            $.getScript('https://www.gstatic.com/charts/loader.js', function () {
                if (google !== 'undefined' && google.charts !== 'undefined') {
                    google.charts.load('current', {'packages': ['corechart']});
                    Gplcart.hook('module.chart.library.load', google);
                }
            });
        }
    };

})(Gplcart, jQuery);