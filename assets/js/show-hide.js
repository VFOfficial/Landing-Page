// Show and Hide password
$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});
// Show and Hide password - Retype
$(document).ready(function() {
    $("#retype_show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#retype_show_hide_password input').attr("type") == "text"){
            $('#retype_show_hide_password input').attr('type', 'password');
            $('#retype_show_hide_password i').addClass( "fa-eye-slash" );
            $('#retype_show_hide_password i').removeClass( "fa-eye" );
        }else if($('#retype_show_hide_password input').attr("type") == "password"){
            $('#retype_show_hide_password input').attr('type', 'text');
            $('#retype_show_hide_password i').removeClass( "fa-eye-slash" );
            $('#retype_show_hide_password i').addClass( "fa-eye" );
        }
    });
});