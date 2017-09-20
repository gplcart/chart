/* global Gplcart, jQuery, google */
(function (Gplcart, $) {

    "use strict";

    /**
     * Draw charts on the page
     * @returns {undefined}
     */
    Gplcart.onload.drawCharts = function () {
        var charts = $('[data-chart-id][data-chart-source]');
        if (charts.size() && (typeof google === 'undefined' || typeof google.charts === 'undefined')) {
            $.getScript('https://www.gstatic.com/charts/loader.js', function () {
                if (google !== 'undefined' && google.charts !== 'undefined') {
                    google.charts.load('current', {'packages': ['corechart']});
                    callHandlers(charts);
                }
            });
        }
    };

    /**
     * Load JS handlers
     * @param {type} charts
     * @returns {undefined}
     */
    var callHandlers = function (charts) {
        var id;
        charts.each(function (i, el) {
            id = $(el).data('chart-id');
            if ($.inArray(id, Gplcart.settings.chart.handlers) !== -1) {
                $.getScript(Gplcart.settings.base + 'system/modules/chart/js/handlers/' + id + '.js', function () {});
            }
        });
    };

})(Gplcart, jQuery);