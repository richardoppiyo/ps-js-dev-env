import './index.css';
import numeral from 'numeral';

const courseVAlue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseVAlue} for this awesome Pluralsight course`); // eslint-disable-line no-console
