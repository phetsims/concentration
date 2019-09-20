// Copyright 2013-2019, University of Colorado Boulder

/**
 * Main entry point for the 'Concentration' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const BLLConstants = require( 'BEERS_LAW_LAB/common/BLLConstants' );
  const ConcentrationScreen = require( 'BEERS_LAW_LAB/concentration/ConcentrationScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  const concentrationTitleString = require( 'string!CONCENTRATION/concentration.title' );

  const simOptions = {
    credits: {
      leadDesign: 'Julia Chamberlain',
      softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)',
      team: 'Kelly Lancaster, Emily B. Moore, Ariel Paul, Kathy Perkins',
      qualityAssurance: 'Steele Dalton, Bryce Griebenow, Elise Morgan, Oliver Orejola, Benjamin Roberts, Bryan Yoelin',
      thanks: 'Conversion of this simulation to HTML5 was funded by the Royal Society of Chemistry.'
    }
  };

  SimLauncher.launch( function() {
    const sim = new Sim( concentrationTitleString,
      [ new ConcentrationScreen( BLLConstants.CONCENTRATION_SCREEN_TANDEM ) ],
      simOptions );
    sim.start();
  } );
} );
