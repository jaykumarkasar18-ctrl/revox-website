export const R=n=>{const a=Math.abs(n);return(n<0?"−":"")+"₹"+(a>=1e7?(a/1e7).toFixed(2)+" Cr":a>=1e5?(a/1e5).toFixed(1)+" L":Math.round(a).toLocaleString("en-IN"))};
export const N=n=>Math.round(n).toLocaleString("en-IN");
