// Copyright 2013-2020, University of Colorado Boulder

/**
 * Main entry point for the 'Concentration' sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import BLLConstants from '../../beers-law-lab/js/common/BLLConstants.js';
import ConcentrationScreen from '../../beers-law-lab/js/concentration/ConcentrationScreen.js';
import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import concentrationStrings from './concentrationStrings.js';

const concentrationTitleString = concentrationStrings.concentration.title;

const simOptions = {
  credits: {
    leadDesign: 'Julia Chamberlain',
    softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)',
    team: 'Kelly Lancaster, Emily B. Moore, Ariel Paul, Kathy Perkins',
    qualityAssurance: 'Steele Dalton, Bryce Griebenow, Elise Morgan, Oliver Orejola, Benjamin Roberts, Bryan Yoelin',
    thanks: 'Conversion of this simulation to HTML5 was funded by the Royal Society of Chemistry.'
  }
};

SimLauncher.launch( () => {
  const sim = new Sim( concentrationTitleString,
    [ new ConcentrationScreen( BLLConstants.CONCENTRATION_SCREEN_TANDEM ) ],
    simOptions );
  sim.start();
} );