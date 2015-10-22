/**
 * Sinon core utilities. For internal use only.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2013 Christian Johansen
 */
var sinon = (function () { // eslint-disable-line no-unused-vars
    "use strict";

    var sinonModule;
    var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
    var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;

    function loadDependencies(require, exports, module) {
        sinonModule = module.exports = require("./node_modules/sinon/lib/sinon/util/core");
        require("./node_modules/sinon/lib/sinon/extend");
        require("./node_modules/sinon/lib/sinon/walk");
        require("./node_modules/sinon/lib/sinon/typeOf");
        require("./node_modules/sinon/lib/sinon/times_in_words");
        require("./node_modules/sinon/lib/sinon/spy");
        require("./node_modules/sinon/lib/sinon/call");
        require("./node_modules/sinon/lib/sinon/behavior");
        require("./node_modules/sinon/lib/sinon/stub");
        require("./node_modules/sinon/lib/sinon/mock");
        require("./node_modules/sinon/lib/sinon/collection");
        require("./node_modules/sinon/lib/sinon/assert");
        require("./node_modules/sinon/lib/sinon/sandbox");
        require("./node_modules/sinon/lib/sinon/test");
        require("./node_modules/sinon/lib/sinon/test_case");
        require("./node_modules/sinon/lib/sinon/match");
        require("./node_modules/sinon/lib/sinon/format");
        require("./node_modules/sinon/lib/sinon/log_error");
    }

    if (isAMD) {
        define(loadDependencies);
    } else if (isNode) {
        loadDependencies(require, module.exports, module);
        sinonModule = module.exports;
    } else {
        sinonModule = {};
    }

    return sinonModule;
}());
