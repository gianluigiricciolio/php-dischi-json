Vue.createApp({
    data() {
        return {
            apiUrl: 'http://localhost/php-dischi-json/server.php',
            dischi: []
        }
    },

    methods: {

        apiCall() {
            axios
                .get(this.apiUrl)
                .then(response => {
                    this.dischi = response.data;
                }).catch(error => console.log(error));
        }

    },

    created() {
        this.apiCall();
    }
}).mount('#app');