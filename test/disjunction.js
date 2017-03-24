'use strict';

const {adapters: {nodeunit: λ}} = require('fantasy-check');
const {identity} = require('fantasy-combinators');
const {of, concat, empty} = require('fantasy-land')

const m = require('fantasy-land/laws/monoid');
const s = require('fantasy-land/laws/semigroup');
const sʹ = require('fantasy-land/laws/setoid');

const {Disjunction} = require('../fantasy-monoids');

exports.monoid = {

    'rightIdentity': λ.law(m.rightIdentity)(Disjunction),
    'leftIdentity': λ.law(m.leftIdentity)(Disjunction)
};


exports.semigroup = {

    'associativity': λ.law(s.associativity)(Disjunction)
};


exports.setoid = {

    'reflexivity': λ.law(sʹ.reflexivity)(Disjunction),
    'symmetry': λ.law(sʹ.symmetry)(Disjunction),
    'transitivity': λ.law(sʹ.transitivity)(Disjunction)
};

exports.basicUsage = test => {
    const expected = { x: true };
    const expected2 = { x: false };

    test.deepEqual(
		  Disjunction(false)
          [concat](Disjunction(false))
          [concat](Disjunction(false))
          [concat](Disjunction(false))
          [concat](Disjunction(true))
        , expected
    )
	
    test.deepEqual(
		  Disjunction(false)
          [concat](Disjunction(false))
          [concat](Disjunction(false))
          [concat](Disjunction(false))
        , expected2
    )

    test.done();
};
