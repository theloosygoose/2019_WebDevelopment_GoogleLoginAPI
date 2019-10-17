# 2019_WebDevelopment_GoogleLoginAPI
Repo for people in the class to donwload to implement into their website. Google Slides Cookbook is being emailed or I might put the
public link in here. <br>


## Google Developer Console 
  Go to https://console.developers.google.com/apis/dashboard
  
 ### Making a Project and adding APIs
  
  Click **Create** , name project, and click **CREATE**
  
  After finishing the creation go to **+ ENABLE APIS AND SERVICES** and search for <b> Google People API </b>; click <b> ENABLE </b>
  
  Click <b> CREATE CREDENTIALS </b> and input <b> 1. People API </b> and <b> 2. From a web browser </b> 
  
  For <i> Authorized JavaScript origins </i> and <i> Authorized redirect URIs </i> type in the general server ip or domain and redirect URLS.
  
  
### Credentials
 
 On the sidebar go to the Credentials tab and click the <b> Create credentials </b> dropdown --> <b> 0Auth client ID </b>
 
* If a notice comes up that says _To create an OAuth client ID, you must first set a product name on the consent screen_ Go to the  configure consent screen page.

Select **Web application**  
For **Authorized JavaScript origins** put the route for where you will be calling the login from.
**Authorized redirect URIs** put the output page after the consent screen

### 0Ath Consent Screen

Set Application type to <b>Internal</b> to limit only users in organization to access

For **Authorized domains** put down the domain of your website and **Application Homepage link** put the `index.html` route

 * Follow this [link to verify your domain](https://search.google.com/search-console/welcome)

  




 
  

