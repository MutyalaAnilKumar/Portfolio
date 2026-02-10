// let nums = [1,1,0,1,1,1]

const { log } = require("node:console")

// async function leet(nums){
//     let count=0
//     for(let i=0;i<nums.length;i++){
//         count++
//         const maxcount=Math.max(nums,count)
//     }
//     return maxcount
// }

// console.log(leet(nums));

// function calculateChannelEarnings() {
//    let targetViews=100000

//    let totalVideos=1000

//    let fixedPayout=1000
//    let videoEarnings=0
//    let amount=0
//    let remainingVideos=totalVideos

//        let withdrawals = [100, 200, 300];

//     let withdrawnMoney = 0;
//     for (let i = 0; i < withdrawals.length; i++) {
//         withdrawnMoney = withdrawnMoney + withdrawals[i];
//     }

//    let first=Math.min(remainingVideos,100)
//    amount=first*0.1
//    videoEarnings=videoEarnings+amount
//     remainingVideos=remainingVideos-first

//    let second=Math.min(remainingVideos,200)
//    amount=second*0.5
//    videoEarnings=videoEarnings+amount
//  remainingVideos=remainingVideos-second

//  let third=Math.min(remainingVideos,300)
//  amount=third*0.8
//  videoEarnings=videoEarnings+amount

//   remainingVideos=remainingVideos-third

//   let fourth=remainingVideos
//   amount=fourth*3.5
//   videoEarnings=videoEarnings+amount





//   const totalEarn=videoEarnings+fixedPayout
//   const withdraw=totalEarn-withdrawnMoney
//   const availableBal=withdraw

//   console.log("totalEarn",totalEarn)
//   console.log("videoEarnings",videoEarnings);
//   console.log("availableBal",availableBal)
//   console.log("withdrawAmount",withdrawnMoney)
  
  


// }


// let result = calculateChannelEarnings();

let nums=[1,1,0,1,1,1,1]

var findMaxConsecutiveOnes = function(nums) {
    let count=0
    let i
    let maxcount=0

    for(i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++
            maxcount=Math.max(maxcount,count)
        }else{
            count=0
        }
    }

    return maxcount
}

console.log(findMaxConsecutiveOnes(nums))




  
 

