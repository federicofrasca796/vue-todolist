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
        // edit: [false, false, false]
        edited: false
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
            console.log(this.tasks[index]);
            //remove task from tasks array
            this.tasks.splice(index,1);
        },

        /* handleEdit(index){
            this.edit[index] = true;
            console.log(this.edit);
            console.log(this.edit[index]);
        }, */

        editTask(index){
            alert(`Hai modificato il task. Il nuovo task è: ${this.tasks[index]}`)
        },

        discardCompleted(index){
            this.tasks.push(this.completeTasks[index]);
            
            this.completeTasks.splice(index, 1);
        }

    },
})
