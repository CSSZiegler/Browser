/*
*****************************************************************
*	Name    : navigateToFrmBrwStaticHTML
*	Author  : Kony
*	Purpose : Navigate to frmBrwStaticHTML
*****************************************************************
*/


function navigateToFrmBrwStaticHTML(){
	frmBrwStaticHTML.show();
}


/*
*****************************************************************
*	Name    : navigateToFrmBrwStaticHTML
*	Author  : Kony
*	Purpose : Navigate to frmFeatures
*****************************************************************
*/


function navigateToFrmFeatures(){
	frmFeatures.show();
}
/*
**************************************************************************************************************
*	Name    : navigateToFrmBrwDynamicURL
*	Author  : Kony
*	Purpose : Set relevant properties of browser widget on frmBrwDynamicURL  and navigate to frmBrwDynamicURL
**************************************************************************************************************
*/

function navigateToFrmBrwDynamicURL(eventObj){
	switch(eventObj.text){
	case "Dynamic URL content":
		frmBrwDynamicURL.title= "Dynamic URL content";
		frmBrwDynamicURL.brwDynamicURL.detectTelNumber= true;
		break;
	case "Detect Telephone Number":
		frmBrwDynamicURL.title= "Detect Telephone Number";
		frmBrwDynamicURL.brwDynamicURL.detectTelNumber= true;
		break;
	case "Enable zoom":
		frmBrwDynamicURL.title= "Enable zoom";
		frmBrwDynamicURL.brwDynamicURL.enableZoom= true;
		break;
	case "Screen level widget":
		frmBrwDynamicURL.title= "Screen level widget";
		frmBrwDynamicURL.brwDynamicURL.screenLevelWidget= true;
		break;
	default:
		break;
	}
	frmBrwDynamicURL.show();
}

/*
***************************************************************************************
*	Name    : navigateToFrmInLineBrowser
*	Author  : Kony
*	Purpose : Navigate to frmInLineBrowser
***************************************************************************************
*/

function navigateToFrmInLineBrowser(){
	frmInLineBrowser.show();
}

/*
***************************************************************************************
*	Name    : onSuccessCallback
*	Author  : Kony
*	Purpose : Enable or disable back and forward button when a new page is loaded
***************************************************************************************
*/

function onSuccessCallback(){
	if(frmInLineBrowser.brwInline.canGoBack()!=true)
		frmInLineBrowser.btnInlineBack.skin="sknBtnFocusSampleApp";
	else
		frmInLineBrowser.btnInlineBack.skin="sknBtnNormalSampleApp";
		
	if(frmInLineBrowser.brwInline.canGoForward()!=true)
		frmInLineBrowser.btnInlineForward.skin="sknBtnFocusSampleApp";
	else
		frmInLineBrowser.btnInlineForward.skin="sknBtnNormalSampleApp";	
}

/*
***************************************************************************************
*	Name    : onFailureCallback
*	Author  : Kony
*	Purpose : Enable or disable back and forward button when a new page failed to load
***************************************************************************************
*/

function onFailureCallback(){
	if(frmInLineBrowser.brwInline.canGoBack()!=true)
		frmInLineBrowser.btnInlineBack.skin="sknBtnFocusSampleApp";
	else
		frmInLineBrowser.btnInlineBack.skin="sknBtnNormalSampleApp";
		
	if(frmInLineBrowser.brwInline.canGoForward()!=true)
		frmInLineBrowser.btnInlineForward.skin="sknBtnFocusSampleApp";
	else
		frmInLineBrowser.btnInlineForward.skin="sknBtnNormalSampleApp";	
	
}

/*
***************************************************************************************
*	Name    : goBack
*	Author  : Kony
*	Purpose : Goto previous page depending on availability of history
***************************************************************************************
*/

function goBack(){
	if(frmInLineBrowser.brwInline.canGoBack()==true)
		frmInLineBrowser.brwInline.goBack();
}

/*
***************************************************************************************
*	Name    : goForward
*	Author  : Kony
*	Purpose : Goto forward page depending on availability of history
***************************************************************************************
*/

function goForward(){
	if(frmInLineBrowser.brwInline.canGoForward()==true)
		frmInLineBrowser.brwInline.goForward();
}

/*
***************************************************************************************
*	Name    : reload
*	Author  : Kony
*	Purpose : Reload current page
***************************************************************************************
*/

function reload(){
	frmInLineBrowser.brwInline.reload();
}