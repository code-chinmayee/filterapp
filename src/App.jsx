import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Fetch products
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(console.error);
  }, []);

  // Restore login state
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") setLoggedIn(true);
  }, []);

  // Filtered products
  const filteredProducts = products.filter((p) => {
    const title = p.title || "";
    const searchMatch = !search || title.toLowerCase().includes(search.toLowerCase());
    const categoryMatch = category === "all" || p.category === category;
    return searchMatch && categoryMatch;
  });

  // Add / remove functions
  const addToCart = (p) => setCart((prev) => (prev.find((x) => x.id === p.id) ? prev : [...prev, p]));
  const removeFromCart = (id) => setCart((prev) => prev.filter((x) => x.id !== id));

  const addToWishlist = (p) => setWishlist((prev) => (prev.find((x) => x.id === p.id) ? prev : [...prev, p]));
  const removeFromWishlist = (id) => setWishlist((prev) => prev.filter((x) => x.id !== id));

  // Login / Logout
  const handleLogin = (event) => {
    event.preventDefault();
    const validCredentials = [
      { email: "admin@example.com", password: "admin123" },
      { email: "user@example.com", password: "user123" },
    ];
    const credentialsMatch = validCredentials.some(
      (account) => account.email === email && account.password === password
    );

    if (!credentialsMatch) {
      setLoginError("Invalid email or password.");
      return;
    }

    setLoginError("");
    setLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
    setCart([]);
    setWishlist([]);
    setPage("home");
  };

  // Navbar
  const Navbar = () => (
    <div className="navbar">
      <div className="logo">Store Clone</div>
      <div className="navlinks">
        <span onClick={() => setPage("home")}>🏠 Home</span>
        <span onClick={() => setPage("wishlist")}>
          Wishlist ❤️ <span className="badge">{wishlist.length}</span>
        </span>
        <span onClick={() => setPage("cart")}>
          Cart 🛒 <span className="badge">{cart.length}</span>
        </span>
        <span className="logout-btn" onClick={handleLogout}>
          Logout 🔒
        </span>
      </div>
    </div>
  );

  // Login Page
  const LoginPage = () => (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <div className="demo-credentials">
          <p>Use admin@example.com / admin123 or user@example.com / user123</p>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {loginError && <p className="login-error" role="alert">{loginError}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );

  // Home Page
  const HomePage = () => (
    <>
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          {[...new Set(products.map((p) => p.category))].map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="products">
        {filteredProducts.map((p) => (
          <div key={p.id} className="card">
            <img src={p.thumbnail || p.images?.[0]} alt={p.title} />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
            <p>⭐ {p.rating}</p>
            <button onClick={() => addToCart(p)}>
              {cart.find((c) => c.id === p.id) ? "In Cart" : "Add to Cart"}
            </button>
            <button onClick={() => addToWishlist(p)}>
              {wishlist.find((w) => w.id === p.id) ? "In Wishlist ❤️" : "Add to Wishlist ❤️"}
            </button>
          </div>
        ))}
      </div>
    </>
  );

  // Cart Page
  const CartPage = () => (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail || item.images?.[0]} alt={item.title} />
            <div className="cart-info">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );

  // Wishlist Page
  const WishlistPage = () => (
    <div className="wishlist-page">
      <h2>Your Wishlist ❤️</h2>
      {wishlist.length === 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.thumbnail || item.images?.[0]} alt={item.title} />
            <div className="wishlist-info">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );

  // Render
  if (!loggedIn) return <LoginPage />;

  return (
    <div className="app-container">
      <Navbar />
      {page === "home" && <HomePage />}
      {page === "cart" && <CartPage />}
      {page === "wishlist" && <WishlistPage />}
    </div>
  );
}

export default App;