$('document').ready(function(){

    //validation code
    $("#register-form").validate({

        rules:
        {
            fname: {
                required: true,
                minlength: 4
            },
            lname: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            phoneNumber: {
                required:true,
                number: true,
                minlength:10,
                maxlength:11
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            cpassword: {
                required: true,
                equalTo: '#password'
            }
        },
        messages:
        {
            fname: {
                required: "Please Enter User  First Name",
                lettersonly: "Name must contain only alphabets and space",
                minlength: "Your First Name is Too Short"
            },
            lname: {
                required: "Please Enter Last User Name",
                lettersonly: "Name must contain only alphabets and space",
                minlength:  "Your Last Name is Too Short"
            },
            email: {
                required:  "Please Enter Email Address",
                email:  "Enter Valid Email Address"
            },
            phoneNumber: {
                required:"Please Enter Phone Number",
                number:  "Enter correctly numbers ",
                minlength:"You miss some number",
                maxlength:"Your number is too long "
            },
            password:{
                required: "Please Enter Password",
                minlength: "Password at least have 8 characters"
            },

            cpassword:{
                required: "Please Retype your Password",
                equalTo: "Password Did not Match !"
            }
        },
        errorPlacement : function(error, element) {
            $(element).closest('.form-group').find('.help-block').html(error.html());
        },
        highlight : function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
            $(element).closest('.form-group').find('.help-block').html('');
        },

        //submit code
        submitHandler: function(form){

            alert('submitted');
            form.submit();

        }

    });

    //date block code
    $(function () {
        $('#datetimepicker1').datetimepicker();
    });
});

    //cap4a code
    var onloadCallback = function() {
        grecaptcha.render('html_element', {
            'sitekey' : '113'
        });
    };

