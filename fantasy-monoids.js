'use strict';

const Additive       = require('./src/additive');
const Conjunction    = require('./src/conjunction');
const Disjunction    = require('./src/disjunction');
const Dual           = require('./src/dual');
const Endo           = require('./src/endo');
const Multiplicative = require('./src/multiplicative');
const Unit           = require('./src/unit');
const Ord            = require('./src/ord');
const Min            = require('./src/min');
const Max            = require('./src/max');
const concat         = require('./src/concat');
const mconcat        = require('./src/mconcat');

module.exports = { Additive
                 , Conjunction
                 , Disjunction
                 , Dual
                 , Endo
                 , Multiplicative
                 , Unit
                 , Min
                 , Max
                 , Ord
                 , concat
                 , mconcat
                 };
