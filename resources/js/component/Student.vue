<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <router-link to="/add-student" class="btn btn-primary">Add Student</router-link>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Age</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in students" :key="student.id">
                            <th scope="row">{{student.id}}</th>
                            <td>{{student.first_name}}</td>
                            <td>{{student.last_name}}</td>
                            <td>{{student.age}}</td>
                            <td><button class="btn btn-info" @click="editStudent(student)">Edit</button> | <button class="btn btn-danger" @click="deleteMepls(student.id)">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal" id="editModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="updateStudent()">
                <div class="modal-body">
                        <div class="mb-3">
                            <label for="firstname" class="form-label">First Name</label>
                            <input type="text" v-model="form.first_name" class="form-control" id="firstname">
                        </div>
                        <div class="mb-3">
                            <label for="lastname" class="form-label">Password</label>
                            <input type="text" v-model="form.last_name" class="form-control" id="lastname">
                        </div>
                        <div class="mb-3">
                            <label for="age" class="form-label">Age</label>
                            <input type="number" v-model="form.age" class="form-control" id="age">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
    </div>
</template>
<script>
export default {
    data () {
            return {
                editMode : false,
                students: {},
              form: new Form({
               id: '',
               first_name: '',
               last_name: '',
               age: '',
            })
        }
    },
    created(){
        this.loadStudent();
    },     
    methods: {
        loadStudent(){
                axios.get("api/students")
                .then(({ data }) => (
                    console.log(data),
                    this.students = data));
            },
        editStudent(student)
        {   
            this.form.reset();
            $('#editModal').modal('show');
            this.form.fill(student);
        },
        updateStudent()
        {
            this.form.put('/api/students/'+this.form.id)
                .then((response) => {
                    $(".btn-close").trigger("click");
                    this.loadStudent();
                })
                .catch(error => {
            });
        },
        deleteMepls(id)
        {
            this.form.delete('/api/students/'+id).then(()=> {
            this.loadStudent();
                alert("uyy success")
            })
        }
            
    },
    
}
</script>
