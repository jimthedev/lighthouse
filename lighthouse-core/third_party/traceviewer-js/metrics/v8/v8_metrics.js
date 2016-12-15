"use strict";require("../metric_registry.js");require("../system_health/memory_metric.js");require("./execution_metric.js");require("./gc_metric.js");'use strict';global.tr.exportTo('tr.metrics.v8',function(){function v8AndMemoryMetrics(values,model){tr.metrics.v8.executionMetric(values,model);tr.metrics.v8.gcMetric(values,model);tr.metrics.sh.memoryMetric(values,model,{rangeOfInterest:tr.metrics.v8.utils.rangeForMemoryDumps(model)});}tr.metrics.MetricRegistry.register(v8AndMemoryMetrics);return{v8AndMemoryMetrics:v8AndMemoryMetrics};});