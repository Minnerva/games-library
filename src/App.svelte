<script>
  import { Router, Route, Link } from 'svelte-navigator'

  import Index from './routes/index.svelte'
  import About from './routes/about.svelte'
</script>


<Router>
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </nav>
  </header>

  <main>
    <Route path="/">
      <Index/>
    </Route>

    <Route path="about">
      <About/>
    </Route>
  </main>
  
  <footer>
  
  </footer>
</Router>



