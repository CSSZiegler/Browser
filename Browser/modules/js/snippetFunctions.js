/******************************************************************
*	Name    : navigateToFrmBrwStaticHTML
*	Author  : Kony
*	Purpose : Navigate to frmBrwStaticHTML
******************************************************************/


function navigateToFrmBrwStaticHTML(){
	frmBrwStaticHTML.show();
}


/******************************************************************
*	Name    : navigateToFrmBrwStaticHTML
*	Author  : Kony
*	Purpose : Navigate to frmFeatures
******************************************************************/

function navigateToFrmFeatures(){
	frmFeatures.show();
}


/***************************************************************************************************************
*	Name    : navigateToFrmBrwDynamicURL
*	Author  : Kony
*	Purpose : Set relevant properties of browser widget on frmBrwDynamicURL  and navigate to frmBrwDynamicURL
***************************************************************************************************************/

function navigateToFrmBrwDynamicURL(eventObj){
	switch(eventObj.text){
	case "Browser with Dynamic Content":
			frmBrwDynamicURL.destroy();
			frmBrwDynamicURL.title= "Dynamic";
		  	frmBrwDynamicURL.brwDynamicURL.requestURLConfig = {URL:'http://www.kony.com/',requestMethod:constants.BROWSER_REQUEST_METHOD_GET};
			frmBrwDynamicURL.brwDynamicURL.detectTelNumber = false;
			frmBrwDynamicURL.brwDynamicURL.enableZoom      = false;
			
		break;
	case "Detect Telephone Number":
			frmBrwDynamicURL.destroy();
			
			if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad")
			{
			 			frmBrwDynamicURL.title= "Detect Telephone Number";
			}
			else if(kony.os.deviceInfo().name == "android" )
			{
			frmBrwDynamicURL.lblDynamicURL.text= "Detect Telephone Number";
			}
			else if(kony.os.deviceInfo().name == "WindowsPhone")
			{
			frmBrwDynamicURL.lblHeader.text= "Detect Telephone Number";
			}
			
			frmBrwDynamicURL.brwDynamicURL.requestURLConfig = {URL:'http://www.kony.com/contact',requestMethod:constants.BROWSER_REQUEST_METHOD_GET};
			frmBrwDynamicURL.brwDynamicURL.detectTelNumber = true;
			frmBrwDynamicURL.brwDynamicURL.enableZoom      = false;
			
		break;
	case "Enable Zoom Property of Browser":
			frmBrwDynamicURL.destroy();
			
			if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad")
			{
						frmBrwDynamicURL.title= "Enable Zoom";
			}
			else if(kony.os.deviceInfo().name == "android" )
			{         
			            frmBrwDynamicURL.lblDynamicURL.text= "Enable Zoom";
			}
			else if(kony.os.deviceInfo().name == "WindowsPhone")
			{
			    		frmBrwDynamicURL.lblHeader.text= "Enable Zoom";
			}
			frmBrwDynamicURL.brwDynamicURL.requestURLConfig = {URL:'http://www.kony.com/apps',requestMethod:constants.BROWSER_REQUEST_METHOD_GET};
			frmBrwDynamicURL.brwDynamicURL.detectTelNumber = false;
			frmBrwDynamicURL.brwDynamicURL.enableZoom      = true;
			
		break;
		default:
		break;
	}
	frmBrwDynamicURL.show();
}

/****************************************************************************************
*	Name    : navigateToFrmInLineBrowser
*	Author  : Kony
*	Purpose : Navigate to frmInLineBrowser
****************************************************************************************/

function navigateToFrmInLineBrowser()
{

	frmInLineBrowser.show();
}


/****************************************************************************************
*	Name    : onSuccessCallback
*	Author  : Kony
*	Purpose : Enable or disable back and forward button when a new page is loaded
****************************************************************************************/

function onSuccessCallback(){
    if(frmInLineBrowser.brwInline.canGoBack()!=true)
	{
			frmInLineBrowser.btnInlineBack.skin="sknBtnFocusSampleApp";
	}
	else
	{
		frmInLineBrowser.btnInlineBack.skin="sknBtnNormalSampleApp";
	}
		
	if(frmInLineBrowser.brwInline.canGoForward()!=true)
	{
			frmInLineBrowser.btnInlineForward.skin="sknBtnFocusSampleApp";
	}
	else
	{
			frmInLineBrowser.btnInlineForward.skin="sknBtnNormalSampleApp";	
	}
	
}

/****************************************************************************************
*	Name    : onFailureCallback
*	Author  : Kony
*	Purpose : Enable or disable back and forward button when a new page failed to load
****************************************************************************************/

function onFailureCallback(){
	if(frmInLineBrowser.brwInline.canGoBack()!=true)
	{
		frmInLineBrowser.btnInlineBack.skin="sknBtnFocusSampleApp";
	}
	else
	{
	 	frmInLineBrowser.btnInlineBack.skin="sknBtnNormalSampleApp";
	}
	
	if(frmInLineBrowser.brwInline.canGoForward()!=true)
	{
	 	frmInLineBrowser.btnInlineForward.skin="sknBtnFocusSampleApp";
	}
	else
	{
	 	frmInLineBrowser.btnInlineForward.skin="sknBtnNormalSampleApp";	
	}
}

/****************************************************************************************
*	Name    : goBack
*	Author  : Kony
*	Purpose : Goto previous page depending on availability of history
***************************************************************************************
*/

function goBack(){
	if(frmInLineBrowser.brwInline.canGoBack()==true){
		frmInLineBrowser.brwInline.goBack();
		}
}
/****************************************************************************************
*	Name    : goForward
*	Author  : Kony
*	Purpose : Goto forward page depending on availability of history
***************************************************************************************
*/

function goForward(){
	if(frmInLineBrowser.brwInline.canGoForward()==true){
		frmInLineBrowser.brwInline.goForward();
		}
}

/****************************************************************************************
*	Name    : reload
*	Author  : Kony
*	Purpose : Reload current page
***************************************************************************************
*/

function reload(){
	frmInLineBrowser.brwInline.reload();
}