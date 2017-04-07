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
     * @link https://developers.google.com/chart/interactive/docs/gallery/linechart
     */
    var drawChart = function () {

        var date, options, chart, year, day, month;

        var container = $('[data-chart-id="ga_pageview_date"]');
        var settings = container.data('chart-settings');
        var source = container.data('chart-source');
        var data = [[GplCart.text('Page views'), GplCart.text('Visits')]];

        for (var i in source) {

            day = source[i][0].slice(6, 8);
            year = source[i][0].slice(0, 4);
            month = source[i][0].slice(4, 6);

            date = day + '/' + month + '/' + year;
            data.push([date, parseInt(source[i][1])]);
        }

        options = {
            vAxis: {minValue: 100},
            legend: {position: 'none'},
            hAxis: {slantedText: true},
            chartArea: {width: container.innerWidth() - 50}
        };

        if (settings && typeof settings === 'object') {
            options = $.extend(options, settings);
        }

        chart = new google.visualization.LineChart(container[0]);
        chart.draw(google.visualization.arrayToDataTable(data), options);
    };

})(window, GplCart, jQuery, google);
