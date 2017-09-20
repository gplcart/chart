/* global window, Gplcart, jQuery, google */
(function (window, Gplcart, $, google) {

    "use strict";

    /**
     * Draw chart when API is loaded
     */
    google.charts.setOnLoadCallback(function () {
        drawChart();
    });

    /**
     * Make responsive
     */
    $(window).resize(function () {
        drawChart();
    });

    /**
     * Callback to draw chart
     * @returns {undefined}
     * @link https://developers.google.com/chart/interactive/docs/gallery/geochart
     */
    var drawChart = function () {

        var options, chart;

        var container = $('[data-chart-id="ga_visit_country"]');
        var settings = container.data('chart-settings');
        var source = container.data('chart-source');
        var data = [[Gplcart.text('Country'), Gplcart.text('Visits')]];

        for (var i in source) {
            data.push([source[i][0], parseInt(source[i][1])]);
        }

        options = {
            legend: 'none',
            width: container.innerWidth() - 50,
            height: 300
        };

        if (settings && typeof settings === 'object') {
            options = $.extend(options, settings);
        }

        chart = new google.visualization.GeoChart(container[0]);
        chart.draw(google.visualization.arrayToDataTable(data), options);
    };

})(window, Gplcart, jQuery, google);
