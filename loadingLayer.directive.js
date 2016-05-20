(function(angular) {

  'use strict';

  angular.module('loading-layer', [])
    .directive('loadingLayer', loadingLayer)

  loadingLayerController.$inject = [];

  function loadingLayerController() {
    var vm = this;

    this.enable = (typeof this.enable === "undefined" || this.enabled === null) ? false : this.enable;

    this.loadingLayerCss = {
      "position": "fixed",
      "top": 0,
      "bottom": 0,
      "left": 0,
      "right": 0,
      "z-index": 1000,
      "text-align": "center",
      "background-color": "rgba(0,0,0,0.20)"
    };
  };

  loadingLayer.$inject = [];

  function loadingLayer() {
    return {
      restrict: 'AE',
      templateUrl: '<div ng-if="vm.enable" ng-style="vm.loadingLayerCss"><div style="margin-top:50vh"><i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i><span class="sr-only">Loading...</span></div></div>',
      controller: loadingLayerController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        enable: "="
      }
    }
  };

})(angular)
