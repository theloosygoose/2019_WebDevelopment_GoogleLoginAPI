# 2019_WebDevelopment_GoogleLoginAPI
Repo for people in Computer Science class to download and implement into their websites.
<br>


## Google Developer Console 
  Go to https://console.developers.google.com/apis/dashboard
  
 ### Making a Project and adding APIs
  
  Click **Create** , name project, and click **CREATE**
  
  After finishing the creation go to **+ ENABLE APIS AND SERVICES** and search for **Google People API**; click **ENABLE**
  
  
  ### Credentials
 
  On the sidebar go to the Credentials tab and click the **Create credentials** dropdown --> **0Auth client ID**
 
  * If a notice comes up that says _To create an OAuth client ID, you must first set a product name on the consent screen_ Go to the  configure consent screen page.

  Select **Web application**  

  For **Authorized JavaScript origins** put the domain of the website you will be calling the login from.

  **Authorized redirect URIs** put the output page after the user logs in or have it redirect to the original screen.

  *Note that both of these things can be set to localhost indicated with the correct PORT*

  ### 0Ath Consent Screen

  Set Application type to **Internal** to limit only users in organization to access
  
  For **Authorized domains** put down the domain of your website and **Application Homepage link** put the `index.html` or home route
  
  * Follow this [link to verify your domain](https://search.google.com/search-console/welcome)
  *Note localhost doesn't have to be verified*

  ## The Code

  The code for this is pretty simple add and subtract the parts that you want. 
  
  **Here are the must haves.**

 ```js   
    function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
        
    // Do not send to your backend! Use an ID token instead.
    // Now the Name of the user is in the variable userName.

    var userName = profile.getName();

    document.getElementById("userName").innerHTML = userName;

    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
  ```

  This is the js that allows the website to fetch and implement the data form the Google Client

  ```html
        <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
  ```
  Button for Google Login 

  ```html
    <meta name="google-signin-client_id" content="CLIENT_ID">
    <script src="https://apis.google.com/js/platform.js" async defer></script>


  ```
  This `meta` tag is the key that allows you to open your "apartment" (Personal Google Developer Console)

  The `script` tag lets you into the "apartment complex" (General Google APIs)

  




  




 
  

