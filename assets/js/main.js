const app = new Vue({
    el: '#app',
    data: {
        tasks: [
            "Completare l'esercizio di oggi",
            "Completare il bonus.",
            "Contemplare il proprio amore per VueJS",
        ],
        newTask: '',
        logo: 'https://www.boolean.careers/images/misc/logo.png',

        error: false,
    },

    methods:{
        deleteTask(index){
            this.tasks.splice(index, 1)
            console.log(this.tasks);
        },

        addTask(){
            if (this.newTask.length > 2){
                this.tasks.push(this.newTask);
                this.newTask = '';
            } else {
                this.error = true;
            }
        },
    },
})