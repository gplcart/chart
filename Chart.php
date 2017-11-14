<?php

/**
 * @package Chart
 * @author Iurii Makukh
 * @copyright Copyright (c) 2017, Iurii Makukh
 * @license https://www.gnu.org/licenses/gpl-3.0.en.html GPL-3.0+
 */

namespace gplcart\modules\chart;

use gplcart\core\Module,
    gplcart\core\Config;

/**
 * Main class for Chart module
 */
class Chart extends Module
{

    /**
     * @param Config $config
     */
    public function __construct(Config $config)
    {
        parent::__construct($config);
    }

    /**
     * Implements hook "construct.controller.backend"
     * @param \gplcart\core\controllers\backend\Controller $controller
     */
    public function hookConstructControllerBackend($controller)
    {
        $this->setModuleAssets($controller);
    }

    /**
     * Sets module specific assets
     * @param \gplcart\core\controllers\backend\Controller $controller
     */
    protected function setModuleAssets($controller)
    {
        if (!$controller->isInternalRoute()) {
            $handlers = $this->getHandlers();
            if (!empty($handlers)) {
                $controller->setJs('system/modules/chart/js/common.js');
                $controller->setJsSettings('chart', array('handlers' => $handlers));
            }
        }
    }

    /**
     * Returns an array of chart handlers
     * @return array
     */
    public function getHandlers()
    {
        $handlers = array();
        foreach (glob(__DIR__ . '/js/handlers/*.js') as $file) {
            $handlers[] = pathinfo($file, PATHINFO_FILENAME);
        }

        return $handlers;
    }

}
