var home_page = {
    template: `
    <div class="container" style="width: 100%; vertical-align: middle; padding-top: 10%;">
        <div><p>{{ username }} {{ email }} </p>
            <h1 class="h1 mb-3 font-weight-normal" style="text-align: center;">Moonlab @IISERB</h1>
        </div>
        <br>
        <div style="text-align: center; margin-top: 5%;">
            <h6>Already have an account? Sign In!</h6>
            <b-link to="/login"><button id="login" class="btn btn-primary" value="Register">Sign In</button></b-link>
         </div>
        <br>
        <div style="text-align: center; margin-top: 5%;">
            <h6>Don't have an account? Register Now!</h6>
            <b-link to="/register"><button id="register" class="btn btn-primary" value="Register">Register Now</button></b-link>
        </div>
    </div>
    `,
    data: function() {
        return {
            username: "",
            email: ""
        }
    },
    methods: {
        async getUser() {
            try{
                const response = await fetch("./users.json", {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                const data = await response.json()
                this.username = data.username
                this.email = data.email
            } catch(error){
                console.log(error)
            }
        }
    }
};

export default home_page;