$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();

    var string = $("#checkString").val();

    var result = palindrome(string);

    $("#resultBox").text(result);

    function palindrome(str) {
      var len = str.length;
      var med = Math.floor(len/2);
      var j = len-1;
      for (var i = 0; i < med; i++) {
        if (str[i] != str[j]) {
          return false;
        }
        j--;
      }
      return true;
    };

  });


});
