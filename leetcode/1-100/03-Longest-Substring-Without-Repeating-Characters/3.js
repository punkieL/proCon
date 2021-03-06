/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    var longest = 0
    var spos = 0
    var epos = 0
    var j
    var maxTypeNum = s.length;
    var table

    table = {}
    for(var i = 0; i < s.length; i++){
      table[s[i]] = true;
    }
    if(s != "") maxTypeNum = Object.keys(table).length;
    //console.log(maxTypeNum);

    for(var i = 0; i < s.length; i++){
        table = {}
        for( j = i + 1; j <= s.length; j++){
            if(table[s[j-1]] == null)
                table[s[j-1]] = true
            else
                break;
        }
        if(j - i - 1 > longest){
            longest = j - i - 1
            spos = i
            epos = j - 1
        }
        //console.log("longest:" + longest);
        //console.log("s:" + spos + " e:" + epos);
        if(longest >= maxTypeNum)
          break;
    }
    //console.log(s.substring(spos,epos))
    return epos - spos
};
