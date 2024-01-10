function bouncingBall(h,  bounce,  window) {
  let totals=-1
  if(h>0&&bounce>0&&bounce<1&&h>window){
    while(h>window){
      console.log(h)
      h *= bounce
      totals+=2
    }
  }
  else{
    totals=-1
  }
  return totals
}
