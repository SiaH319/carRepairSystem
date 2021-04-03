import axios from 'axios'
import Multiselect from 'vue-multiselect'
var config = require('../../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})



function MechanicDto(name, password, phone, email){
    this.name = name;
    this.password=password;
    this.phone = phone;
    this.email = email;
    this.id =""
}
    export default {
     components: {
            Multiselect
        },
      data() {
      return {
        name: '',
        email:'',
        phone:'',
        password:'',
        address:'',
        admin: "",
        mechanic:"",
        modalShow:false,
        mechanics: [],
        value:[],
        options: [
            {name: "CarRepair"},
            {name: "OilChange"},
            {name: "RegularCheckup"},
            {name: "CarWash"},
            {name: "TireChange"},
            {name:"RoadsideAssistance"},
            {name: "Towing"},
            {name: "CarInspection"},
            {name: "Other"}
        ],
        
        nameState: null,
        emailState:null,
        phoneState:null,
        passwordState:null,
        addressState:null,
        capabilitiesState:null,
        error: "",
      }
    },

    created: function () {
    // Initializing persons from backend
    AXIOS.get('/mechanics')
    .then(response => {
      // JSON responses are automatically parsed.
      this.mechanics = response.data
    })
    .catch(e => {
      this.error = e
    })
    },

    methods: {
        /**
         * To Create a Mechanic 
         */
        createMechanic: function (name,password,phone,email,value){
          AXIOS.post('/mechanic/'.concat(name), {},{
            params:{
                name: name,
                phone: phone,
                password: password,
                email: email,
            }}).then(response => {
              var services = []
              for(var i = 0; i < value.length; i++){
                services.push(value[i].name)
              }
              AXIOS.put("/mechanic/updateServices/".concat(email + "?services=" + services), {},{})
                    .then(response => { 
                      this.mechanics.push(response.data)
                    })
                    .catch(e => {
                      this.error = e
                    })
            })
            .catch(e => {
                this.error = e
          })
          
        },
        
        /** To Save the Edits in Edit Profile */
        editMechanic : function(email, name, password, phone)
        {
          AXIOS.put('/mechanic/'.concat(email+"?name="+name+"&password="+password+"&phone="+phone),{},{})
          .then(response => {
            for(var i = 0; i < this.mechanics.length; i++){
              if(this.mechanics[i].id == response.data.id){
                this.mechanics[i] = response.data
              }
            }
          }).catch(e => {
            this.error = e;
          })
          
        },

        /** To AutoComplete the Edit Profile Modal */
        fillCredentials : function(row)
        {
            
          this.editName = row.name;
          this.editEmail = row.email;
          this.editPhone = row.phone;
          this.editPassword = row.password;
         
        },
        
        removeMechanic: function(id){
          AXIOS.delete('/mechanic/'.concat(id), {}, {})
            .then(response => {
              for(var i = 0; i < this.mechanics.length; i++){
                if(this.mechanics[i].id == response.data.id){
                  if(i == this.mechanics.length-1){
                    this.mechanics = this.mechanics.splice(0,i)
                  } else {
                    this.mechanics = this.mechanics.splice(0,i).concat(this.mechanics.splice(i+1,this.mechanics.length))
                  }
                  break
                }
              }
            })
            .catch(e => {
              this.error = e;
            })
        },

        searchForMechanics: function(search){
            AXIOS.get('/mechanics')
            .then(response => {
                if(search.length == 0){
                    this.mechanics = response.data;
                } else {
                    this.mechanics = [];
                    for(var i = 0; i < response.data.length; i++){
                        var mechanic = response.data[i];
                        if(mechanic.name.includes(search)){
                            this.mechanics.push(mechanic);
                        } else if(mechanic.email.includes(search)){
                            this.mechanics.push(mechanic);
                        } else if(mechanic.phone.toString().includes(search)){
                            this.mechanics.push(mechanic);
                        }
                    }
                }
            })
            .catch(e => {
                this.error = e
            })
        },

      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        this.emailState = valid
        this.phoneState = valid
        this.passwordState = valid 
        this.addressState = valid
        return valid
      },
      handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        this.handleSubmit()
      },
       resetModal() {
        this.name = ''
        this.email=''
        this.phone=''
        this.password=''
        this.address=''
        this.mechanic=""
        this.capacities=""
        this.nameState = null
        this.emailState =null
        this.phoneState = null
        this.passwordState = null
        this.addressState =null
        this.capabilitiesState = null
      },
      handleSubmit() {
        if (!this.checkFormValidity()) {
          return
        }
        
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
    
       
    }
