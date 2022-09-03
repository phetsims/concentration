// Copyright 2013-2022, University of Colorado Boulder

/**
 * Main entry point for the 'Concentration' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import BLLConstants from '../../beers-law-lab/js/common/BLLConstants.js';
import ConcentrationScreen from '../../beers-law-lab/js/concentration/ConcentrationScreen.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import concentrationStrings from './concentrationStrings.js';

simLauncher.launch( () => {
  const screens = [
    new ConcentrationScreen( { tandem: BLLConstants.CONCENTRATION_SCREEN_TANDEM } )
  ];
  const sim = new Sim( concentrationStrings.concentration.titleStringProperty, screens, {
    credits: BLLConstants.CREDITS
  } );
  sim.start();
} );