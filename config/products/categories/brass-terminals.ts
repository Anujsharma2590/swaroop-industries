import { Product } from '../types';
import { ringSeriesProducts } from './brass-terminal-subcategory/ring-series';
import { forkSeriesProducts } from './brass-terminal-subcategory/fork-series';
import { jointerSeriesProducts } from './brass-terminal-subcategory/jointer-series';
import { bulletSeriesProducts } from './brass-terminal-subcategory/bullet-series';
import { fuseSeriesProducts } from './brass-terminal-subcategory/fuse-series';
import { series090Products } from './brass-terminal-subcategory/090-series';
import { series0110Products } from './brass-terminal-subcategory/0110-series';
import { series0187Products } from './brass-terminal-subcategory/0187-series';
import { series0250Products } from './brass-terminal-subcategory/0250-series';
import { series0312Products } from './brass-terminal-subcategory/0312-series';
import { series0375Products } from './brass-terminal-subcategory/0375-series';
import { specialSeriesProducts } from './brass-terminal-subcategory/special-series';
import { brassLugsProducts } from './brass-terminal-subcategory/brass-lugs';
import { sheetTerminalsProducts } from './brass-terminal-subcategory/sheet-terminals';
import { batteryTerminalsProducts } from './brass-terminal-subcategory/battery-terminals';

// ============================================
// BRASS TERMINALS
// ============================================
export const brassTerminalProducts: Product[] = [
  ...ringSeriesProducts,
  ...forkSeriesProducts,
  ...jointerSeriesProducts,
  ...bulletSeriesProducts,
  ...fuseSeriesProducts,
  ...series090Products,
  ...series0110Products,
  ...series0187Products,
  ...series0250Products,
  ...series0312Products,
  ...series0375Products,
  ...specialSeriesProducts,
  ...brassLugsProducts,
  ...sheetTerminalsProducts,
  ...batteryTerminalsProducts,
];
