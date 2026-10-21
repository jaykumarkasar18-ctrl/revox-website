import './styles/main.css';
import { tb } from './components/ui.js';
import { bm } from './pages/strategy/BusinessModel.js';
import { fin } from './pages/strategy/Financials.js';
import { rk, rkf } from './pages/strategy/Risk.js';
import { asm } from './pages/Contact.js';

// Inline handlers in the rendered HTML (onclick/oninput) call these on window.
Object.assign(window, { tb, bm, fin, rk, rkf, asm });

await import('./router.js');
