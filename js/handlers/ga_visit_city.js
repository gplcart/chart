/* global window, GplCart, jQuery, google */
(function (window, GplCart, $, google) {

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
     * @link https://developers.google.com/chart/interactive/docs/gallery/scatterchart
     */
    var drawChart = function () {

        var options, chart, data,
                container = $('[data-chart-id="ga_visit_city"]'),
                settings = container.data('chart-settings'),
                source = container.data('chart-source');

        if (!$.isEmptyObject(source)) {

            data = [[GplCart.text('City'), GplCart.text('Visits')]];

            for (var i in source) {
                data.push([source[i][0], parseInt(source[i][1])]);
            }

            options = {
                legend: 'none',
                height: 300,
                chartArea: {width: container.innerWidth() - 50}
            };

            if (settings && typeof settings === 'object') {
                options = $.extend(options, settings);
            }

            chart = new google.visualization.ScatterChart(container[0]);
            chart.draw(google.visualization.arrayToDataTable(data), options);
        }
    };

})(window, GplCart, jQuery, google);
