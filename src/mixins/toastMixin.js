export default {
    methods: {
        showToast(variant, title, description) {
            this.$root.$bvToast.toast(description, {
                  title: title,
                  autoHidenDelay: 3000,
                  variant: variant,
                  solid: true
            });

      }
   }
}