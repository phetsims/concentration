// Copyright 2013-2017, University of Colorado Boulder

/**
 * Main entry point for the 'Concentration' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var BLLConstants = require( 'BEERS_LAW_LAB/common/BLLConstants' );
  var ConcentrationScreen = require( 'BEERS_LAW_LAB/concentration/ConcentrationScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var concentrationTitleString = require( 'string!CONCENTRATION/concentration.title' );

  var simOptions = {
    credits: {
      leadDesign: 'Julia Chamberlain',
      softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)',
      team: 'Kelly Lancaster, Emily B. Moore, Ariel Paul, Kathy Perkins',
      qualityAssurance: 'Steele Dalton, Bryce Griebenow, Elise Morgan, Oliver Orejola, Benjamin Roberts, Bryan Yoelin',
      thanks: 'Conversion of this simulation to HTML5 was funded by the Royal Society of Chemistry.'
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( concentrationTitleString,
      [ new ConcentrationScreen( BLLConstants.CONCENTRATION_SCREEN_TANDEM ) ],
      simOptions );
    sim.start();
  } );
} );
