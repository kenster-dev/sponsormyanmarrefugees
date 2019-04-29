const serverUrl = 'http://localhost:8000/smr';
$(document).ready(() => {


   $('#loginForm').on('submit', function(e) {
      e.preventDefault();

      $.ajax({
         url: serverUrl + '/login',
         type: 'POST',
         data: $(this).serialize(),
         success: (res) => {
            console.log(res);
         },
         error: (jqXHR, textStatus, errThrown) => {
            alert(jqXHR.responseText);
         }
      });
   });


});
