/* 인접리스트 directed graph 구현 */
//import * as p5 from './p5.js';

var fs = require('fs');

var namelist=["오픈소스소프트웨어실습","컴퓨터개론","공학컴퓨터프로그래밍","자료구조개론","문제해결","시스템프로그램","오픈소스SW실습","JAVA프로그래밍실습","알고리즘개론","컴퓨터구조개론","시스템프로그래밍실습"
,"소프트웨어세미나","컴퓨터공학세미나","프로그래밍실습","소프트웨어공학개론","인공지능개론","컴퓨터네트웍개론","정보보호개론","웹프로그래밍실습","소프트웨어특강1","컴퓨그래픽스개론","기계학습원론",
,"임베디드소프트웨어개론","빅데이터분석방법론","HCI개론","심층신경망개론","네트워크프로젝트","인공지능프로젝트","가상현실론","네트워크인공지능","소프트웨어구조설개론","컴파일러와언어개론",
"블록체인과스마트컨트랙트","소프트웨어특강2","시스템시뮬레이션개론","컴퓨터비전개론","멀티코어컴퓨팅","AI캡스톤디자인","인터넷서비스와정보보호","캡스톤설계프로젝트","임베디드시스템프로젝트",
"데이터베이스프로젝트","고급컴퓨터네트워크설계","분산컴퓨팅원론","정보시각화","인공지능보안","시스템보안특론"]

class User{
  constructor(ID,PW,phone,name){
    this.ID = ID;
    this.PW = PW;
    this.sub1="000000000000000000000000000000000000000000000000000";
    this.sub2="222222222222222222222222222222222222222222222222222";
    this.phone=phone;
    this.name=name;
  }
};

Users=[];
let newuser = new User("Nologin","0000","01000000000","Nologin");
Users.push(newuser);
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
function updatingtxt1(username){
    let count=0;
    let pos = findnamepos(username);
    let txt = Users[pos].sub1;
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
    Users[pos].sub1=txt;
    //return txt;
    
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
    let pos = findnamepos(username);
    let txt2=Users[pos].sub2;
    for(let i = 0;i<51;i++){
      txt2=recur(txt2,i)
    }
    //console.log("변경 된 txt2 스트링 내용 : "+txt2);
    //showRec2()
    Users[pos].sub2=txt2;
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

function isit1(username,i){
  let pos = findnamepos(username);
  if(Users[pos].sub1[i]==="1"){return 1;
  }else{ return 0;}
}

function findnamepos(username){
  for(k = 0; k < Users.length ; k++){
    if(Users[k].name===username){
      return k;
    }
  }
}


function getname(i){
  return namelist[i];
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