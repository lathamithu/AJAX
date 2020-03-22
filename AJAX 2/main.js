        $(document).ready(function(){
            $("#addlist").click(function(){

                var txt = JSON.stringify( { "List": ($('#list').val()) } ); 
                $.ajax({ 
                    url: 'https://api.backendless.com/36DC4E7A-2B33-40D0-A382-FD197E23A89B/BC24AD0C-019C-42A0-BAAD-229B8D8F7222/data/AJAX',
                    type: 'post',
                    contentType: 'application/json',
                    data: txt,
                    success: function( data){
                        
                        $('#ul').text(JSON.stringify( data ) );
                        
                    },
                    error: function(errorThrown ){
                        console.log( errorThrown );
                    }
                });

            });
            
            
          });

