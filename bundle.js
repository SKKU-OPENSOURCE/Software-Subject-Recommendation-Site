(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
/* 인접리스트 directed graph 구현 */
//import * as p5 from './p5.js';

var fs = require('fs');

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
//let txt;
//갱신된 텍스트 파일로부터 추천 과목 갱신
function updatingtxt1(txtid){
    let count=0;
    let txt = fs.readFileSync(txtid, "utf8");
    //총 수강과목 수 세기
    for(let i = 0;i<txt.length;i++){
      if(txt[i]==='2'){ count+=1;}
    }
    //console.log("변경 전 txt 스트링 내용 : "+txt);
    //만약 과목 i가 수강되었을 때, 만약 비수강으로 되어있다면 수강 과목수를 고려하여 추천으로 변경한다.
    for(let i = 0;i<txt.length;i++){
      if(txt[i]==='2'){
        for(let j = 0; j < adjacencyList[i].length ; j++){
          if(txt[adjacencyList[i][j]]==='0'){
            if(weighttorf(count,j)){
              //txt[j]를 1로 변경!
              //console.log(adjacencyList[i][j]+"번 과목을 추천 과목으로 변경!(0 -> 1)");
              txt=changestring(txt,adjacencyList[i][j],1);
            }
          }
        }
      }
    }
    return txt;
    //console.log("변경 된 txt 스트링 내용 : "+txt);
    // showRec1() //갱신된 정보를 바탕으로 웹 페이지 목록 갱신
}


function weighttorf(sugang,num){
  if(num<11){
    return true;
  }else if(10<num<18){
    if(sugang>7){
      return true;
    }no
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

//원하는 과목의 선수강 과목을 알고싶은 경우에 사용
function updatingtxt2(txtid) {
    let txt2=fs.readFileSync(txtid, "utf8");
    //let txt2= "22220222222222222222222222222222222222220000000000"
    for(let i = 0;i<51;i++){
      txt2=recur(txt2,i)
    }
    //console.log("변경 된 txt2 스트링 내용 : "+txt2);
    //showRec2()
}

function recur(tt,indexnum){//tt는 txt 스트링, indextnum은 기준점이 될 인덱스 번호
  //console.log(tt+" "+indexnum);
  if(reverseList[indexnum].length===0 || tt[indexnum]==='2'){//선행 과목이 없는 경우 변경 점 없이 리턴 + 단순히 수강한 과목이라면 변경할 내용이 없으므로 그대로 리턴
    //console.log("ending recur function");
    return tt;
  }
  else{//선행 과목 변경
    for(let i = 0 ; i < reverseList[indexnum].length ; i++){
      //console.log(reverseList[indexnum][i]+"번 과목을 추천 과목으로 변경 (2->1)");//우선 선행 과목들을 모두 1로 변경
      tt=changestring(tt,reverseList[indexnum][i],1);
      tt=recur(tt,reverseList[indexnum][i]);//선행과목들의 선행과목을 추적해서 재귀함수 구현
      return tt;
    }
  }
}

function changestring(strr,indexnum,changenum){//txt는 txt 스트링, indextnum은 기준점이 될 인덱스 번호, changenum은 변경할 숫자의 값
//(ex. changenum이 1이면 인덱스넘버의 위치에 있는 값을 changenum으로 변경)
  let changechar = changenum+"";
  strrsub1=strr.substring(0,indexnum)
  strrsub2=strr.substring(indexnum+1,strr.length);
  strr=strrsub1+changechar+strrsub2;
  return strr;
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
},{"fs":1}]},{},[2]);
