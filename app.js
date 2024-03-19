new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    email: '',
    password: '',
  },
  methods: {
    login() {
      // Logique de connexion ici
      console.log('Email: ' + this.email + ', Mot de passe: ' + this.password);
    },
  },
});