<?php

/**
 * @package Chart
 * @author Iurii Makukh
 * @copyright Copyright (c) 2017, Iurii Makukh
 * @license https://www.gnu.org/licenses/gpl-3.0.en.html GPL-3.0+
 */

namespace gplcart\modules\chart;

use gplcart\core\Hook;

/**
 * Main class for Chart module
 */
class Main
{
    /**
     * Hook class instance
     * @var \gplcart\core\Hook $hook
     */
    protected $hook;

    /**
     * @param Hook $hook
     */
    public function __construct(Hook $hook)
    {
        $this->hook = $hook;
    }

    /**
     * Returns an array of chart handlers
     * @return array
     */
    public function getHandlers()
    {
        $handlers = array();
        $this->hook->attach('module.chart.handlers', $handlers);

        gplcart_array_sort($handlers);
        return $handlers;
    }

    /**
     * Implements hook "construct.controller"
     * @param \gplcart\core\Controller $controller
     */
    public function hookConstructController($controller)
    {
        $this->setJs($controller);
    }

    /**
     * Sets chart assets
     * @param \gplcart\core\Controller $controller
     * @return null
     */
    protected function setJs($controller)
    {
        $handlers = $this->getContextHandlers($controller);

        if (empty($handlers)) {
            return null;
        }

        $controller->setJs('system/modules/chart/js/common.js', array('aggregate' => false));

        $settings = array();
        foreach ($handlers as $handler_id => $handler) {

            foreach ((array) $handler['file'] as $file) {
                $controller->setJs($file, array('aggregate' => false, 'position' => 'top'));
            }

            if (!empty($handler['settings'])) {
                $settings[$handler_id] = $handler['settings'];
            }
        }

        if (!empty($settings)) {
            $controller->setJsSettings('chart', $settings);
        }

        return null;
    }

    /**
     * Returns an array of handlers for the current context
     * @param \gplcart\core\Controller $controller
     * @return array
     */
    protected function getContextHandlers($controller)
    {
        if ($controller->isInternalRoute()) {
            return array();
        }

        $handlers = $this->getHandlers();

        foreach ($handlers as $handler_id => $handler) {

            if (empty($handler['file'])) {
                unset($handlers[$handler_id]);
                continue;
            }

            if (!isset($handler['path'])) {
                continue;
            }

            foreach ((array) $handler['path'] as $path) {
                if (!$controller->path($path)) {
                    unset($handlers[$handler_id]);
                    break;
                }
            }
        }

        return $handlers;
    }

}
