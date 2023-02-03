<template>
    <div>
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-10 col-md-8 col-lg-6">
                    <form @submit.prevent="editMode ? updateStudent() : createStudent()">
                            <h1>Add Student</h1>
                            <div class="form-group">
                                <label for="first_name">First Name:</label>
                                <input type="text" v-model="form.first_name" class="form-control username" id="first_name" placeholder="First name" name="first_name">
                                <div class="text-danger" v-if="form.errors.has('first_name')" v-html="form.errors.get('first_name')" />
                            </div>
                            <div class="form-group">
                                <label for="last_name">Last Name:</label>
                                <input type="text" v-model="form.last_name" class="form-control password" id="password" placeholder="Last Name" name="last_name">
                                <div class="text-danger" v-if="form.errors.has('last_name')" v-html="form.errors.get('last_name')" />
                            </div>
                            <div class="form-group">
                                <label for="age">Age:</label>
                                <input type="number" v-model="form.age" class="form-control password" id="age" placeholder="age" name="age">
                                <div class="text-danger" v-if="form.errors.has('age')" v-html="form.errors.get('age')" />
                            </div>

                            <div class="row mt-3">
                                <div class="col-10">
                                    <router-link to="/" class="btn btn-warning float-left">Back</router-link>
                                </div>
                                <div class="col-2">
                                <button type="submit" value="Commit" class="btn btn-success float-right">Submit</button>
                                </div>

                            </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['student'],
    data () {
            return {
                editMode : false,
                Students: {},
              form: new Form({
               id: '',
               first_name: '',
               last_name: '',
               age: '',
              })
            }
          },
          mounted() {
            },
          methods: {
            createStudent() {
                this.form.post('/api/students')
                    .then((response) => {
                        // this.populateBarangay();
                        this.$router.push("/");
                    })
                    .catch(error => {
                    });
            }
          }
}
</script>
<style>
    
</style>