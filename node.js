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
  
    addNode(vertex) {
      //console.log("63ln");
      reverseList[vertex] = [];
    }
  
    addedge(v, w) {
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
     reversegraph.addNode(i);
 }
reversegraph.addedge(2,0);
reversegraph.addedge(6,2);
reversegraph.addedge(7,2);
reversegraph.addedge(5,2);
reversegraph.addedge(4,2);
reversegraph.addedge(9,2);
reversegraph.addedge(10,5);
reversegraph.addedge(15,5);
reversegraph.addedge(8,4);
reversegraph.addedge(41,19);
reversegraph.addedge(49,19);
reversegraph.addedge(31,19);
reversegraph.addedge(33,19);
reversegraph.addedge(30,20);
reversegraph.addedge(48,20);
//console.log((reverseList));
updatingtxt1("alpha.txt");
//let txt;
//갱신된 텍스트 파일로부터 추천 과목 갱신
function updatingtxt1(txtid){
    //txt=p5.loadStrings(txtid);
    let count=0;
    let txt = "22200000000000000000000000000000000000000000000000"
    //총 수강과목 수 세기
    for(let i = 0;i<txt.length;i++){
      if(txt[i]==='2'){ count+=1;}
    }
    
    //만약 과목 i가 수강되었을 때, 만약 비수강으로 되어있다면 수강 과목수를 고려하여 추천으로 변경한다.
    for(let i = 0;i<txt.length;i++){
      if(txt[i]==='2'){
        for(let j = 0; j < adjacencyList[i].length ; j++){
          if(txt[adjacencyList[i][j]]==='0'){
            if(weighttorf(count,j)){
              //txt[j]를 1로 변경!
              console.log(adjacencyList[i][j]+"번 과목을 추천 과목으로 변경!(0 -> 1)");
            }
          }
        }
      }
    }
    // showRec1() //갱신된 정보를 바탕으로 웹 페이지 목록 갱신
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
function updatingtxt2(txid) {
    txt=loadstirings(txtid);
    showRec2()
}

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