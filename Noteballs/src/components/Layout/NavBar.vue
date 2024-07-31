<template>
    <nav class="navbar has-background-link" aria-label="main navigation" role="navigation">
      <div class="container is-max-desktop pt-2 pb-2">
        <div class="navbar-brand">
          <div class="navbar-item is-size-4 is-family-monospace">
            Noteballs
          </div>
  
          <a
            @click.prevent="showMobileNav = !showMobileNav"
            class="navbar-burger"
            :class="{ 'is-active' : showMobileNav }"
            aria-expanded="false"
            aria-label="menu"
            data-target="navbarBasicExample"
            role="button"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
  
        <div
          id="navbarBasicExample"
          class="navbar-menu"
          :class="{ 'is-active' : showMobileNav }"
        >
          <div class="navbar-end">
            <RouterLink
              to="/"
              class="navbar-item"
              active-class="is-active"
            >
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
  
  <script setup>
  /*
    imports
  */
  
  import { ref } from 'vue'
  
  /*
    mobile nav
  */
  
  const showMobileNav = ref(false)
  </script>
  
  <style>
  /* General styles */
 
  
  .navbar-brand .navbar-item {
    font-weight: bold;
    color: #fff;
  }
  
 
  
  .navbar-item {
    color: #fff;
    transition: background-color 0.3s ease, color 0.3s ease;
    padding: 1rem; /* Added padding for better alignment */
    font-size: 1.1rem; /* Adjusted font size */
  }
  
  .navbar-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: #fff;
  }
  
  .navbar-item.is-active {
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
  }
 
  
  .navbar-burger:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  



  </style>
  