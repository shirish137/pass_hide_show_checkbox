 $(document).ready(function(){
				    
					$('#chkbox').click(function(){
					    var temp;
                        temp=$('#passid').attr('type');
						//alert(temp);
                        if(temp=='password'){
						   
						   $('#passid').attr('type','text');
						  
						}
						else
						{
						   $('#passid').attr('type','password');
						  
						}
					});
				});	 