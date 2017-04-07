[![Build Status](https://scrutinizer-ci.com/g/gplcart/chart/badges/build.png?b=master)](https://scrutinizer-ci.com/g/gplcart/chart/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/gplcart/chart/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/gplcart/chart/?branch=master)

Chart is a [GPL Cart](https://github.com/gplcart/gplcart) module that allows to displays various data using powerful [Google Chart library](https://developers.google.com/chart)

Supported modules:

-  [Google Analytics Report](https://github.com/gplcart/ga_report)

**How it works**

When enabled the module searches for divs with `data-chart-id` and `data-chart-source` attributes. The first attribute must contain a handler ID which is a name of the handler file `system/modules/chart/js/handlers/<handler ID>.js`. The handler file is loaded dynamically and responsible for drawing chart using JSON data from `data-chart-source` attribute.

**Custom charts**

    <div class="my-chart" data-chart-id="my_chart" data-chart-source='{"key":"value"}'>
	...
    </div>

Create handler in `system/modules/chart/js/handlers/my_chart.js`, add some code. See for instance existing handlers and [official docs](https://developers.google.com/chart/interactive/docs/quick_start)


**Installation**

1. Download and extract to `system/modules` manually or using composer `composer require gplcart/chart`. IMPORTANT: If you downloaded the module manually, be sure that the name of extracted module folder doesn't contain a branch/version suffix, e.g `-master`. Rename if needed.
2. Go to `admin/module/list` end enable the module