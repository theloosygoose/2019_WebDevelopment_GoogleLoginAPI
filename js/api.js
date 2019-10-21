function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());

     // Do not send to your backend! Use an ID token instead.
    var userName = profile.getName();

    document.getElementById("userName").innerHTML = userName;

    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }