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
     * @link https://developers.google.com/chart/interactive/docs/gallery/piechart
     */
    var drawChart = function () {

        var options, chart, data,
                container = $('[data-chart-id="ga_mobile_os"]'),
                settings = container.data('chart-settings'),
                source = container.data('chart-source');

        if (!$.isEmptyObject(source)) {

            data = [[GplCart.text('OS'), GplCart.text('Visits')]];

            for (var i in source) {
                data.push([source[i][0], parseInt(source[i][1])]);
            }

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

})(window, GplCart, jQuery, google);
