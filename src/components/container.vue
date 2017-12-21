<template>
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-4" v-for="item in list">
        <h2>{{ item.title }}</h2>
        <p>{{ item.info }}</p>
        <p><a class="btn btn-default" href="#" role="button">{{ item.btntext }}</a></p>
      </div>
    </div>

    <hr>

    <footer>
      <p>&copy; 2016 Company, Inc.
        <a href="http://getbootstrap.com/examples/jumbotron/">power by bootstrap example jumbotron</a>
      </p>
    </footer>
  </div> <!-- /container -->
</template>

<script>
export default {
  props: {
    // attribute name: Type
    list: Array
  },
}
</script>

<style>

</style>
