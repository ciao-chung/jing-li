<template>
  <nav class="hidden-xs hidden-sm navbar footer-nav" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <div class="navbar-brand">
          <span class="sr-only">&copy;{{config.company.name}}</span>
          <a>
            &copy;{{config.company.name}}
          </a>
        </div>

      </div>
    </div>
  </nav>
</template>

<script type="text/javascript">
export default {
  computed: {
    config: function() {
      return this.$store.getters.config
    }
  },
}
</script>
