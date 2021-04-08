var app = new Vue (
  {
    el: '#root',
    data: {
      mails: [],
    },
    methods: {

      getMail: function () {
        var receivedMails = [];
        for (var i = 0; i < 10; i++) {

          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            receivedMails.push(response.data.response);
            console.log(response.data.response);
          });

        }
        this.mails = receivedMails;

     },
    }
  });
