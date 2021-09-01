<template>
<div>
<div class="coverage1">
        <div class="selectinput">    <!-- Bu class component olacak -->
            <div class="iconwrapper">
                <i class="fas fa-plane-departure iconwrapper" style="font-size: 30px; opacity: 0.6;"></i>
            </div>
            <div class="inputwrapper">
                <select v-model="departure" class="inputwrapper">
                    <option v-for="item in cityList" :value="item" :key="item">{{item}}</option>
                </select>
            </div>
        </div>
        <div class="selectinput">
            <div class="iconwrapper">
                <i class="fas fa-plane-arrival iconwrapper" style="font-size: 30px; opacity: 0.6;"></i>
            </div>
            <div class="inputwrapper">
                <select v-model="arrival" class="inputwrapper">
                    <option v-for="item in cityList" :value="item" :key="item">{{item}}</option>
                </select>
            </div>
        </div>
        <div class="selectgroup">
            <div  class="miniselectinput">
                <p>Tarih</p>
                <i class="far fa-calendar-alt"></i>
            </div>

        </div> <!-- Bu class component olacak -->
        <div class="selectgroup">
            <div @click="checkPassengerModal = !checkPassengerModal " class="miniselectinput">
                <i class="fas fa-male" v-for="item in passengerIcon" :key="item"></i>
                <span v-if="plusIcon">+</span>
                <p style="padding-left:10px">{{passengerCounter}}</p>
            </div>
            <div v-if="checkPassengerModal" class="modal">
                <p>Kabin ve yolcu seçimi</p>

                <div class="classesradioselect">
                    <input type="radio"  id="economy" name="flightclass" v-model="pickedClass">
                  <label >Economy Class</label><br>
                  <input type="radio" id="business"  name="flightclass" v-model="pickedClass">
                  <label >Business Class</label><br>
                </div>

                <div class="passengercounter">
                    <p>Yolcu</p>
                    <button @click="decrementPassenger">-</button>
                    <div class="numberpassenger">{{passengerCounter}}</div>
                    <button @click="incrementPassenger">+</button>
                </div>
            </div>
        </div>
        
        
        <button :disabled="checkSelect" class="nextbutton" @click="nextPage()"><i class="fas fa-chevron-right"></i></button>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return{
            arrival: null,
            departure:null,
            checkOriginAirport : false,
            checkDestinationAirport : false,
            checkPassengerModal: false,
            pickedClass: null,
            passengerCounter: 1,
            passengerIcon: 1,
            plusIcon: false
        }
    },

    created() {
        this.$store.dispatch("getCity");
        this.$store.dispatch("getflights");
    },

    computed:{
        ...mapGetters({
        cityList: "cityList",
        originAirportCityList: "originAirportCityList",
        destinationAirportCityList: "destinationAirportCityList"
        }),

        checkSelect (){
            this.checkDestinationAirport = this.destinationAirportCityList.some((element) => element.toUpperCase() == this.arrival);
            this.checkOriginAirport = this.originAirportCityList.some((element) => element.toUpperCase() == this.departure);
            if (this.checkOriginAirport && this.checkDestinationAirport) {
                return false;
            }else{
                return true;
            }
        }
    },

    methods:{
    incrementPassenger() {
      if (this.passengerCounter < 3) {
            this.passengerIcon++;
      }else{
          this.plusIcon = true;
      }
      this.passengerCounter++;
    },
    decrementPassenger() {
        if (this.passengerCounter <= 1) {
            return
        }else{
            this.passengerCounter--;
        }

        if (this.passengerCounter < 3) {
            this.passengerIcon--;
        }else if (this.passengerCounter == 3) {
            this.plusIcon = false
        }
    },
    nextPage(){
        this.$router.push("/flight")
    }
    }
}
</script>

<style lang="scss" scoped>

.coverage1{
    height: 110px;
    width: 850px;
    background-color: rgba(96 ,105, 119,  60%);
    padding: 0 28px;
    border: 1px solid black;
    margin: auto;
    display: flex;
    align-items: center;
    .selectinput{
    height: 70px;
    width: 260px;
    background-color: #fff;
    margin-left: 15px;
    opacity: 0.8;
    border: none;
    display: flex;
        .iconwrapper{
            width: 60px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .inputwrapper{
            width: 180px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            select{
                border: none;
                width: 140px;
                height: 60px;
                font-size: 20px;
                outline-color: white;
                &:focus{
                    border: none;
                }
                option{
                    background-color: white;
                }
            }
        }
    
}
.selectgroup{
    height: 60px;
    width: 100px;
    margin-left: 10px;
    background-color: #063048;
    
    .miniselectinput{
        height: 60px;
        width: 100px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }
    .modal{
        width: 300px;
        height: 150px;
        background-color: white;
        position: relative;
        right: 150px;
        top: 10px;
        padding-top: 5px;
        .classesradioselect{
            display: flex;
            justify-content: center;
            margin-top: 30px;
        }
        .passengercounter{
            display: flex;
            justify-content: center;
            button{
                width: 20px;
            }
            .numberpassenger{
                width: 50px;
            }
        }
    }
    i{
        font-size: 25px;
        padding-left: 5px;
    }
}

.nextbutton{
    background-color: #E81932;
    margin-left: 15px;
    color: white;
    height: 60px;
    width: 50px;
    cursor: pointer;
    &:disabled{
        cursor: context-menu;
        background-color: gray;
        color:black ;
    }
}

}




</style>