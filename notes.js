//HOW TO DELETE LAST CHARACTER FROM STRING

//#####################################################################################################
//#####################################   USING ARRAY   ###############################################
//#####################################################################################################
//String.prototype.split()
/*
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
Syntax:
    split() -> "738743" -> ["738743"]
    split(separator)
    split(separator, limit)
*/
let displayArray = display.innerHTML.split("");
//If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".
//display.innerHTML == "738743" -> ["7","3","8","7","4","3"]

//#####################################################################################################
//#####################################################################################################
//Array.prototype.splice()
/*
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

Syntax:
    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2, itemN)
*/
displayArray.splice((displayArray.length - 1),1);
//to remove last element of array -> BUT WHEN ARRAY HAS JUST ONE ELEMENT TOTAL -> IT WILL NOT WORKTHEN IT ;//NEEDS TO BE CALLED TWICE -> OR CHECK THE LENGHT OF ARRAY TO BE 1 -> THEN JUST DISPLAY.INNERHTML = "0";

//#####################################################################################################
//#####################################################################################################
//Array.prototype.join()
/*
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

Syntax:
    join()
    join(separator) - OPTIONAL:
    Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.

A string with all array elements joined. If arr.length is 0, the empty string is returned.
*/
display.innerHTML = displayArray.join('');

//#####################################################################################################
//#################################     USING STRING METHOD       #####################################
//#####################################################################################################
//#####################################################################################################

//String.prototype.slice()
/*
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

Syntax
    slice(beginIndex)
    slice(beginIndex, endIndex)
*/

display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);

//String.prototype.substring()
/*
The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

Syntax
    substring(indexStart)
    substring(indexStart, indexEnd)
*/

display.innerHTML = display.innerHTML.substirng(0, display.innerHTML.length - 1);