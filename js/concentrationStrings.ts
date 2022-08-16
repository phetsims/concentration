// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import concentration from './concentration.js';

type StringsType = {
  'concentration': {
    'title': string;
    'titleProperty': TReadOnlyProperty<string>;
  }
};

const concentrationStrings = getStringModule( 'CONCENTRATION' ) as StringsType;

concentration.register( 'concentrationStrings', concentrationStrings );

export default concentrationStrings;
