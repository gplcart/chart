[![Build Status](https://scrutinizer-ci.com/g/gplcart/chart/badges/build.png?b=master)](https://scrutinizer-ci.com/g/gplcart/chart/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/gplcart/chart/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/gplcart/chart/?branch=master)

Chart is a [GPL Cart](https://github.com/gplcart/gplcart) module that allows to display various data using powerful [Google Chart library](https://developers.google.com/chart) within admin section.

Supported modules:

-  [Google Analytics Report](https://github.com/gplcart/ga_report)

**How it works**

When enabled the module searches for divs with `data-chart-id` and `data-chart-source` attributes. The first attribute must contain a handler ID, second - JSON string with data to draw the chart.

    <div data-chart-id="my_chart" data-chart-source='{"key":"value"}'>
	...Your chart here
    </div>

**Creating custom charts**

Basically you'll need two things - add 2 required attributes to your chart container (see above) and write corresponding handler to draw a chart using data from `data-chart-source` attribute.
To write the handler, create javascript file `HANDLER_ID_FROM_ATTRIBUTE`.js, add some code (see existing handlers, [read docs](https://developers.google.com/chart/interactive/docs/quick_start)) and put it into `system/modules/chart/js/handlers`


**Installation**

1. Download and extract to `system/modules` manually or using composer `composer require gplcart/chart`. IMPORTANT: If you downloaded the module manually, be sure that the name of extracted module folder doesn't contain a branch/version suffix, e.g `-master`. Rename if needed.
2. Go to `admin/module/list` end enable the module