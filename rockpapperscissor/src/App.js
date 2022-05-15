import { useState } from "react";
import "./App.css";
import Box from "./component/Box.js";
//1. 박스2개 (타이틀, 사진, 결과)
//2. 가위 바위 보 버튼 
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임 
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 가짐
//6. 승패 결과에 따라 테두리 색 변경(승 초록 패 빨강 무승부 검정)
const choice = {
  rock : {
    name : "Rock",
    img : "data:image/jpeg;base64,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"
  },
  scissors : {
    name :"Sciccor",
    img :"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAADvCAMAAABfYRE9AAAAw1BMVEX////Fw8PIVVIvAADMV1QzAAA3AAAyAAA1AAA6AADPWFXLysowAAAtAADMy8vIx8cyCwA3DgApAAA5DwC3srEmAACMOTQ7AwDAUU48DwCxSkaoRkJRHBOZPzrm4uHBvb19MixcIhrz8fBpKCFHHhWspKOIeXaQgoCCcW6ZiYZFFgo2BgB0X1uCNC9ADgBRLieglpR3Y19fQz5dPjhWHxZKIxvb1dS2qqdSMClCEgBmTUhfQTzs6OhsU06lnJtxLCUaAAAOUzZKAAAO3klEQVR4nO2da3uivBaGxUAgIGcV8VA8H9BaD1U7ttr9/3/VTgJWVKSnvZX04v7wvtOxM1fWrGRl5ckDzeUyMjIyMjIyMjIyMjIyMjIyMjIyfs8bt9mPZr3i+t4D+V/BDZFVEEVBEEVQep093Hs8v6Y9kgA0TcN/7rTqtmGOpdJCufegfsdelWzjuVzNy5RKremajrVkOFcPT6JrNCsyH0GutQynNLr30H6KZ02NdxIRzk+52Ww+Nqo8+arm2+L23oP7Gb2S69ZwDPlynawjjGna7+R3+KYBu+17j+8HbEpuvYLH/2iasGCtJvP5DlnC2Hiuynm5YSAGg+JKbivPy1XfhNaQC8f/tlmqY6NJ5p+Blvcd4Pd5E916nuTDLfVPEqK9iCbOH/5EGt5rcD9ki1w88LKB/IveYWa5PvnMtLx7jOzHFFWjxvMNA77GfMgB18c5bLnTm4/rN/xzOzJfNVBcSHj+qTb+uGII+xsP6zdsCiYueXX337XPVaPBy00X3nRUv+Nl/C7zDdO62odPkJvHiSoUbzmqX/FgGVWe9+H1wvammmVe7sDdDUf1O2aSz/M1U01oVfvQp5lkZuPdwuZnSVirOJV5o8DdbFC/BJkNPPXETdL3rMZ48j0Ls1uN6Ze8keVUNZKmXi43lHA5f2eml1gDu8LXjORC3RPrMl8es9L0ccDP4/XvJ36TJ7qkSFzbwdIGjonHKXhK/CYN2CRwdKMx/RYaU2PcTfwmr2DLqYyp7Q12XalkoafJ7KgGaQA3CbVPhrsRfbKeXv7fQ/wmxW1JlODYxOCjOSgMw1boQTUquO6Bt6Q/PJBaMt+UJrcY6JfpoQI0zVaz0ajVGuVm3cAH2leNfiSYNT5vi4nHo+X4kZdbUpoEpHVXdI1OI/+hc8mVRt1wrAlpdoLxwnnCn3+zcNy8mRz3bRmU3EDm4mU5n8/j/1Lp7tmEkp7LjaQ6Wf8goZkbSS5pCa3E+XlTdqJdrxKprvrYcg2M3ylTIa9huqVe2MzZSRNLMnEqmykqEUtovJP5VvYNUxKBqhZEyTRaRLqr1G1rluuOmzL/mJCFAcSHxrwp9G457CQW0CjLebnmmlD1+xttvVY2Qwk4RovoeS3b2mwE3B3lXSf+6I6rvYWPT3w5PUeNoWA05Dz/jivCMHKQ5RaqSz6QW7bqTW2cqJoh9GP/hjfo1vl83oWDGw35MzzLfJT5/LMtLs4ab89BxiMuGXV3NZLwipKbJogb9RtycRpTdCJsQ7dFx23FVICthIPiKyYcLkgm5I4pXm6qnOSauITIz4nF/pYMIP43ljt40cR9OpeMBlko0l7E50IyQaFzugW1h5Zr45DIASslV6FUHOHLhnqlYm0RVcHGuyFyK4G4DF42H3Ns3cfNRx3Xjzz/+EmTeztGEj4bVeyr06btELWyZkh7337Hc5SvdIyxCF76s15vNHEANG38b0K2aT81fREiGlbThldXt0f2W7njdmekTJAWo/pOelxBFCW8idXLeRJRmqaeAnDLXbGTROFXpyPncSb723FdpsOX87XHTuv5ufVertIckd8sm2lRy0fSM+nkkqQGr2BWyJClnohzGkbA0ytq/hARuQGQ4veu2/MSdNyJag+kFQ+XiT4ukflr2GJadGVITkZu8glhAt9xTLiJCMtEHJ9KZbfjTQ2Uu8QTwl4g60h+t7t7gZaJuJiS5+8tWQMj/6lyxxV8MmzcTQxwmbgS02NqlD2FqCefKUJEYgkqm7A5lolT5E5qFFiFinLjVeI3rYOYaJkg56TYmNKjRKyBSeZessqlH2LCZaL3L75MfHZDcENClUtNPCNsxGCvxRPM9nvxZQLHlJZS3g5ULpB4a9SXOmFqwjIRl6hPlLJbEtwaSYnn0+64fGyAxA2ILRMpiqlP1NPyOOnKIhCNDlPMuVImPtm3bwlp5viKARIGNIfHPQmXCXEzdTsXsy9F6ynXJsdXuZNwD7NWSbv3UbM77r+NaNTOZx9fl9Jz6znEWcCVT7w6ouVp61Ax4GjrXHQTKWrLcRos/I+Oe7lrdo6BcJoUXCbU4mWZ4Jvja9rfHdghH4/Pd4XYPnavms3TxRNfJnCoKbpNe7CIHFmxXTEmUyPLbp3VA1om/PMywVcTHSG3ZkSWPF+1Xet8TbV3Bbt1sRfhMuHHlAnc4N5l+PEskVnl+Ypvi0/Rkt4eAWS8x2yvpEzsHP/0k0+up25NG01topU0DbfgjDiyrtoPxYkKbbsR26+WTVAsnJUJ0mLcO5AoD3Bq1uS8XO0YplQAAoSiKkLTbFauHABxmRidl4mKkZ5OgvCAEDEf83Kl/Gwa5I7asFuN/BXtISgT3bMyIbecxb3jOKG9FG2/Qe9y89Vao1EjBv8rEeXjywTfMNMiWh4YWcisR66orwdEJ5p5WSb4OkqbI/FhZ0HT7pRrlUp4RZ0QF64IhaJglqOzT27Yaurce+s5EOEYLyXX91vvj40qydq1oMIycfycr/mumhZNIkK7OHxSVQAKokD0fbdF9PDYsGiZWEXKhFz1XSctV58XPKw1bjMbLpAqSmPDb1ZjoyI3HccyIVfeC9I0LaplAg/FYVfFYeHSEddN4DIxCcoE3q7HYLl3JDYs8w+jlQpNt3wZFWkcPAmXCT5fdsFqpmhz5Nx7uF9Fw12SSTav2DLhPtZ9MB3oOqcXBZYs80OV+j8uykQBlwnbnfY5ncMoW5Qea87nrBfANc8bWlomSsjZaRxF7wmqdu+RfoeN6JwfPMjV9mg9hAsliInTXhh6toHwtpTs1kmpkJs2mudmwushJn0GSyk67H6FoerWj0HxctlF067XE14OMXG6D9OjHn2NmUWeKTxMvBbw+wiJ/vRJ+4hpANNiOfoyG8sN9AnyZCHYeZq3laaRmDgOpki6/CJ71W7KOKLKM5jucSi6NnMQ/VWAMkQMNEhn9CWjJjdIkoI9idO9uQAm4Rd43xVTc7f2dZaO/2yY3WNqOK34Aqaz8Gtth5IfgUgjbct1ERpGlhCnK30BLy492HdFlb3XSez/0+1DsadHguKU4hLAkUZ+T1um7gT/Bda53MpZncSEQxlBsPAUsu9KrO27AesSHCqnQeneFkgDPCWVbrJ7KbUMJLF4lilOmyGwLCp43y2xtu8GdJ2X85hwqnZA7Cs6Ym/fpawt2FfOg+K0/T/wVOwzuO9S+lAqXsSEt945ECZTBvddyhQtLxOFU9VbSf402cCUWjgLDuKC0vWhME2fIPs1hhDGzD6Msnli790sAW2EFnGJIg2SxGqiPFUanRV0PfhaW7CaqNwEIk+PBtSb7Ul/RBOVqkvDr9OW0PY4+5T9SlVVaagHiWJJ6otSVKXZIVH6DEjzWX8FSJg4UUm2rFSzQ1PvkCeEepqu61tAFpm2RYzuUbk3EYUqrD4CdLvSOYlqYzhR7Ijnp2yAEMw+fQ6C3UrbqiQmfIhPy+NQ32aBfC4uJq4oFRjt+nIPAE20YO7RRl33grnHdKL2BWFPZx+CuEYo+gKEGzHDicotUZdOvj0+ZYz63cJhy8KJYuVFJhc8WGhOZp/Se/rYc4NEQVbPUcQAKFBpTFeKsx53bCy0VydF3stv8oQO0ph+0tNO3fQ80/9d1taFNBYUCWfKbqJGknAhjeEGUBxOmXnX1iVd5+kypj7ozVmVkHJUmL2QxhTcWXiQ4UTFSGPKRPW0IZLYFGUJU+dcGlO2Isd5MDXP5H2fS2lM2RbIZShkOFEX0hiZezhRiOFEtRF6PUmUPgQbmiiR3UR51qk0pg8Aadg9h+FE5SYQetGY9qCPY1L6MOn9VSmHSGPRu+uiuCOT0UOpeUXQD4hKY6RIrKb0fzhR6XmL2LfZIRSZfbiRCK7np8w5qyK8gYM0RhdUD8ypRDGAyS9zSDcbIEZmn951gl8kvak5/SzQNFL5+mCgh4li0jMR8GYF0liAB/2/kKi9GPHtKMNQ9BsxnajcSyjMBkyDQqh3U/W04Xd5KKH50SA7CEvfCFosJ2okRGafvgqUCn2F0vXm2G/yFHGN6TOw08JEpezJvG9x4hpTloXeX0hU1DWGmwl6qNdnEtOJOnGNKTtAWwtlxaIB84gWdY0VBbq8mE9UHwof4gRuz+n5V3tC6Xoo+btEpTEPOdxfSFRUGlP6gNZB7YXxRJ1IYz4VKvS9wKD3PELUNaaPAG3WcaJYtVYFRF1jyotY5IKH8/R7j+tXRFxj+h5QRUlbMmutCoi6xpQtlVvI0xyMmhVDotJYEVAnCMMeuJCIa0yZ0A6JJIpVD1zA0TWGN17JD82K7D0fdcKHa4xKE1RD6onMeuBCFhFxwqHShLZl11oVQFxjyoc0QTsk9hP14Roj2hE9KbLsgQsJXWMRaaIosOuBC3hQP6QxZQl6HE1U8k/8Sj8H11ggTQSJYtcDF3J0jWlbesOrTVBaXkn/UyKusWJhRX5VlJhP1ODDNRZKEzhR7HrgQrroII15Erme0osSUz9pN46jNKb06eWNMmc/UUfXmD6VSIfEtAcu5EMa00f08kZh2awYcpTGlBV9BsJj8IUg5wzx7NMj0oQyRAxbqwLa0FkEx0PtVSV9BdNmxZCjayyQJnCiBNYTlZug0DWmBZc3TJsVQ9rCwTXmiV2dmhULzCdqc5DGQmnCc1j2wIUcXWMI0Z4CJv8MDBZoq6E0dpAm/kKiekAMxAm9K3k6p7NtVgw5uMb0GaBy0pRpa1XAh2tMeSE+bcbNiiEH15jeA/TGjW0PXMjBNRZIE4ybFUM+XGNFkT4x9ScSdXCNBdIE62bFkMO7xgJfKeNmxZCDNBZIE38kUR+usX+kVdJXkGkPXEjoGgukCX0mpe3HCPyEgzSmPxGjlf7EtlkxJJTG9D25vPkjiTpIY8or8ZXiRDFtVgzhVCqN6b3CkqwoaLHf9ZGf0QaDe1AqTTgFtj0TAaFrTC9KKzL5GHo/fQKha4xIE4r+70/kiUhj1DXm4VNiT2L6uYcjbRERYVYZFIasOxWPFC20KGqKtkLT0l/YnygDyxGWu6fptMT65W6EIgSCIKn/2HYpnsPNRjO2DbIZGRkZGRkZGRkZGRkZGRkZGRn/F/4Lw35qR75Hk/IAAAAASUVORK5CYII="
  },
  papper : {
    name : "Papper",
    img : "data:image/jpeg;base64,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"
  }
};

function App() {
  let [userSelect, setUserSelect] = useState(null);
  let [computerSelect, setComputerSelect] = useState(null);
  let [result, setResult] = useState("");
  const play =(userChoice) =>{
    //함수를 콜백함수 형태로 넣어줘야함 
   setUserSelect(choice[userChoice]);
   let computerChoice = randomChoice(); 
   setComputerSelect(computerChoice);
   setResult(judgment(choice[userChoice],computerChoice));
  };

  const randomChoice=()=>{
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 배열로 만들어 주는 함수
    let ramdomItem = Math.floor( Math.random() * itemArray.length) ;//0~1사이의 값을 반환 X 배열의 길이
    let final = itemArray[ramdomItem];
    return choice[final];
  }

  const judgment=(user, computer)=>{
    //가위 바위 보
    if(user.name == computer.name){
      return "tie";
    }else if(user.name == "Rock" ) return computer.name =="Sciccor"?'win':'lose'
    else if(user.name == "Sciccor" ) return computer.name =="Papper"?'win':'lose'
    else if(user.name == "Papper" ) return computer.name =="Rock"?'win':'lose'
  }
  return (
    <div>
      <div className="main" >
        <Box title = "you" item ={userSelect} result ={result} />
        <Box title ="computer" item ={computerSelect} result ={result} />
      </div>
      <div className="main">
        <button onClick = { () => play("scissors")} >가위</button>
        <button onClick = { () => play("rock")} >바위</button>
        <button onClick = { () => play("papper")} >보</button>
      </div>
    </div>
  );
}

export default App;
