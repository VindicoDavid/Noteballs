 <template>

<nav class="navbar is-success" role="navigation" aria-label="main navigation">
 

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        <a class="navbar-item is-size-4 is-family-monospace">
            Noteballs
            </a>

      <div class="navbar-item has-dropdown is-hoverable">
       

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item is-selected">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    

    <div class="navbar-end">
      <div class="navbar-item">
       
        <RouterLink 
        to="/"
        class="navbar-item"
        active-class="is-active">

        Notes
        </RouterLink>

        <RouterLink 
        to="/stats"
        class="navbar-item"
        active-class="is-active"
        >
        Stats

        </RouterLink>

        </div>
      </div>
    </div>

</nav>
 </template>