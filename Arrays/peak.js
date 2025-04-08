//INput : 1 2 4 7 5 2 1
//Output : 7 because its peak


function peak (n) {
    let left = 0;
    let right = n.length-1;

    while(left < right){
        let mid = Math.floor((left+right)/2);

        if(n[mid] < n[mid+1]) {
            left = mid+1;
        } else {
            right =  mid;
        }
    }
    return n[left];
}

const input = [1,2,3,4,8,6,5,4]
console.log(peak(input));