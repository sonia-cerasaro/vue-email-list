var app = new Vue (
  {
    el: '#root',
    data: {
      mail: '',
      mails: [],
    },
    methods: {

      getMail: function () {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          console.log(response.data.response);
          this.mail = response.data.response;
        });
     },

    }
  });
