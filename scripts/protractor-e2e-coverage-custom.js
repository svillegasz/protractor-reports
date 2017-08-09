const coverage = require('protractor-e2e-coverage');
const path = require('path'); 

coverage.outdir = path.resolve(process.cwd(), 'reports/coverage');

var coveragePlugin = new coverage.CoveragePlugin();