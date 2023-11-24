<template>
    <h2 class="subtitle is-1">Manage Data File :</h2>
    <div v-for="datas in scheduleData" :key="datas.id" class="card mb-5" :class="{ 'has-background-danger-light' : datas.deletedAt}">
        <div v-if="datas.deletedAt == null && (new Date(currentDate).toLocaleString() < datas.endTime || datas.startTime == 'Empty')">
            <div class="card-content">
                <div class="content">
                    <div class="column is-mobile is-vcentered">
                        <div class="column">
                            <table class="table is-bordered">
                                <tr>
                                    <th>Video Name</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Cancel ?</th>
                                </tr>
                                <tr>
                                    <td>{{datas.videoName}}</td>
                                    <td>{{datas.startTime}}</td>
                                    <td>{{datas.endTime}}</td>
                                    <td><button @click="deleteData(datas.scheduleId)" class="button is-danger">
                                        Cancel
                                        </button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Confirm Cancel?</p>
            </header>
            <section class="modal-card-body">
                <h3>Are you sure want to cancel this video from playing?</h3>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="deleteConfirm">Yes</button>
                <button class="button is-danger" @click="cancelConfirm">No</button>
            </footer>
        </div>    
    </div>
    {{currentDate}}
</template>

<script setup>
// Import Necessary Library
import { ref, onMounted, reactive } from 'vue';
import { doc, collection, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../main'
import { v4 as uuidv4 } from 'uuid'; 

//Store Video ScheduleData from firebase
let scheduleData = ref([

]);
//Store Video name and id from firebase
let videoNameData = reactive({
    
});
//Store temporary data from firebase
const tempVidNameId = [];
const tempScheduleId = [];
//Store deleted value
const deleted = ref(false);

const date = new Date();

//To get Current Date 
let currentDay= date.getDate();

let currentMonth = date.getMonth()+1;

let currentYear = date.getFullYear();

let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();
let session = "AM";


if(currentHour == 0){
    currentHour = 12;
}
if(currentHour > 12){
    currentHour = currentHour - 12;
    session = "PM"
}
console.log(currentMinute)
if(currentMinute < 10){
    currentMinute =  "0" + currentMinute;
}

if(currentSecond < 10){
    currentSecond =  "0" + currentSecond;
}

// we will display the date as YYYY-MM-DD
let currentDate = `${currentMonth}/${currentDay}/${currentYear}, ${currentHour}:${currentMinute}:${currentSecond} ${session}`;


//modal variable
let modal;

let deletedDataID;

onMounted(() => {
    modal = document.querySelector('.modal');

    onSnapshot(collection(db, 'contentData'), (querySnapshot) =>{
        querySnapshot.forEach((doc) => {
            const data = {
                vidId: doc.data().id,
                videoName: doc.data().videoName
            };
            tempVidNameId.push(data);
        });
        videoNameData = tempVidNameId
        //console.log(tempVidNameId)
    });
    onSnapshot(collection(db, 'scheduleData'), (querySnapshot) =>{
        const tempScheduleId = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc.data().startTime)
            if(doc.data().startTime != null){
                const data = {
                    videoName: tempVidNameId.find(data => doc.data().videoId == data.vidId).videoName,
                    videoId: doc.data().videoId,
                    scheduleId: doc.id,
                    startTime: new Date(doc.data().startTime).toLocaleString(),
                    endTime: new Date(doc.data().endTime).toLocaleString(),
                    deletedAt: doc.data().deletedAt
                };
                tempScheduleId.push(data);
            }
            else{
                const data = {
                    videoName: tempVidNameId.find(data => doc.data().videoId == data.vidId).videoName,
                    videoId: doc.data().videoId,
                    scheduleId: doc.id,
                    startTime: "Empty",
                    endTime: "Empty",
                    deletedAt: doc.data().deletedAt
                };
                tempScheduleId.push(data);
            }
        });
        scheduleData.value = tempScheduleId;
        //console.log(tempScheduleId)
        //console.log(scheduleData)
    });
});

const deleteData = (scheduleId) => {
    deletedDataID = scheduleId
    modal.classList.add('is-active')
    
    
    const index = scheduleData.value.findIndex(data => data.scheduleId === scheduleId)
    //console.log(index)
    /*
    if(deleted.value == true){
		updateDoc(doc(collection(db, 'scheduleData'), scheduleId), {
        deletedAt: null
        })
        deleted.value = false;

	}else {
        updateDoc(doc(collection(db, 'scheduleData'), scheduleId), {
        deletedAt: currentDate
        })
		deleted.value = true;
	}*/
}

const cancelConfirm = () => {
    modal.classList.remove('is-active')
}

const deleteConfirm = () => {
    let dates = new Date();
    let h = dates.getHours();
    let m = dates.getMinutes();
    let s = dates.getSeconds();
    console.log("waktu dibatalkan = " + h + ":" + m + ":" + s);

    updateDoc(doc(collection(db, 'scheduleData'), deletedDataID), {
    deletedAt: currentDate
    })
    modal.classList.remove('is-active')
}
</script>

<style scoped>
@import 'bulma/css/bulma.min.css';

h2{
    margin: 20px;
}
.card{
    width: 90%;
    margin: auto;
}

.line-through {
    text-decoration: line-through;
}
</style>