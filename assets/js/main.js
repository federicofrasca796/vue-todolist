const app = new Vue({
    el: '#app',
    data: {
        tasks: [
            "Completare l'esercizio di oggi",
            "Completare il bonus.",
            "Contemplare il proprio amore per VueJS",
        ],
        completeTasks: [],
        newTask: '',
        logo: 'https://www.boolean.careers/images/misc/logo.png',

        error: false,

        editTxt: '',
        edit: false,
    },

    methods:{
        deleteTask(index){
            this.tasks.splice(index, 1);
        },

        addTask(){
            if (this.newTask.length > 2){
                this.tasks.push(this.newTask);
                this.newTask = '';
            } else {
                this.error = true;
            }
        },

        completeTask(index){
            //push completed task in completeTasks array
            this.completeTasks.push(this.tasks[index]);

            //remove task from tasks array
            this.tasks.splice(index,1);
        },

        handleEdit(task){
            this.edit = true;
            console.log(task);
        },

        editTask(){
            //show edit section
        },
    },
})