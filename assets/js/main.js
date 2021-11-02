const app = new Vue({
    el: '#app',
    data: {
        tasks: [
            "Completare l'esercizio di oggi",
            "Completare il bonus.",
            "Contemplare il proprio amore per VueJS",
        ],

        logo: 'https://www.boolean.careers/images/misc/logo.png',

    },

    methods:{
        deleteTask(index){
            this.tasks.splice(index, 1)
            console.log(this.tasks);
        },
    },
})