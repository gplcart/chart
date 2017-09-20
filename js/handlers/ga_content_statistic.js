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
     * @link https://developers.google.com/chart/interactive/docs/gallery/piechart
     */
    var drawChart = function () {

        var options, chart,
                container = $('[data-chart-id="ga_content_statistic"]'),
                settings = container.data('chart-settings'),
                source = container.data('chart-source');

        if (!$.isEmptyObject(source)) {

            var data = [
                ['', ''],
                [Gplcart.text('Views'), parseInt(source[0][0])],
                [Gplcart.text('Unique visits'), parseInt(source[0][1])]
            ];

            options = {
                height: 200,
                chartArea: {width: container.innerWidth() - 50}
            };

            if (settings && typeof settings === 'object') {
                options = $.extend(options, settings);
            }

            chart = new google.visualization.PieChart(container[0]);
            chart.draw(google.visualization.arrayToDataTable(data), options);
        }
    };

})(window, Gplcart, jQuery, google);
