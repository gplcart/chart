<?php

/**
 * @package Chart
 * @author Iurii Makukh
 * @copyright Copyright (c) 2017, Iurii Makukh
 * @license https://www.gnu.org/licenses/gpl-3.0.en.html GPL-3.0+
 */

namespace gplcart\modules\chart;

use gplcart\core\Module;

/**
 * Main class for Chart module
 */
class Chart extends Module
{

    /**
     * Constructor
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Module info
     * @return array
     */
    public function info()
    {
        return array(
            'name' => 'Chart',
            'version' => '1.0.0-dev',
            'description' => 'Allows to display various data using powerful Google Chart library',
            'author' => 'Iurii Makukh ',
            'core' => '1.x',
            'license' => 'GPL-3.0+'
        );
    }

    /**
     * Implements hook "construct.controller.backend"
     * @param \gplcart\core\controllers\backend\Controller $controller
     */
    public function hookConstructControllerBackend($controller)
    {
        // Scan JS handles
        $handlers = array();
        foreach (glob(__DIR__ . '/js/handlers/*.js') as $file) {
            $handlers[] = pathinfo($file, PATHINFO_FILENAME);
        }

        if (!empty($handlers)) {
            $controller->setJs('system/modules/chart/js/common.js');
            $controller->setJsSettings('chart', array('handlers' => $handlers));
        }
    }

}
