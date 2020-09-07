<template>
  <div class="box">
    
    <section v-if="isCrashInfo">
        <p class="title">Crash List</p>
        <b-table
        :data="crash_list"
        striped
        narrowed
        bordered>
            <b-table-column 
            field="name"
            label="name"
            v-slot="props">
            <a @click="loadCrashInfo(props.row.name)">{{props.row.name}}</a>
            </b-table-column>
            <b-table-column 
            field="crash_input"
            label="crash_input"
            v-slot="props">
            {{props.row.crash_input}}
            </b-table-column>
            <b-table-column 
            field="crash_time"
            label="crash_time"
            v-slot="props">
            {{props.row.crash_time}}
            </b-table-column>
            <b-table-column 
            field="crash_taint"
            label="crash_taint"
            v-slot="props">
            {{props.row.crash_taint}}
            </b-table-column>
            <b-table-column 
            field="crash_cfg"
            label="crash_cfg"
            v-slot="props">
            {{props.row.crash_cfg}}
            </b-table-column>
        </b-table>
    </section>
    <section v-else>
        <nav class="level">
        <!-- Left side -->
            <div class="level-left">
                <p class="title">Crash Information</p>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <b-button class="button is-warning" label="Back to List" @click="isCrashInfo=true">
                    </b-button>
                </div>
            </div>
        </nav>
        <b-field horizontal label="Crash Title">
            <p>{{crash_title}}</p>
        </b-field>
        <b-field horizontal label="Reported Date">
            <p>{{reported_date}}</p>
        </b-field>
        <b-field horizontal label="Target">
            <p>{{target}}</p>
        </b-field>
        <b-field horizontal label="Fuzzer Name">
            <p>{{fuzzer_name}}</p>
        </b-field>
        <b-field horizontal label="Crash Log">
            <p>{{crash_log}}</p>
        </b-field>
        <b-field horizontal label="Input data that caused crash in target program">
            <b-input placeholder="Search...">
            </b-input>
            <b-button class="button is-primary" label="Download" @click="downloadFile()">
            </b-button>
        </b-field>
        <b-field horizontal label="Crash occurrence time in target program" >
            <b-input placeholder="Search...">
            </b-input>
            <b-button class="button is-primary" label="Download" @click="downloadFile()">
            </b-button>
        </b-field>
        <b-field horizontal label="Taint analysis result of target program">
            <b-input placeholder="Search...">
            </b-input>
            <b-button class="button is-primary" label="Download" @click="downloadFile()">
            </b-button>
        </b-field>
        <b-field horizontal label="Control Flow Graph of target program">
            <b-input placeholder="Search...">
            </b-input>
            <b-button class="button is-primary" label="Download" @click="downloadFile()">
            </b-button>

        </b-field>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      isCrashInfo: true,
      crash_title: "Test version14",
      reported_date:"Aug. 24, 2020, 2:26 a.m. (1 week, 6 days ago)",
      target:"/home/soonhong/driller",
      fuzzer_name:"Driller",
      crash_log:"",
      files:[
          "url1",
          "url2",
          "url3",
          "url4"
      ],
      crash_list:[],
      tmp_data:[
        {
            name : "Testcase2",
            uuid : "61b04cc138064b0da1eb3328ae31b937",
            crash_input : "test1",
            crash_time : "test2",
            crash_taint : "test3",
            crash_cfg : "test4"
        },
        {
            name : "Testcase4",
            uuid : "f85c255017984f978f0385e052d87795",
            crash_input : "test1",
            crash_time : "test2",
            crash_taint : "test3",
            crash_cfg : "test4"
        }
      ]
    }
  },
  methods:{
      downloadFile: function(_filename){
        var link = document.createElement("a");
        link.href = _filename
        link.click();
      },
      loadCrashInfo: function(_testname){
          this.isCrashInfo = false
          console.log(_testname)
      },
      getCrashList: function(){
          axios.get("http://112.187.174.142:3000/" + "crashlist").then(
            (response) => {
            this.crash_list = response.data
            console.log(this.crash_list)
            },
            (error) => {
            console.log(error);
            }
        );
      }
  },
  mounted: function () {
      this.getCrashList()
  }

}
</script>
