import styles from "./style";
import { Navbar, CardDeal, Business, CTA, Footer, Hero } from './components';
import { Billing } from './features/billing'
import { Clients } from './features/clients'
import { Stats } from './features/stats'
import { Testimonials } from './features/testimonials'

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}><Navbar /></div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}><Hero /></div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
