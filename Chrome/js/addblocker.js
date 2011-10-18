
addblocker = {
	inserted: false,
	number_alerts: null,
	frame: null,
	number_notifications: 0
};
       


//DISABLE THIS WHEN TROBLESHOOTING
//function noError(){return true;}
//window.onerror = noError;




//AFTER DOCUMENT LOAD
window.onload = function() {
	addblocker.getNotifications();
	setInterval(addblocker.getNotifications, 10000);
	setInterval(addblocker.updateAlert, 500);
};	


addblocker.checkStatuses = function(statuses){
	addblocker.number_notifications = 0;
	for(i =0; i<statuses.length; i++){
		if(statuses[i].unread){	
			if(statuses[i].html.indexOf("added you") == -1)
			{
				addblocker.number_notifications++;
			}
		}
	}
	
	
}

addblocker.updateAlert = function(){
	var iframes = document.getElementsByTagName('iframe');
	for(i=0;i< iframes.length; i++)
	{
	if(iframes[i].id == "canvas_frame"){
	var doc = iframes[i].contentDocument || iframe[i].contentWindow.document;
    if(addblocker.number_notifications == 0)
	{
		doc.getElementById("gbi1a").style.background = "url(http://www.elizabethandclarke.com/style/images/Gray.jpg)";
 	}
	else{
		doc.getElementById("gbi1a").style.background =  "url(http://www.elizabethandclarke.com/style/images/Red.jpg)";
	}
	doc.getElementById("gbi1").innerHTML = addblocker.number_notifications;	
	
}
}
}

addblocker.getNotifications = function(){
	chrome.extension.sendRequest({message: "xhr"}, function(response) {
	  addblocker.checkStatuses(response.statuses);
	});     
 }





