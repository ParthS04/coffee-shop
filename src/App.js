import './App.css';
import coffeeShopLogo from './images/coffee-shop-logo.jpg';
import coffeeCupImage from './images/coffee-cup.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={coffeeShopLogo} className="App-logo" alt="Coffee Shop Logo" />
        <h1>Welcome to Cozy Coffee</h1>
        <p>Your favorite spot for the best brews in town!</p>
        <img src={coffeeCupImage} className="Coffee-cup" alt="A warm cup of coffee" />
        <p>Join us for a cup of happiness and discover your next favorite blend!</p>
        <a className="App-link" href="/menu" target="_self" rel="noopener noreferrer">
          View Our Menu
        </a>
      </header>
      
      <main className="Content">
        <section className="About">
          <h2>About Us</h2>
          <p>At Cozy Coffee, we believe that every cup tells a story. Our beans are ethically sourced from the finest farms around the world, ensuring the highest quality and flavor. Whether you need a morning pick-me-up or a cozy spot to relax, we’ve got you covered.</p>
        </section>

        <section className="Featured-Drinks">
          <h2>Featured Drinks</h2>
          <ul>
            <li><strong>Caramel Macchiato:</strong> A delicious blend of espresso, steamed milk, and caramel drizzle.</li>
            <li><strong>Vanilla Latte:</strong> Smooth espresso combined with rich steamed milk and vanilla syrup.</li>
            <li><strong>Hazelnut Cold Brew:</strong> Refreshing cold brew coffee infused with hazelnut flavor.</li>
          </ul>
        </section>

        <section className="Testimonials">
          <h2>What Our Customers Say</h2>
          <blockquote>
            "Cozy Coffee is my go-to spot! The atmosphere is warm and inviting, and the staff is incredibly friendly." - Sarah L.
          </blockquote>
          <blockquote>
            "I love their seasonal drinks! The pumpkin spice latte is a must-try in the fall!" - Mark T.
          </blockquote>
        </section>
      </main>
    </div>
  );
}

export default App;
