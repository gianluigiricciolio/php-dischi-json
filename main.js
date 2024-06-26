Vue.createApp({
    data() {
        return {
            apiUrl: 'http://localhost/php-dischi-json/server.php',
            dischi: [],
            selectedDisc: null
        }
    },

    methods: {

        apiCall() {
            axios
                .get(this.apiUrl)
                .then(response => {
                    this.dischi = response.data;
                }).catch(error => console.log(error));
        },

        setDiscoIndex(index) {
            this.selectedDisc = index;
        }

    },

    created() {
        this.apiCall();
    }
}).mount('#app');