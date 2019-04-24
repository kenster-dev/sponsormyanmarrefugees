
$(document).ready(() => {


   $('#loginForm').on('submit', function(e) {
      e.preventDefault();

      $.ajax({
         url: 'https://myapi.com/smr/endpoint',
         type: 'POST',
         data: $(this).serialize(),
         success: (res) => {
            alert(res);
         },
         error: (jqXHR, textStatus, errThrown) => {
            alert(textStatus);
         }
      });
   });


});
