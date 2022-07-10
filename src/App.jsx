function App() {
  return (
    <div className="App">
      <div className="navbar flex justify-between items-center px-20 pt-4">
        <div className="flex items-center gap-2">
          <img src="img/logo.png" alt="Freebies logo" className="h-10" />
          <p className="text-xl text-slate-900 font-medium">
            Lasles<span className="font-bold">VPN</span>
          </p>
        </div>
        <ul className="flex gap-4 text-slate-500">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="font-medium">Sign In</button>
          <button className="font-medium text-primary px-8 py-2 border border-primary rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
