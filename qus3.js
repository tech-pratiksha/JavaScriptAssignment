<script>
// Javascript Program to find the parity of a given number
 
// Function to find the parity
function findParity(x) {
    let y = x ^ (x >> 1);
    y = y ^ (y >> 2);
    y = y ^ (y >> 4);
    y = y ^ (y >> 8);
    y = y ^ (y >> 16);
 
    // Rightmost bit of y holds the parity value
    // if (y&1) is 1 then parity is odd else even
    if (y & 1)
        return 1;
    return 0;
}
 
// Driver code
 
(findParity(9) == 0) ? document.write("Even Parity<br>") :
    document.write("Odd Parity<br>");
 
(findParity(13) == 0) ? document.write("Even Parity<br>") :
    document.write("Odd Parity<br>");
 
// This code is contributed by _saurabh_jaiswal
</script>