/* 인접리스트 directed graph 구현 */
//import * as p5 from './p5.js';

let adjacencyList=[];
class Graph {
   
  constructor() {
    
  }

  addNode(vertex) {
    //console.log("63ln");
    adjacencyList[vertex] = [];
  }

  addedge(v, w) {
    //console.log((adjacencyList));
    adjacencyList[v].push(w);   
  }
}

let reverseList=[];
class Graph2 {
   
    constructor() {
      
    }
  
    addNode2(vertex) {
      //console.log("63ln");
      reverseList[vertex] = [];
    }
  
    addedge2(v, w) {
      //console.log((adjacencyList));
      reverseList[v].push(w);   
    }
  }

var allgraph = new Graph();
//노드 선언
for(let i=0;i<52;i++){ 
    allgraph.addNode(i);
}

//1차 그래프 간선 추가
allgraph.addedge(0,2);
allgraph.addedge(2,6);
allgraph.addedge(2,7);
allgraph.addedge(2,5);
allgraph.addedge(2,4);
allgraph.addedge(2,9);
allgraph.addedge(5,10);
allgraph.addedge(5,15);
allgraph.addedge(4,8);
allgraph.addedge(19,41);
allgraph.addedge(19,49);
allgraph.addedge(19,31);
allgraph.addedge(19,33);
allgraph.addedge(20,30);
allgraph.addedge(20,48);
//console.log((adjacencyList));

//역그래프
var reversegraph = new Graph2();
for(let i=0;i<52;i++){ 
     reversegraph.addNode2(i);
 }
reversegraph.addedge2(2,0);
reversegraph.addedge2(6,2);
reversegraph.addedge2(7,2);
reversegraph.addedge2(5,2);
reversegraph.addedge2(4,2);
reversegraph.addedge2(9,2);
reversegraph.addedge2(10,5);
reversegraph.addedge2(15,5);
reversegraph.addedge2(8,4);
reversegraph.addedge2(41,19);
reversegraph.addedge2(49,19);
reversegraph.addedge2(31,19);
reversegraph.addedge2(33,19);
reversegraph.addedge2(30,20);
reversegraph.addedge2(48,20);
//console.log((reverseList));

//console.log("reversegraph : ");


//test case

function loadUsers(){
  let AllUsers = localStorage.getItem("Users");
  if(!AllUsers) return;

  Users = JSON.parse(AllUsers);
}
let usernum;
class User {
  constructor(ID,PW,phone,name){
    this.ID = ID;
    this.PW = PW;
    this. sub1 ="000000000000000000000000000000000000000000000000000";
    this.sub2="222222222222222222222222222222222222222222222222222";
    this.phone=phone;
    this.name=name;
  }
};
let Users = [];


function findID(ID){
  for(let i = 0; i<Users.length; i++){
    if(ID === Users[i].ID)
    {
      usernum = i;
      return 1;
    }
  }
}
function getusernum(usernum){
  return usernum;
}
function checkPW(PW){
  if(PW === Users[usernum].PW)
  return 1;
}

function newuser(ID,PW,phone,name){
  let person = new User(ID,PW,phone,name)

  Users.push(person);
  localStorage.setItem("Users", JSON.stringify(Users));
}

function calluserdata(usernumber){
  return Users[usernumber].sub1;
}

function weighttorf(sugang,num){
  if(num<11){
    return true;
  }else if(10<num<18){
    if(sugang>7){
      return true;
    }
  }else if(17<num<23){
    if(sugang>11){
      return true;
    }
  }else{
    if(sugang>15){
      return true;
    }
  }
  return false;
}


/*
function showRec1(){

}

functioni showRec2(){

}

function getRec1(){
    updatingtxt1(txtid);
}

function getRec2() {
    updatingtext2(txid);
}
*/