<template>
  <main class='container'>
    <div class='containerText'>
      <h1>Error 404 - Page not Found</h1>
      <h3>The url address you entered is invalid!</h3>
    </div>
    <div class='btnContainer'>
      <RouterLink to='/' class='redirectHomeBtn'>Back to Home</RouterLink>
    </div>
  </main>
</template>

<script></script>

<style scoped>
.container {
  width: 100vw;
  max-width: 1240px;
  height: 80vh;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.containerText {
  text-align: center;

  h3 {
    font-weight: 300;
    padding: 1rem 0;
  }
}

.btnContainer {
  margin-top: 1.5rem;
}

.redirectHomeBtn {
  background-color: #1f039c;
  padding: .8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #3105e1;
    transition: .2s ease-in-out;
  }
}
</style>